import { NextResponse } from 'next/server';

// Mock blog posts data (in a real app, this would come from a database)
const blogPosts = [
  {
    id: 1,
    title: "10 Essential Skills Every Full Stack Developer Needs in 2025",
    excerpt: "Discover the must-have skills that will make you stand out in the competitive full stack development market.",
    author: "Sarah Johnson",
    date: "2025-01-15",
    readTime: "8 min read",
    category: "Development",
    tags: ["Full Stack", "Skills", "Career", "JavaScript", "React"],
    image: "https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop",
    featured: true,
    content: `
      <h2>Introduction</h2>
      <p>The landscape of full stack development is constantly evolving, and staying relevant in 2025 requires mastering both established foundations and cutting-edge technologies. As companies increasingly demand developers who can work across the entire stack, the bar for what constitutes "essential skills" has been raised significantly.</p>
      
      <h2>1. Modern JavaScript and TypeScript</h2>
      <p>JavaScript remains the backbone of web development, but TypeScript has become increasingly important for large-scale applications. Understanding ES6+ features, async/await patterns, and TypeScript's type system is crucial for modern development.</p>
      
      <h2>2. React and Next.js</h2>
      <p>React continues to dominate the frontend landscape, while Next.js has emerged as the go-to framework for production React applications. Key concepts include:</p>
      <ul>
        <li>Component lifecycle and hooks</li>
        <li>State management with Redux or Zustand</li>
        <li>Server-side rendering and static site generation</li>
        <li>API routes and middleware</li>
      </ul>
      
      <h2>3. Node.js and Express</h2>
      <p>For backend development, Node.js remains a popular choice. Understanding Express.js, middleware, authentication, and API design principles is essential for building robust server-side applications.</p>
      
      <h2>4. Database Technologies</h2>
      <p>Modern full stack developers need to be comfortable with both SQL and NoSQL databases. PostgreSQL for relational data, MongoDB for document storage, and Redis for caching are all valuable skills.</p>
      
      <h2>5. Cloud Services and DevOps</h2>
      <p>Understanding cloud platforms like AWS, Google Cloud, or Azure is no longer optional. Skills in containerization with Docker, CI/CD pipelines, and infrastructure as code are increasingly important.</p>
      
      <h2>6. API Design and GraphQL</h2>
      <p>RESTful API design principles and GraphQL query language are both important for modern applications. Understanding when to use each approach and how to implement them effectively is crucial.</p>
      
      <h2>7. Testing and Quality Assurance</h2>
      <p>Writing maintainable code requires good testing practices. Unit testing, integration testing, and end-to-end testing with tools like Jest, Cypress, and Playwright are essential skills.</p>
      
      <h2>8. Version Control and Collaboration</h2>
      <p>Git remains the standard for version control, but understanding advanced features like branching strategies, rebasing, and collaborative workflows is important for team environments.</p>
      
      <h2>9. Performance Optimization</h2>
      <p>Understanding how to optimize applications for performance, including code splitting, lazy loading, caching strategies, and performance monitoring, is crucial for delivering excellent user experiences.</p>
      
      <h2>10. Security Best Practices</h2>
      <p>Security should never be an afterthought. Understanding authentication, authorization, CORS, CSRF protection, and other security fundamentals is essential for any developer.</p>
      
      <h2>Conclusion</h2>
      <p>The field of full stack development continues to evolve rapidly. While these ten skills provide a strong foundation, the most important skill is the ability to learn and adapt. Stay curious, keep building projects, and never stop learning.</p>
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
    image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop",
    featured: false,
    content: `
      <h2>What is a Design System?</h2>
      <p>A design system is a collection of reusable components, guided by clear standards, that can be assembled together to build any number of applications. It's the single source of truth for design decisions in an organization.</p>
      
      <h2>Why Design Systems Matter</h2>
      <p>Design systems provide consistency, scalability, and efficiency. They help teams work faster while maintaining quality and coherence across all touchpoints.</p>
      
      <h2>Building Your Design System</h2>
      <p>Start with the basics: colors, typography, spacing, and components. Then expand to include patterns, templates, and guidelines for usage.</p>
    `,
    likes: 89,
    shares: 32
  }
];

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const postId = parseInt(params.id);
  const post = blogPosts.find(p => p.id === postId);

  if (!post) {
    return NextResponse.json(
      { error: 'Blog post not found' },
      { status: 404 }
    );
  }

  return NextResponse.json(post);
}

export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const postId = parseInt(params.id);
    const postIndex = blogPosts.findIndex(p => p.id === postId);

    if (postIndex === -1) {
      return NextResponse.json(
        { error: 'Blog post not found' },
        { status: 404 }
      );
    }

    const body = await request.json();
    const updatedPost = { ...blogPosts[postIndex], ...body };
    blogPosts[postIndex] = updatedPost;

    return NextResponse.json(
      { message: 'Blog post updated successfully', post: updatedPost },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to update blog post' },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const postId = parseInt(params.id);
    const postIndex = blogPosts.findIndex(p => p.id === postId);

    if (postIndex === -1) {
      return NextResponse.json(
        { error: 'Blog post not found' },
        { status: 404 }
      );
    }

    blogPosts.splice(postIndex, 1);

    return NextResponse.json(
      { message: 'Blog post deleted successfully' },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to delete blog post' },
      { status: 500 }
    );
  }
}