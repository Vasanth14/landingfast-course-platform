const nodemailer = require('nodemailer');
const asyncHandler = require('../utils/asyncHandler');
const AppError = require('../utils/appError');

// Email transporter configuration
const createTransporter = () => {
  return nodemailer.createTransporter({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });
};

// Pathway data with PDF information
const pathwayData = {
  fullstack: {
    title: 'Full Stack Development Pathway',
    description: 'Your complete roadmap to becoming a full stack developer',
    filename: 'fullstack-development-pathway.pdf',
    content: `
      <h2>Full Stack Development Pathway</h2>
      <p>Congratulations on taking the first step towards becoming a full stack developer!</p>
      
      <h3>Learning Roadmap (6 Months)</h3>
      <ul>
        <li><strong>Month 1-2:</strong> HTML, CSS, JavaScript Fundamentals</li>
        <li><strong>Month 3:</strong> React.js and Frontend Development</li>
        <li><strong>Month 4:</strong> Node.js and Backend Development</li>
        <li><strong>Month 5:</strong> Databases (MongoDB, PostgreSQL)</li>
        <li><strong>Month 6:</strong> Full Stack Projects and Deployment</li>
      </ul>
      
      <h3>Essential Tools</h3>
      <ul>
        <li>VS Code</li>
        <li>Git & GitHub</li>
        <li>Node.js & npm</li>
        <li>Postman</li>
        <li>MongoDB Compass</li>
      </ul>
      
      <h3>Career Prospects</h3>
      <p><strong>Average Starting Salary:</strong> $65,000 - $85,000</p>
      <p><strong>Senior Level:</strong> $100,000 - $150,000+</p>
      
      <h3>Next Steps</h3>
      <p>Ready to start your journey? Use code <strong>PATHWAY20</strong> for 20% off any of our courses!</p>
    `
  },
  design: {
    title: 'UI/UX Design Pathway',
    description: 'Your complete roadmap to becoming a UI/UX designer',
    filename: 'uiux-design-pathway.pdf',
    content: `
      <h2>UI/UX Design Pathway</h2>
      <p>Welcome to your journey in creating beautiful and functional user experiences!</p>
      
      <h3>Learning Roadmap (4 Months)</h3>
      <ul>
        <li><strong>Month 1:</strong> Design Fundamentals & Theory</li>
        <li><strong>Month 2:</strong> Figma & Design Tools Mastery</li>
        <li><strong>Month 3:</strong> User Research & Testing</li>
        <li><strong>Month 4:</strong> Portfolio Development & Case Studies</li>
      </ul>
      
      <h3>Essential Tools</h3>
      <ul>
        <li>Figma</li>
        <li>Adobe XD</li>
        <li>Sketch</li>
        <li>InVision</li>
        <li>Miro</li>
      </ul>
      
      <h3>Career Prospects</h3>
      <p><strong>Average Starting Salary:</strong> $55,000 - $75,000</p>
      <p><strong>Senior Level:</strong> $90,000 - $130,000+</p>
      
      <h3>Next Steps</h3>
      <p>Ready to design the future? Use code <strong>PATHWAY20</strong> for 20% off any of our courses!</p>
    `
  },
  marketing: {
    title: 'Digital Marketing Pathway',
    description: 'Your complete roadmap to becoming a digital marketing expert',
    filename: 'digital-marketing-pathway.pdf',
    content: `
      <h2>Digital Marketing Pathway</h2>
      <p>Get ready to drive growth and connect brands with their audiences!</p>
      
      <h3>Learning Roadmap (3 Months)</h3>
      <ul>
        <li><strong>Month 1:</strong> Marketing Fundamentals & Strategy</li>
        <li><strong>Month 2:</strong> SEO, SEM & Social Media Marketing</li>
        <li><strong>Month 3:</strong> Analytics, Automation & Campaign Management</li>
      </ul>
      
      <h3>Essential Tools</h3>
      <ul>
        <li>Google Analytics</li>
        <li>Google Ads</li>
        <li>Facebook Ads Manager</li>
        <li>HubSpot</li>
        <li>Mailchimp</li>
      </ul>
      
      <h3>Career Prospects</h3>
      <p><strong>Average Starting Salary:</strong> $50,000 - $70,000</p>
      <p><strong>Senior Level:</strong> $80,000 - $120,000+</p>
      
      <h3>Next Steps</h3>
      <p>Ready to drive growth? Use code <strong>PATHWAY20</strong> for 20% off any of our courses!</p>
    `
  }
};

