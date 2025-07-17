const { validationResult } = require('express-validator');
const Comment = require('../models/Comment');
const Blog = require('../models/Blog');
const asyncHandler = require('../utils/asyncHandler');
const AppError = require('../utils/appError');

// @desc    Get comments by blog
// @route   GET /api/comments/blog/:blogId
// @access  Public
exports.getCommentsByBlog = asyncHandler(async (req, res, next) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;
  const skip = (page - 1) * limit;

  const comments = await Comment.find({ 
    blog: req.params.blogId, 
    isApproved: true,
    parentComment: null 
  })
    .populate('author', 'name avatar')
    .populate({
      path: 'replies',
      populate: {
        path: 'author',
        select: 'name avatar'
      }
    })
    .sort('-createdAt')
    .skip(skip)
    .limit(limit);

  const total = await Comment.countDocuments({ 
    blog: req.params.blogId, 
    isApproved: true,
    parentComment: null 
  });

  res.status(200).json({
    success: true,
    count: comments.length,
    total,
    page,
    pages: Math.ceil(total / limit),
    comments
  });
});

// @desc    Create comment
// @route   POST /api/comments
// @access  Private
exports.createComment = asyncHandler(async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return next(new AppError('Validation failed', 400, errors.array()));
  }

  // Check if blog exists
  const blog = await Blog.findById(req.body.blog);
  if (!blog) {
    return next(new AppError('Blog not found', 404));
  }

  req.body.author = req.user.id;

  const comment = await Comment.create(req.body);

  // If it's a reply, add to parent's replies array
  if (req.body.parentComment) {
    await Comment.findByIdAndUpdate(
      req.body.parentComment,
      { $push: { replies: comment._id } }
    );
  }

  await comment.populate('author', 'name avatar');

  res.status(201).json({
    success: true,
    comment
  });
});

// @desc    Update comment
// @route   PUT /api/comments/:id
// @access  Private
exports.updateComment = asyncHandler(async (req, res, next) => {
  let comment = await Comment.findById(req.params.id);

  if (!comment) {
    return next(new AppError('Comment not found', 404));
  }

  // Make sure user is comment owner
  if (comment.author.toString() !== req.user.id) {
    return next(new AppError('Not authorized to update this comment', 401));
  }

  comment = await Comment.findByIdAndUpdate(
    req.params.id,
    { content: req.body.content },
    {
      new: true,
      runValidators: true
    }
  ).populate('author', 'name avatar');

  res.status(200).json({
    success: true,
    comment
  });
});

// @desc    Delete comment
// @route   DELETE /api/comments/:id
// @access  Private
exports.deleteComment = asyncHandler(async (req, res, next) => {
  const comment = await Comment.findById(req.params.id);

  if (!comment) {
    return next(new AppError('Comment not found', 404));
  }

  // Make sure user is comment owner or admin
  if (comment.author.toString() !== req.user.id && req.user.role !== 'admin') {
    return next(new AppError('Not authorized to delete this comment', 401));
  }

  // Remove from parent's replies if it's a reply
  if (comment.parentComment) {
    await Comment.findByIdAndUpdate(
      comment.parentComment,
      { $pull: { replies: comment._id } }
    );
  }

  // Delete all replies
  await Comment.deleteMany({ parentComment: comment._id });

  await comment.deleteOne();

  res.status(200).json({
    success: true,
    message: 'Comment deleted successfully'
  });
});

// @desc    Toggle comment like
// @route   POST /api/comments/:id/like
// @access  Private
exports.toggleLike = asyncHandler(async (req, res, next) => {
  const comment = await Comment.findById(req.params.id);

  if (!comment) {
    return next(new AppError('Comment not found', 404));
  }

  const likeIndex = comment.likes.indexOf(req.user.id);

  if (likeIndex > -1) {
    // Unlike
    comment.likes.splice(likeIndex, 1);
  } else {
    // Like
    comment.likes.push(req.user.id);
  }

  await comment.save();

  res.status(200).json({
    success: true,
    likes: comment.likes.length,
    isLiked: likeIndex === -1
  });
});

// @desc    Get all comments for admin
// @route   GET /api/comments/admin/all
// @access  Private (Admin)
exports.getAllCommentsAdmin = asyncHandler(async (req, res, next) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 20;
  const skip = (page - 1) * limit;
  const status = req.query.status;

  let query = {};
  if (status === 'pending') {
    query.isApproved = false;
  } else if (status === 'approved') {
    query.isApproved = true;
  }

  const comments = await Comment.find(query)
    .populate('author', 'name avatar email')
    .populate('blog', 'title slug')
    .sort('-createdAt')
    .skip(skip)
    .limit(limit);

  const total = await Comment.countDocuments(query);

  res.status(200).json({
    success: true,
    count: comments.length,
    total,
    page,
    pages: Math.ceil(total / limit),
    comments
  });
});

// @desc    Approve comment
// @route   POST /api/comments/:id/approve
// @access  Private (Admin)
exports.approveComment = asyncHandler(async (req, res, next) => {
  const comment = await Comment.findByIdAndUpdate(
    req.params.id,
    { isApproved: true },
    { new: true }
  ).populate('author', 'name avatar');

  if (!comment) {
    return next(new AppError('Comment not found', 404));
  }

  res.status(200).json({
    success: true,
    comment
  });
});

// @desc    Reject comment
// @route   POST /api/comments/:id/reject
// @access  Private (Admin)
exports.rejectComment = asyncHandler(async (req, res, next) => {
  const comment = await Comment.findByIdAndUpdate(
    req.params.id,
    { isApproved: false },
    { new: true }
  ).populate('author', 'name avatar');

  if (!comment) {
    return next(new AppError('Comment not found', 404));
  }

  res.status(200).json({
    success: true,
    comment
  });
});