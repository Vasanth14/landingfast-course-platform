const express = require('express');
const { body } = require('express-validator');
const categoryController = require('../controllers/categoryController');
const auth = require('../middleware/auth');
const authorize = require('../middleware/authorize');

const router = express.Router();

// Validation rules
const categoryValidation = [
  body('name').trim().isLength({ min: 2, max: 50 }).withMessage('Category name must be between 2 and 50 characters'),
  body('description').optional().trim().isLength({ max: 200 }).withMessage('Description cannot exceed 200 characters')
];

// Public routes
router.get('/', categoryController.getAllCategories);
router.get('/:slug', categoryController.getCategoryBySlug);
router.get('/:slug/blogs', categoryController.getBlogsByCategory);

// Admin routes
router.post('/', auth, authorize(['admin']), categoryValidation, categoryController.createCategory);
router.put('/:id', auth, authorize(['admin']), categoryValidation, categoryController.updateCategory);
router.delete('/:id', auth, authorize(['admin']), categoryController.deleteCategory);

module.exports = router;