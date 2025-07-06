const { validationResult } = require('express-validator');
const Category = require('../models/Category');
const Blog = require('../models/Blog');
const asyncHandler = require('../utils/asyncHandler');
const AppError = require('../utils/appError');

// @desc    Get all categories
// @route   GET /api/categories
// @access  Public
exports.getAllCategories = asyncHandler(async (req, res, next) => {
  const categories = await Category.find({ isActive: true }).sort('name');

  // Update post counts
  for (let category of categories) {
    const postCount = await Blog.countDocuments({ 
      category: category._id, 
      status: 'published' 
    });
    category.postCount = postCount;
    await category.save();
  }

  res.status(200).json({
    success: true,
    count: categories.length,
    categories
  });
});

// @desc    Get category by slug
// @route   GET /api/categories/:slug
// @access  Public
exports.getCategoryBySlug = asyncHandler(async (req, res, next) => {
  const category = await Category.findOne({ 
    slug: req.params.slug, 
    isActive: true 
  });

  if (!category) {
    return next(new AppError('Category not found', 404));
  }

  // Update post count
  const postCount = await Blog.countDocuments({ 
    category: category._id, 
    status: 'published' 
  });
  category.postCount = postCount;
  await category.save();

  res.status(200).json({
    success: true,
    category
  });
});

// @desc    Get blogs by category
// @route   GET /api/categories/:slug/blogs
// @access  Public
exports.getBlogsByCategory = asyncHandler(async (req, res, next) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;
  const skip = (page - 1) * limit;

  const category = await Category.findOne({ 
    slug: req.params.slug, 
    isActive: true 
  });

  if (!category) {
    return next(new AppError('Category not found', 404));
  }

  const blogs = await Blog.find({ 
    category: category._id, 
    status: 'published' 
  })
    .populate('author', 'name avatar bio')
    .populate('category', 'name slug color')
    .sort('-publishedAt')
    .skip(skip)
    .limit(limit);

  const total = await Blog.countDocuments({ 
    category: category._id, 
    status: 'published' 
  });

  res.status(200).json({
    success: true,
    category,
    count: blogs.length,
    total,
    page,
    pages: Math.ceil(total / limit),
    blogs
  });
});

// @desc    Create category
// @route   POST /api/categories
// @access  Private (Admin)
exports.createCategory = asyncHandler(async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return next(new AppError('Validation failed', 400, errors.array()));
  }

  const category = await Category.create(req.body);

  res.status(201).json({
    success: true,
    category
  });
});

// @desc    Update category
// @route   PUT /api/categories/:id
// @access  Private (Admin)
exports.updateCategory = asyncHandler(async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return next(new AppError('Validation failed', 400, errors.array()));
  }

  const category = await Category.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
      runValidators: true
    }
  );

  if (!category) {
    return next(new AppError('Category not found', 404));
  }

  res.status(200).json({
    success: true,
    category
  });
});

// @desc    Delete category
// @route   DELETE /api/categories/:id
// @access  Private (Admin)
exports.deleteCategory = asyncHandler(async (req, res, next) => {
  const category = await Category.findById(req.params.id);

  if (!category) {
    return next(new AppError('Category not found', 404));
  }

  // Check if category has blogs
  const blogCount = await Blog.countDocuments({ category: category._id });
  if (blogCount > 0) {
    return next(new AppError('Cannot delete category with existing blogs', 400));
  }

  await category.deleteOne();

  res.status(200).json({
    success: true,
    message: 'Category deleted successfully'
  });
});