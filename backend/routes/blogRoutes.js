const express = require('express');
const { body, query } = require('express-validator');
const blogController = require('../controllers/blogController');
const auth = require('../middleware/auth');
const authorize = require('../middleware/authorize');
const upload = require('../middleware/upload');

const router = express.Router();

// Validation rules
const blogValidation = [
  body('title').trim().isLength({ min: 5, max: 200 }).withMessage('Title must be between 5 and 200 characters'),
  body('excerpt').trim().isLength({ min: 10, max: 300 }).withMessage('Excerpt must be between 10 and 300 characters'),
  body('content').trim().isLength({ min: 50 }).withMessage('Content must be at least 50 characters'),
  body('category').isMongoId().withMessage('Valid category ID is required')
];

// Public routes
router.get('/', blogController.getAllBlogs);
router.get('/featured', blogController.getFeaturedBlogs);
router.get('/popular', blogController.getPopularBlogs);
router.get('/search', blogController.searchBlogs);
router.get('/:slug', blogController.getBlogBySlug);
router.post('/:id/view', blogController.incrementViews);

// Protected routes (require authentication)
router.post('/:id/like', auth, blogController.toggleLike);

// Author/Admin routes
router.post('/', auth, authorize(['author', 'admin']), blogValidation, blogController.createBlog);
router.put('/:id', auth, authorize(['author', 'admin']), blogValidation, blogController.updateBlog);
router.delete('/:id', auth, authorize(['author', 'admin']), blogController.deleteBlog);
router.post('/:id/publish', auth, authorize(['author', 'admin']), blogController.publishBlog);
router.post('/:id/unpublish', auth, authorize(['author', 'admin']), blogController.unpublishBlog);

// Admin only routes
router.get('/admin/all', auth, authorize(['admin']), blogController.getAllBlogsAdmin);
router.post('/:id/feature', auth, authorize(['admin']), blogController.toggleFeatured);

// Image upload
router.post('/upload-image', auth, authorize(['author', 'admin']), upload.single('image'), blogController.uploadImage);

module.exports = router;