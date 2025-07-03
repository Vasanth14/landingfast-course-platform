'use client';

import { useState } from 'react';
import { Calendar, Clock, User, ArrowRight, Search, Tag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';

export default function BlogPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

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
      featured: true
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
      featured: false
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
      featured: false
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
      featured: false
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
      featured: false
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
      featured: false
    }
  ];

  const categories = ['All', 'Development', 'Design', 'Marketing', 'Career'];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

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
              <Link href="/blog" className="text-[#0041ca] font-medium">Blog</Link>
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

      {/* Header */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-gray-900 mb-4">
              Tech Insights & Career Tips
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay updated with the latest trends, tips, and insights from the tech industry.
              Learn from experts and accelerate your career growth.
            </p>
          </div>

          {/* Search and Filter */}
          <div className="mb-12">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-center">
              <div className="relative max-w-md w-full">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <div className="flex gap-2 flex-wrap">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    onClick={() => setSelectedCategory(category)}
                    className={selectedCategory === category ? "bg-[#0041ca] hover:bg-[#003bb3]" : ""}
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && selectedCategory === 'All' && !searchTerm && (
        <section className="py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Article</h2>
            </div>
            <Card className="overflow-hidden hover:shadow-xl transition-shadow group">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-64 md:h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="md:w-1/2 p-8">
                  <div className="flex items-center gap-2 mb-4">
                    <Badge variant="secondary" className="bg-blue-100 text-[#0041ca]">
                      {featuredPost.category}
                    </Badge>
                    <Badge variant="outline">Featured</Badge>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-[#0041ca] transition-colors">
                    {featuredPost.title}
                  </h3>
                  <p className="text-gray-600 mb-6 line-clamp-3">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-gray-500 space-x-4">
                      <div className="flex items-center">
                        <User className="h-4 w-4 mr-1" />
                        <span>{featuredPost.author}</span>
                      </div>
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        <span>{new Date(featuredPost.date).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        <span>{featuredPost.readTime}</span>
                      </div>
                    </div>
                    <Link href={`/blog/${featuredPost.id}`}>
                      <Button className="bg-[#0041ca] hover:bg-[#003bb3]">
                        Read More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </section>
      )}

      {/* Blog Posts Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {selectedCategory === 'All' ? 'Latest Articles' : `${selectedCategory} Articles`}
            </h2>
          </div>
          
          {filteredPosts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No articles found matching your criteria.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularPosts.map((post) => (
                <Card key={post.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="secondary" className="bg-blue-100 text-[#0041ca]">
                        {post.category}
                      </Badge>
                      <div className="flex items-center text-sm text-gray-500">
                        <Clock className="h-4 w-4 mr-1" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    <CardTitle className="text-lg group-hover:text-[#0041ca] transition-colors line-clamp-2">
                      {post.title}
                    </CardTitle>
                    <CardDescription className="line-clamp-3">
                      {post.excerpt}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-sm text-gray-500">
                        <User className="h-4 w-4 mr-1" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <Calendar className="h-4 w-4 mr-1" />
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                      </div>
                    </div>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {post.tags.map((tag, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          <Tag className="h-3 w-3 mr-1" />
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <div className="mt-4">
                      <Link href={`/blog/${post.id}`}>
                        <Button variant="outline" className="w-full group-hover:bg-blue-50 group-hover:border-[#0041ca] group-hover:text-[#0041ca]">
                          Read Article
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gradient-to-r from-[#0041ca] to-[#0052ff]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Stay Updated with Tech Insights
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Get the latest articles and career tips delivered to your inbox
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <Input
              placeholder="Enter your email"
              className="bg-white/10 border-white/20 text-white placeholder-white/70"
            />
            <Button className="bg-white text-[#0041ca] hover:bg-gray-100">
              Subscribe
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
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