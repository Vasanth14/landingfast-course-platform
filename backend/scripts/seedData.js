const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
require('dotenv').config();

// Import models
const User = require('../models/User');
const Category = require('../models/Category');
const Blog = require('../models/Blog');

// Connect to database
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/landingfast');

const seedData = async () => {
  try {
    // Clear existing data
    await User.deleteMany();
    await Category.deleteMany();
    await Blog.deleteMany();

    console.log('🗑️  Cleared existing data');

    // Create admin user
    const adminUser = await User.create({
      name: 'Admin User',
      email: 'admin@landingfast.com',
      password: 'admin123',
      role: 'admin',
      bio: 'Administrator of LandingFast platform'
    });

    // Create author users
    const author1 = await User.create({
      name: 'Sarah Johnson',
      email: 'sarah@landingfast.com',
      password: 'author123',
      role: 'author',
      bio: 'Full Stack Developer and Tech Educator',
      avatar: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1'
    });

    const author2 = await User.create({
      name: 'Michael Chen',
      email: 'michael@landingfast.com',
      password: 'author123',
      role: 'author',
      bio: 'UI/UX Designer and Design Systems Expert',
      avatar: 'https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1'
    });

    console.log('👥 Created users');

    // Create categories
    const categories = await Category.create([
      {
        name: 'Development',
        description: 'Full stack development, programming languages, and frameworks',
        color: '#0041c9',
        icon: 'Code'
      },
      {
        name: 'Design',
        description: 'UI/UX design, design systems, and user experience',
        color: '#7c3aed',
        icon: 'Palette'
      },
      {
        name: 'Marketing',
        description: 'Digital marketing, SEO, and growth strategies',
        color: '#059669',
        icon: 'TrendingUp'
      },
      {
        name: 'Career',
        description: 'Career advice, job hunting, and professional development',
        color: '#dc2626',
        icon: 'Briefcase'
      }
    ]);

    console.log('📂 Created categories');

    // Create blog posts
    const blogs = await Blog.create([
      {
        title: '5 Essential Skills Every Full Stack Developer Must Master in 2024',
        excerpt: 'Discover the most in-demand skills that will set you apart in the competitive world of full stack development.',
        content: `
          <h2>Introduction</h2>
          <p>The world of full stack development is constantly evolving, and staying ahead of the curve requires mastering the right skills. In 2024, certain technologies and methodologies have become essential for any developer looking to excel in their career.</p>
          
          <h2>1. Modern JavaScript Frameworks</h2>
          <p>React, Vue.js, and Angular continue to dominate the frontend landscape. Understanding at least one of these frameworks deeply is crucial for modern web development.</p>
          
          <h2>2. Cloud Technologies</h2>
          <p>AWS, Azure, and Google Cloud Platform are no longer optional. Understanding cloud deployment, serverless functions, and containerization with Docker is essential.</p>
          
          <h2>3. Database Management</h2>
          <p>Both SQL and NoSQL databases are important. PostgreSQL, MongoDB, and Redis are particularly valuable skills to have.</p>
          
          <h2>4. API Development</h2>
          <p>RESTful APIs and GraphQL are fundamental for backend development. Understanding how to design, build, and document APIs is crucial.</p>
          
          <h2>5. DevOps and CI/CD</h2>
          <p>Understanding deployment pipelines, version control with Git, and automated testing will set you apart from other developers.</p>
          
          <h2>Conclusion</h2>
          <p>Mastering these skills will not only make you a better developer but also increase your market value significantly. Start with one area and gradually expand your expertise.</p>
        `,
        author: author1._id,
        category: categories[0]._id,
        tags: ['javascript', 'fullstack', 'career', 'skills'],
        status: 'published',
        featured: true,
        featuredImage: 'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&dpr=1',
        publishedAt: new Date('2024-03-15')
      },
      {
        title: 'UI/UX Design Trends That Will Dominate 2024',
        excerpt: 'Stay ahead of the curve with these emerging design trends that are shaping the future of user experience.',
        content: `
          <h2>The Evolution of Design</h2>
          <p>Design trends in 2024 are focusing more on user accessibility, sustainability, and emotional connection. Here are the key trends to watch.</p>
          
          <h2>1. Inclusive Design</h2>
          <p>Designing for accessibility isn't just good practice—it's essential. This includes considering users with disabilities, different cultural backgrounds, and varying technical literacy.</p>
          
          <h2>2. Sustainable Design</h2>
          <p>Green design principles are becoming mainstream, focusing on reducing digital carbon footprints and promoting environmental consciousness.</p>
          
          <h2>3. Micro-interactions</h2>
          <p>Small, delightful animations and interactions that provide feedback and guide users through their journey.</p>
          
          <h2>4. Voice User Interfaces</h2>
          <p>With the rise of smart speakers and voice assistants, designing for voice interactions is becoming increasingly important.</p>
          
          <h2>5. Augmented Reality Integration</h2>
          <p>AR is moving beyond gaming into practical applications for shopping, education, and productivity.</p>
        `,
        author: author2._id,
        category: categories[1]._id,
        tags: ['design', 'ux', 'trends', '2024'],
        status: 'published',
        featuredImage: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&dpr=1',
        publishedAt: new Date('2024-03-12')
      },
      {
        title: 'How to Land Your First Tech Job: A Complete Guide',
        excerpt: 'From building your portfolio to acing technical interviews, everything you need to know to start your tech career.',
        content: `
          <h2>Starting Your Tech Journey</h2>
          <p>Breaking into the tech industry can seem daunting, but with the right approach and preparation, you can land your first tech job successfully.</p>
          
          <h2>Building Your Portfolio</h2>
          <p>Your portfolio is your calling card. Include 3-5 projects that showcase different skills and technologies. Make sure your code is clean, well-documented, and deployed.</p>
          
          <h2>Networking</h2>
          <p>Attend tech meetups, join online communities, and connect with professionals on LinkedIn. Many jobs are filled through referrals.</p>
          
          <h2>Preparing for Interviews</h2>
          <p>Practice coding challenges, prepare for behavioral questions, and research the company thoroughly. Mock interviews can be incredibly helpful.</p>
          
          <h2>Continuous Learning</h2>
          <p>The tech industry moves fast. Stay updated with the latest trends, contribute to open source projects, and never stop learning.</p>
        `,
        author: author1._id,
        category: categories[3]._id,
        tags: ['career', 'job-hunting', 'interview', 'portfolio'],
        status: 'published',
        featuredImage: 'https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&dpr=1',
        publishedAt: new Date('2024-03-10')
      }
    ]);

    console.log('📝 Created blog posts');

    console.log('✅ Seed data created successfully!');
    console.log('📧 Admin login: admin@landingfast.com / admin123');
    console.log('📧 Author login: sarah@landingfast.com / author123');
    
    process.exit(0);
  } catch (error) {
    console.error('❌ Error seeding data:', error);
    process.exit(1);
  }
};

seedData();