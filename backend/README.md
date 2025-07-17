# LandingFast Backend API

A comprehensive Node.js/Express backend for the LandingFast blog and course management platform.

## Features

- **Authentication & Authorization**: JWT-based auth with role-based access control
- **Blog Management**: Full CRUD operations for blog posts with categories and tags
- **Comment System**: Nested comments with moderation capabilities
- **Image Upload**: Cloudinary integration for image management
- **Search & Filtering**: Advanced search and filtering capabilities
- **Security**: Rate limiting, CORS, helmet, and input validation
- **Database**: MongoDB with Mongoose ODM

## Quick Start

### Prerequisites

- Node.js (v14 or higher)
- MongoDB (local or cloud)
- Cloudinary account (for image uploads)

### Installation

1. **Clone and setup**:
   ```bash
   cd backend
   npm install
   ```

2. **Environment Setup**:
   ```bash
   cp .env.example .env
   ```
   
   Update the `.env` file with your configuration:
   ```env
   MONGODB_URI=mongodb://localhost:27017/landingfast
   JWT_SECRET=your_super_secret_jwt_key_here
   JWT_EXPIRE=7d
   PORT=5000
   NODE_ENV=development
   FRONTEND_URL=http://localhost:3000
   CLOUDINARY_CLOUD_NAME=your_cloud_name
   CLOUDINARY_API_KEY=your_api_key
   CLOUDINARY_API_SECRET=your_api_secret
   ```

3. **Start the server**:
   ```bash
   # Development
   npm run dev
   
   # Production
   npm start
   ```

4. **Seed sample data** (optional):
   ```bash
   npm run seed
   ```

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user
- `POST /api/auth/logout` - Logout user
- `GET /api/auth/me` - Get current user
- `PUT /api/auth/profile` - Update profile
- `PUT /api/auth/change-password` - Change password

### Blog Posts
- `GET /api/blog` - Get all published blogs
- `GET /api/blog/featured` - Get featured blogs
- `GET /api/blog/popular` - Get popular blogs
- `GET /api/blog/search` - Search blogs
- `GET /api/blog/:slug` - Get blog by slug
- `POST /api/blog` - Create blog (Auth required)
- `PUT /api/blog/:id` - Update blog (Auth required)
- `DELETE /api/blog/:id` - Delete blog (Auth required)
- `POST /api/blog/:id/like` - Toggle like (Auth required)
- `POST /api/blog/:id/view` - Increment views

### Categories
- `GET /api/categories` - Get all categories
- `GET /api/categories/:slug` - Get category by slug
- `GET /api/categories/:slug/blogs` - Get blogs by category
- `POST /api/categories` - Create category (Admin only)
- `PUT /api/categories/:id` - Update category (Admin only)
- `DELETE /api/categories/:id` - Delete category (Admin only)

### Comments
- `GET /api/comments/blog/:blogId` - Get comments for blog
- `POST /api/comments` - Create comment (Auth required)
- `PUT /api/comments/:id` - Update comment (Auth required)
- `DELETE /api/comments/:id` - Delete comment (Auth required)
- `POST /api/comments/:id/like` - Toggle like (Auth required)

## User Roles

- **User**: Can read blogs, create comments, like posts
- **Author**: Can create, edit, and manage their own blog posts
- **Admin**: Full access to all features including user management

## Database Models

### User
- Authentication and profile information
- Role-based permissions (user, author, admin)
- Social links and bio

### Blog
- Title, content, excerpt, and metadata
- Author and category relationships
- Tags, featured status, and SEO fields
- View counts and like tracking

### Category
- Blog categorization system
- Slug-based URLs
- Post count tracking

### Comment
- Nested comment system
- Moderation capabilities
- Like functionality

## Security Features

- JWT authentication with secure cookies
- Rate limiting to prevent abuse
- Input validation and sanitization
- CORS configuration
- Helmet for security headers
- Password hashing with bcrypt

## Development

### Project Structure
```
backend/
├── controllers/     # Route handlers
├── middleware/      # Custom middleware
├── models/         # Database models
├── routes/         # API routes
├── utils/          # Utility functions
├── config/         # Configuration files
├── scripts/        # Database scripts
└── server.js       # Main server file
```

### Testing
```bash
npm test
```

### Seeding Data
The seed script creates sample users, categories, and blog posts:
```bash
npm run seed
```

Default accounts created:
- Admin: `admin@landingfast.com` / `admin123`
- Author: `sarah@landingfast.com` / `author123`

## Deployment

1. Set `NODE_ENV=production`
2. Configure production database
3. Set up Cloudinary for image uploads
4. Deploy to your preferred platform (Heroku, AWS, etc.)

## API Documentation

The API follows RESTful conventions and returns JSON responses. All endpoints support standard HTTP status codes and error handling.

### Response Format
```json
{
  "success": true,
  "data": {},
  "message": "Success message"
}
```

### Error Format
```json
{
  "success": false,
  "error": "Error message",
  "stack": "Error stack (development only)"
}
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

MIT License - see LICENSE file for details