import { NextResponse } from 'next/server';

// Mock blog posts data
const blogPosts = [
  {
    id: 1,
    title: "10 Essential Skills Every Full Stack Developer Needs in 2025",
    excerpt: "Discover the must-have skills that will make you stand out in the competitive full stack development market.",
    author: "Sarah Johnson",
    date: "2025-01-15",
    readTime: "8 min read",
    category: "Development",
    tags: ["Full Stack", "Skills", "Career"],
    image: "https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    featured: true,
    content: `
      <h2>Introduction</h2>
      <p>The landscape of full stack development is constantly evolving, and staying relevant in 2025 requires mastering both established foundations and cutting-edge technologies...</p>
      <!-- Additional content would be here -->
    `,
    likes: 124,
    shares: 45
  },
  {
    id: 2,
    title: "The Complete Guide to UI/UX Design Systems",
    excerpt: "Learn how to create scalable and consistent design systems that enhance user experience and team productivity.",
    author: "Michael Chen",
    date: "2025-01-12",
    readTime: "12 min read",
    category: "Design",
    tags: ["UI/UX", "Design Systems", "Figma"],
    image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    featured: false,
    content: `
      <h2>What is a Design System?</h2>
      <p>A design system is a collection of reusable components, guided by clear standards...</p>
      <!-- Additional content would be here -->
    `,
    likes: 89,
    shares: 32
  },
  {
    id: 3,
    title: "Digital Marketing Trends That Will Dominate 2025",
    excerpt: "Stay ahead of the curve with these emerging digital marketing trends and strategies for the coming year.",
    author: "Emily Rodriguez",
    date: "2025-01-10",
    readTime: "6 min read",
    category: "Marketing",
    tags: ["Digital Marketing", "Trends", "Strategy"],
    image: "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    featured: false,
    content: `
      <h2>The Evolution of Digital Marketing</h2>
      <p>Digital marketing continues to evolve at breakneck speed...</p>
      <!-- Additional content would be here -->
    `,
    likes: 156,
    shares: 78
  },
  {
    id: 4,
    title: "How to Build a Portfolio That Gets You Hired",
    excerpt: "Expert tips on creating a compelling portfolio that showcases your skills and attracts top employers.",
    author: "David Park",
    date: "2025-01-08",
    readTime: "10 min read",
    category: "Career",
    tags: ["Portfolio", "Career", "Job Search"],
    image: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    featured: false,
    content: `
      <h2>The Importance of a Strong Portfolio</h2>
      <p>Your portfolio is often the first impression potential employers have of your work...</p>
      <!-- Additional content would be here -->
    `,
    likes: 203,
    shares: 95
  },
  {
    id: 5,
    title: "The Future of Remote Work in Tech",
    excerpt: "Exploring how remote work is shaping the tech industry and what it means for your career.",
    author: "Lisa Wang",
    date: "2025-01-05",
    readTime: "7 min read",
    category: "Career",
    tags: ["Remote Work", "Tech Industry", "Future"],
    image: "https://images.pexels.com/photos/4065876/pexels-photo-4065876.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    featured: false,
    content: `
      <h2>Remote Work Revolution</h2>
      <p>The shift to remote work has fundamentally changed how tech companies operate...</p>
      <!-- Additional content would be here -->
    `,
    likes: 87,
    shares: 41
  },
  {
    id: 6,
    title: "Mastering React Hooks: Advanced Patterns and Best Practices",
    excerpt: "Deep dive into advanced React hooks patterns that will elevate your development skills.",
    author: "Alex Thompson",
    date: "2025-01-03",
    readTime: "15 min read",
    category: "Development",
    tags: ["React", "Hooks", "JavaScript"],
    image: "https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    featured: false,
    content: `
      <h2>Advanced React Hooks</h2>
      <p>React hooks have revolutionized how we write React components...</p>
      <!-- Additional content would be here -->
    `,
    likes: 145,
    shares: 67
  }
];

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get('category');
  const search = searchParams.get('search');
  const featured = searchParams.get('featured');

  let filteredPosts = [...blogPosts];

  // Filter by category
  if (category && category !== 'All') {
    filteredPosts = filteredPosts.filter(post => post.category === category);
  }

  // Filter by search term
  if (search) {
    const searchTerm = search.toLowerCase();
    filteredPosts = filteredPosts.filter(post => 
      post.title.toLowerCase().includes(searchTerm) ||
      post.excerpt.toLowerCase().includes(searchTerm) ||
      post.tags.some(tag => tag.toLowerCase().includes(searchTerm))
    );
  }

  // Filter by featured
  if (featured === 'true') {
    filteredPosts = filteredPosts.filter(post => post.featured);
  }

  return NextResponse.json({
    posts: filteredPosts,
    total: filteredPosts.length
  });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { title, excerpt, content, author, category, tags, image } = body;

    // Validate required fields
    if (!title || !excerpt || !content || !author || !category) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Create new blog post
    const newPost = {
      id: blogPosts.length + 1,
      title,
      excerpt,
      content,
      author,
      category,
      tags: tags || [],
      image: image || "https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      date: new Date().toISOString().split('T')[0],
      readTime: `${Math.ceil(content.split(' ').length / 200)} min read`,
      featured: false,
      likes: 0,
      shares: 0
    };

    // Add to mock database
    blogPosts.push(newPost);

    return NextResponse.json(
      { message: 'Blog post created successfully', post: newPost },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to create blog post' },
      { status: 500 }
    );
  }
}