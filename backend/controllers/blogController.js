const { validationResult } = require('express-validator');
const Blog = require('../models/Blog');
const Category = require('../models/Category');
const asyncHandler = require('../utils/asyncHandler');
const AppError = require('../utils/appError');
const cloudinary = require('../config/cloudinary');

// @desc    Get all published blogs
// @route   GET /api/blog
// @access  Public
exports.getAllBlogs = asyncHandler(async (req, res, next) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;
  const skip = (page - 1) * limit;
  const category = req.query.category;
  const tag = req.query.tag;
  const sort = req.query.sort || '-publishedAt';

  let query = { status: 'published' };
  
  if (category) {
    const categoryDoc = await Category.findOne({ slug: category });
    if (categoryDoc) {
      query.category = categoryDoc._id;
    }
  }
  
  if (tag) {
    query.tags = { $in: [tag] };
  }

  const blogs = await Blog.find(query)
    .populate('author', 'name avatar bio')
    .populate('category', 'name slug color')
    .sort(sort)
    .skip(skip)
    .limit(limit);

  const total = await Blog.countDocuments(query);

  res.status(200).json({
    success: true,
    count: blogs.length,
    total,
    page,
    pages: Math.ceil(total / limit),
    blogs
  });
});

// @desc    Get featured blogs
// @route   GET /api/blog/featured
// @access  Public
exports.getFeaturedBlogs = asyncHandler(async (req, res, next) => {
  const blogs = await Blog.find({ status: 'published', featured: true })
    .populate('author', 'name avatar bio')
    .populate('category', 'name slug color')
    .sort('-publishedAt')
    .limit(5);

  res.status(200).json({
    success: true,
    count: blogs.length,
    blogs
  });
});

// @desc    Get popular blogs
// @route   GET /api/blog/popular
// @access  Public
exports.getPopularBlogs = asyncHandler(async (req, res, next) => {
  const blogs = await Blog.find({ status: 'published' })
    .populate('author', 'name avatar bio')
    .populate('category', 'name slug color')
    .sort('-views -likes')
    .limit(10);

  res.status(200).json({
    success: true,
    count: blogs.length,
    blogs
  });
});

// @desc    Search blogs
// @route   GET /api/blog/search
// @access  Public
exports.searchBlogs = asyncHandler(async (req, res, next) => {
  const { q, page = 1, limit = 10 } = req.query;
  
  if (!q) {
    return next(new AppError('Search query is required', 400));
  }

  const skip = (page - 1) * limit;

  const searchQuery = {
    status: 'published',
    $or: [
      { title: { $regex: q, $options: 'i' } },
      { excerpt: { $regex: q, $options: 'i' } },
      { content: { $regex: q, $options: 'i' } },
      { tags: { $in: [new RegExp(q, 'i')] } }
    ]
  };

  const blogs = await Blog.find(searchQuery)
    .populate('author', 'name avatar bio')
    .populate('category', 'name slug color')
    .sort('-publishedAt')
    .skip(skip)
    .limit(parseInt(limit));

  const total = await Blog.countDocuments(searchQuery);

  res.status(200).json({
    success: true,
    count: blogs.length,
    total,
    page: parseInt(page),
    pages: Math.ceil(total / limit),
    blogs
  });
});

// @desc    Get single blog by slug
// @route   GET /api/blog/:slug
// @access  Public
exports.getBlogBySlug = asyncHandler(async (req, res, next) => {
  const blog = await Blog.findOne({ slug: req.params.slug, status: 'published' })
    .populate('author', 'name avatar bio socialLinks')
    .populate('category', 'name slug color');

  if (!blog) {
    return next(new AppError('Blog not found', 404));
  }

  // Get related blogs
  const relatedBlogs = await Blog.find({
    _id: { $ne: blog._id },
    category: blog.category._id,
    status: 'published'
  })
    .populate('author', 'name avatar')
    .populate('category', 'name slug color')
    .sort('-publishedAt')
    .limit(3);

  res.status(200).json({
    success: true,
    blog,
    relatedBlogs
  });
});

// @desc    Create new blog
// @route   POST /api/blog
// @access  Private (Author/Admin)
exports.createBlog = asyncHandler(async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return next(new AppError('Validation failed', 400, errors.array()));
  }

  req.body.author = req.user.id;

  const blog = await Blog.create(req.body);
  await blog.populate('author', 'name avatar bio');
  await blog.populate('category', 'name slug color');

  res.status(201).json({
    success: true,
    blog
  });
});

// @desc    Update blog
// @route   PUT /api/blog/:id
// @access  Private (Author/Admin)
exports.updateBlog = asyncHandler(async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return next(new AppError('Validation failed', 400, errors.array()));
  }

  let blog = await Blog.findById(req.params.id);

  if (!blog) {
    return next(new AppError('Blog not found', 404));
  }

  // Make sure user is blog owner or admin
  if (blog.author.toString() !== req.user.id && req.user.role !== 'admin') {
    return next(new AppError('Not authorized to update this blog', 401));
  }

  blog = await Blog.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true
  })
    .populate('author', 'name avatar bio')
    .populate('category', 'name slug color');

  res.status(200).json({
    success: true,
    blog
  });
});

