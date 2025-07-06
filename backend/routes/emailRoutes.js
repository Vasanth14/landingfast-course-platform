const express = require('express');
const { body } = require('express-validator');
const emailController = require('../controllers/emailController');

const router = express.Router();

// Validation rules
const emailValidation = [
  body('email').isEmail().normalizeEmail().withMessage('Please provide a valid email'),
  body('pathway').isIn(['fullstack', 'design', 'marketing']).withMessage('Invalid pathway selected')
];

const newsletterValidation = [
  body('email').isEmail().normalizeEmail().withMessage('Please provide a valid email'),
  body('name').optional().trim().isLength({ min: 2, max: 50 }).withMessage('Name must be between 2 and 50 characters')
];

// Routes
router.post('/send-pathway-pdf', emailValidation, emailController.sendPathwayPDF);
router.post('/subscribe', newsletterValidation, emailController.subscribeNewsletter);

module.exports = router;