// @desc    Send pathway PDF via email
// @route   POST /api/email/send-pathway-pdf
// @access  Public
exports.sendPathwayPDF = asyncHandler(async (req, res, next) => {
  const { email, pathway } = req.body;

  // Validate input
  if (!email || !pathway) {
    return next(new AppError('Email and pathway are required', 400));
  }

  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return next(new AppError('Invalid email format', 400));
  }

  // Validate pathway
  if (!pathwayData[pathway]) {
    return next(new AppError('Invalid pathway selected', 400));
  }

  const selectedPathway = pathwayData[pathway];

  try {
    const transporter = createTransporter();

    // Email content
    const mailOptions = {
      from: `"LandingFast Team" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: `Your ${selectedPathway.title} is Ready! 🚀`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Your Tech Pathway PDF</title>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #0041c9 0%, #1a57d6 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
            .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
            .button { display: inline-block; background: #0041c9; color: white; padding: 15px 30px; text-decoration: none; border-radius: 8px; margin: 20px 0; }
            .footer { text-align: center; margin-top: 30px; color: #666; font-size: 14px; }
            .pathway-content { background: white; padding: 20px; border-radius: 8px; margin: 20px 0; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>🎉 Your ${selectedPathway.title} is Here!</h1>
              <p>Everything you need to start your tech journey</p>
            </div>
            
            <div class="content">
              <h2>Hi there!</h2>
              <p>Thank you for downloading your personalized tech pathway guide. We're excited to help you on your journey to becoming a ${pathway === 'fullstack' ? 'full stack developer' : pathway === 'design' ? 'UI/UX designer' : 'digital marketing expert'}!</p>
              
              <div class="pathway-content">
                ${selectedPathway.content}
              </div>
              
              <h3>🎁 Exclusive Bonus</h3>
              <p>As a thank you for downloading our guide, here's an exclusive 20% discount code for any of our courses:</p>
              <div style="background: #e8f4fd; padding: 15px; border-radius: 8px; text-align: center; margin: 20px 0;">
                <strong style="font-size: 18px; color: #0041c9;">PATHWAY20</strong>
              </div>
              
              <a href="https://landingfast.com/courses" class="button">Explore Our Courses</a>
              
              <h3>What's Next?</h3>
              <ul>
                <li>📚 Review your pathway guide</li>
                <li>🎯 Set your learning goals</li>
                <li>💻 Start with our recommended resources</li>
                <li>🚀 Join our community for support</li>
              </ul>
              
              <p>If you have any questions, feel free to reply to this email. Our team is here to help!</p>
              
              <p>Best regards,<br>The LandingFast Team</p>
            </div>
            
            <div class="footer">
              <p>© 2024 LandingFast. All rights reserved.</p>
              <p>You received this email because you requested our tech pathway guide.</p>
            </div>
          </div>
        </body>
        </html>
      `
    };

    // Send email
    await transporter.sendMail(mailOptions);

    // Log for analytics (in production, you'd save to database)
    console.log(`Pathway PDF sent to: ${email}, Pathway: ${pathway}`);

    res.status(200).json({
      success: true,
      message: 'Pathway PDF sent successfully',
      pathway: selectedPathway.title
    });

  } catch (error) {
    console.error('Email sending error:', error);
    return next(new AppError('Failed to send email. Please try again later.', 500));
  }
});

// @desc    Subscribe to newsletter
// @route   POST /api/email/subscribe
// @access  Public
exports.subscribeNewsletter = asyncHandler(async (req, res, next) => {
  const { email, name } = req.body;

  if (!email) {
    return next(new AppError('Email is required', 400));
  }

  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return next(new AppError('Invalid email format', 400));
  }

  try {
    const transporter = createTransporter();

    // Welcome email
    const mailOptions = {
      from: `"LandingFast Team" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: 'Welcome to LandingFast! 🚀',
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #0041c9 0%, #1a57d6 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
            .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>Welcome to LandingFast! 🎉</h1>
            </div>
            <div class="content">
              <h2>Hi ${name || 'there'}!</h2>
              <p>Thank you for joining our community of aspiring tech professionals. You're now part of a growing family of 10,000+ students who are transforming their careers.</p>
              
              <p>Here's what you can expect:</p>
              <ul>
                <li>📚 Weekly learning tips and resources</li>
                <li>🎯 Career guidance and industry insights</li>
                <li>🚀 Exclusive course discounts and early access</li>
                <li>💼 Job opportunities and networking events</li>
              </ul>
              
              <p>Ready to start your journey? Check out our courses and find your perfect path!</p>
              
              <p>Best regards,<br>The LandingFast Team</p>
            </div>
          </div>
        </body>
        </html>
      `
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({
      success: true,
      message: 'Successfully subscribed to newsletter'
    });

  } catch (error) {
    console.error('Newsletter subscription error:', error);
    return next(new AppError('Failed to subscribe. Please try again later.', 500));
  }
});