// @desc    Delete blog
// @route   DELETE /api/blog/:id
// @access  Private (Author/Admin)
exports.deleteBlog = asyncHandler(async (req, res, next) => {
  const blog = await Blog.findById(req.params.id);

  if (!blog) {
    return next(new AppError('Blog not found', 404));
  }

  // Make sure user is blog owner or admin
  if (blog.author.toString() !== req.user.id && req.user.role !== 'admin') {
    return next(new AppError('Not authorized to delete this blog', 401));
  }

  await blog.deleteOne();

  res.status(200).json({
    success: true,
    message: 'Blog deleted successfully'
  });
});

// @desc    Publish blog
// @route   POST /api/blog/:id/publish
// @access  Private (Author/Admin)
exports.publishBlog = asyncHandler(async (req, res, next) => {
  const blog = await Blog.findById(req.params.id);

  if (!blog) {
    return next(new AppError('Blog not found', 404));
  }

  // Make sure user is blog owner or admin
  if (blog.author.toString() !== req.user.id && req.user.role !== 'admin') {
    return next(new AppError('Not authorized to publish this blog', 401));
  }

  blog.status = 'published';
  blog.publishedAt = new Date();
  await blog.save();

  res.status(200).json({
    success: true,
    blog
  });
});

// @desc    Unpublish blog
// @route   POST /api/blog/:id/unpublish
// @access  Private (Author/Admin)
exports.unpublishBlog = asyncHandler(async (req, res, next) => {
  const blog = await Blog.findById(req.params.id);

  if (!blog) {
    return next(new AppError('Blog not found', 404));
  }

  // Make sure user is blog owner or admin
  if (blog.author.toString() !== req.user.id && req.user.role !== 'admin') {
    return next(new AppError('Not authorized to unpublish this blog', 401));
  }

  blog.status = 'draft';
  await blog.save();

  res.status(200).json({
    success: true,
    blog
  });
});

// @desc    Toggle blog like
// @route   POST /api/blog/:id/like
// @access  Private
exports.toggleLike = asyncHandler(async (req, res, next) => {
  const blog = await Blog.findById(req.params.id);

  if (!blog) {
    return next(new AppError('Blog not found', 404));
  }

  const likeIndex = blog.likes.indexOf(req.user.id);

  if (likeIndex > -1) {
    // Unlike
    blog.likes.splice(likeIndex, 1);
  } else {
    // Like
    blog.likes.push(req.user.id);
  }

  await blog.save();

  res.status(200).json({
    success: true,
    likes: blog.likes.length,
    isLiked: likeIndex === -1
  });
});

// @desc    Increment blog views
// @route   POST /api/blog/:id/view
// @access  Public
exports.incrementViews = asyncHandler(async (req, res, next) => {
  const blog = await Blog.findByIdAndUpdate(
    req.params.id,
    { $inc: { views: 1 } },
    { new: true }
  );

  if (!blog) {
    return next(new AppError('Blog not found', 404));
  }

  res.status(200).json({
    success: true,
    views: blog.views
  });
});

// @desc    Toggle featured status
// @route   POST /api/blog/:id/feature
// @access  Private (Admin)
exports.toggleFeatured = asyncHandler(async (req, res, next) => {
  const blog = await Blog.findById(req.params.id);

  if (!blog) {
    return next(new AppError('Blog not found', 404));
  }

  blog.featured = !blog.featured;
  await blog.save();

  res.status(200).json({
    success: true,
    blog
  });
});

// @desc    Get all blogs for admin
// @route   GET /api/blog/admin/all
// @access  Private (Admin)
exports.getAllBlogsAdmin = asyncHandler(async (req, res, next) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;
  const skip = (page - 1) * limit;
  const status = req.query.status;

  let query = {};
  if (status) {
    query.status = status;
  }

  const blogs = await Blog.find(query)
    .populate('author', 'name avatar')
    .populate('category', 'name slug')
    .sort('-createdAt')
    .skip(skip)
    .limit(limit);

  const total = await Blog.countDocuments(query);

  res.status(200).json({
    success: true,
    count: blogs.length,
    total,
    page,
    pages: Math.ceil(total / limit),
    blogs
  });
});

// @desc    Upload image
// @route   POST /api/blog/upload-image
// @access  Private (Author/Admin)
exports.uploadImage = asyncHandler(async (req, res, next) => {
  if (!req.file) {
    return next(new AppError('Please upload an image', 400));
  }

  try {
    const result = await cloudinary.uploader.upload(req.file.path, {
      folder: 'landingfast/blog',
      transformation: [
        { width: 800, height: 600, crop: 'limit' },
        { quality: 'auto' },
        { format: 'auto' }
      ]
    });

    res.status(200).json({
      success: true,
      url: result.secure_url
    });
  } catch (error) {
    return next(new AppError('Image upload failed', 500));
  }
});