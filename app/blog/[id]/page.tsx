'use client';

import { useState, useEffect } from 'react';
import { Calendar, Clock, User, ArrowLeft, Share2, Heart, BookOpen, Tag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import Link from 'next/link';
import { useParams } from 'next/navigation';

export default function BlogPostPage() {
  const params = useParams();
  const postId = params.id as string;
  const [isLiked, setIsLiked] = useState(false);

  // Mock blog post data - in a real app, this would come from an API
  const blogPost = {
    id: 1,
    title: "10 Essential Skills Every Full Stack Developer Needs in 2025",
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
    author: "Sarah Johnson",
    date: "2025-01-15",
    readTime: "8 min read",
    category: "Development",
    tags: ["Full Stack", "Skills", "Career", "JavaScript", "React"],
    image: "https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop",
    likes: 124,
    shares: 45
  };

  const relatedPosts = [
    {
      id: 2,
      title: "The Complete Guide to UI/UX Design Systems",
      excerpt: "Learn how to create scalable and consistent design systems that enhance user experience.",
      category: "Design",
      readTime: "12 min read",
      image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop"
    },
    {
      id: 4,
      title: "How to Build a Portfolio That Gets You Hired",
      excerpt: "Expert tips on creating a compelling portfolio that showcases your skills.",
      category: "Career",
      readTime: "10 min read",
      image: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop"
    }
  ];

  const handleLike = () => {
    setIsLiked(!isLiked);
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: blogPost.title,
        url: window.location.href
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-[#0041ca] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">LF</span>
              </div>
              <span className="text-xl font-bold text-gray-900">LandingFast</span>
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/#courses" className="text-gray-700 hover:text-[#0041ca] transition-colors">Courses</Link>
              <Link href="/blog" className="text-gray-700 hover:text-[#0041ca] transition-colors">Blog</Link>
              <Link href="/#about" className="text-gray-700 hover:text-[#0041ca] transition-colors">About</Link>
              <Link href="/#faq" className="text-gray-700 hover:text-[#0041ca] transition-colors">FAQ</Link>
              <Button variant="outline" className="border-[#0041ca] text-[#0041ca] hover:bg-blue-50">
                Sign In
              </Button>
              <Button className="bg-[#0041ca] hover:bg-[#003bb3]">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <div className="mb-8">
          <Link href="/blog">
            <Button variant="ghost" className="hover:bg-blue-50 hover:text-[#0041ca]">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Button>
          </Link>
        </div>

        {/* Article Header */}
        <article className="mb-12">
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <Badge variant="secondary" className="bg-blue-100 text-[#0041ca]">
                {blogPost.category}
              </Badge>
              <div className="flex items-center text-sm text-gray-500">
                <Clock className="h-4 w-4 mr-1" />
                <span>{blogPost.readTime}</span>
              </div>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              {blogPost.title}
            </h1>
            
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-4">
                <div className="flex items-center text-gray-600">
                  <User className="h-5 w-5 mr-2" />
                  <span className="font-medium">{blogPost.author}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Calendar className="h-5 w-5 mr-2" />
                  <span>{new Date(blogPost.date).toLocaleDateString()}</span>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleLike}
                  className={`${isLiked ? 'text-red-500' : 'text-gray-600'} hover:text-red-500`}
                >
                  <Heart className={`h-5 w-5 mr-1 ${isLiked ? 'fill-current' : ''}`} />
                  {blogPost.likes + (isLiked ? 1 : 0)}
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleShare}
                  className="text-gray-600 hover:text-[#0041ca]"
                >
                  <Share2 className="h-5 w-5 mr-1" />
                  Share
                </Button>
              </div>
            </div>
          </div>

          {/* Featured Image */}
          <div className="mb-8 rounded-lg overflow-hidden">
            <img
              src={blogPost.image}
              alt={blogPost.title}
              className="w-full h-64 md:h-96 object-cover"
            />
          </div>

          {/* Article Content */}
          <div 
            className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-headings:font-bold prose-p:text-gray-700 prose-p:leading-relaxed prose-a:text-[#0041ca] prose-a:hover:text-[#003bb3] prose-strong:text-gray-900 prose-ul:text-gray-700 prose-li:text-gray-700"
            dangerouslySetInnerHTML={{ __html: blogPost.content }}
          />

          {/* Tags */}
          <div className="mt-8 pt-8 border-t border-gray-200">
            <div className="flex flex-wrap gap-2">
              {blogPost.tags.map((tag, index) => (
                <Badge key={index} variant="outline" className="text-sm">
                  <Tag className="h-3 w-3 mr-1" />
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        </article>

        <Separator className="my-12" />

        {/* Related Posts */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
            <BookOpen className="h-6 w-6 mr-2" />
            Related Articles
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {relatedPosts.map((post) => (
              <Card key={post.id} className="hover:shadow-lg transition-shadow group">
                <div className="aspect-video overflow-hidden rounded-t-lg">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary" className="bg-blue-100 text-[#0041ca]">
                      {post.category}
                    </Badge>
                    <div className="flex items-center text-sm text-gray-500">
                      <Clock className="h-4 w-4 mr-1" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <CardTitle className="text-lg group-hover:text-[#0041ca] transition-colors">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <Link href={`/blog/${post.id}`}>
                    <Button variant="outline" className="w-full group-hover:bg-blue-50 group-hover:border-[#0041ca] group-hover:text-[#0041ca]">
                      Read More
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="mt-16">
          <Card className="bg-gradient-to-r from-[#0041ca] to-[#0052ff] text-white">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">
                Don't Miss Our Latest Articles
              </h3>
              <p className="text-blue-100 mb-6">
                Subscribe to our newsletter for weekly tech insights and career tips
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-4 py-2 rounded-lg text-gray-900 flex-1"
                />
                <Button className="bg-white text-[#0041ca] hover:bg-gray-100">
                  Subscribe
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <Link href="/" className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-[#0041ca] rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">LF</span>
                </div>
                <span className="text-xl font-bold">LandingFast</span>
              </Link>
              <p className="text-gray-400">
                Land your dream job faster with industry-focused tech courses.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Courses</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/#courses" className="hover:text-white transition-colors">Fullstack Development</Link></li>
                <li><Link href="/#courses" className="hover:text-white transition-colors">UI/UX Design</Link></li>
                <li><Link href="/#courses" className="hover:text-white transition-colors">Digital Marketing</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/#about" className="hover:text-white transition-colors">About</Link></li>
                <li><Link href="/blog" className="hover:text-white transition-colors">Blog</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Careers</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="#" className="hover:text-white transition-colors">Help Center</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Community</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Terms</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Privacy</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 LandingFast. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}