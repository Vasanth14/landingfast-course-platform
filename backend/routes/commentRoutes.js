const express = require('express');
const { body } = require('express-validator');
const commentController = require('../controllers/commentController');
const auth = require('../middleware/auth');
const authorize = require('../middleware/authorize');

const router = express.Router();

// Validation rules
const commentValidation = [
  body('content').trim().isLength({ min: 1, max: 1000 }).withMessage('Comment must be between 1 and 1000 characters'),
  body('blog').isMongoId().withMessage('Valid blog ID is required')
];

// Public routes
router.get('/blog/:blogId', commentController.getCommentsByBlog);

// Protected routes
router.post('/', auth, commentValidation, commentController.createComment);
router.put('/:id', auth, commentController.updateComment);
router.delete('/:id', auth, commentController.deleteComment);
router.post('/:id/like', auth, commentController.toggleLike);

// Admin routes
router.get('/admin/all', auth, authorize(['admin']), commentController.getAllCommentsAdmin);
router.post('/:id/approve', auth, authorize(['admin']), commentController.approveComment);
router.post('/:id/reject', auth, authorize(['admin']), commentController.rejectComment);

module.exports = router;