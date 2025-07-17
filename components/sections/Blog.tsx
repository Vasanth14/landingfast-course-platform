'use client';

import { Calendar, Clock, ArrowRight, User, Tag } from 'lucide-react';
import Link from 'next/link';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "5 Essential Skills Every Full Stack Developer Must Master in 2024",
      excerpt: "Discover the most in-demand skills that will set you apart in the competitive world of full stack development.",
      author: "Sarah Johnson",
      date: "March 15, 2024",
      readTime: "8 min read",
      category: "Development",
      image: "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&dpr=1",
      featured: true
    },
    {
      id: 2,
      title: "UI/UX Design Trends That Will Dominate 2024",
      excerpt: "Stay ahead of the curve with these emerging design trends that are shaping the future of user experience.",
      author: "Michael Chen",
      date: "March 12, 2024",
      readTime: "6 min read",
      category: "Design",
      image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&dpr=1",
      featured: false
    },
    {
      id: 3,
      title: "How to Land Your First Tech Job: A Complete Guide",
      excerpt: "From building your portfolio to acing technical interviews, everything you need to know to start your tech career.",
      author: "Emily Rodriguez",
      date: "March 10, 2024",
      readTime: "12 min read",
      category: "Career",
      image: "https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&dpr=1",
      featured: false
    },
    {
      id: 4,
      title: "Digital Marketing Strategies That Actually Work in 2024",
      excerpt: "Learn the proven marketing strategies that top companies use to drive growth and customer acquisition.",
      author: "David Kim",
      date: "March 8, 2024",
      readTime: "10 min read",
      category: "Marketing",
      image: "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&dpr=1",
      featured: false
    },
    {
      id: 5,
      title: "Career Switching to Tech: Success Stories and Practical Tips",
      excerpt: "Real stories from professionals who successfully transitioned to tech careers and actionable advice to follow their path.",
      author: "Rachel Thompson",
      date: "March 5, 2024",
      readTime: "9 min read",
      category: "Career",
      image: "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&dpr=1",
      featured: false
    },
    {
      id: 6,
      title: "Building Your First React Application: Best Practices",
      excerpt: "A comprehensive guide to React development with industry best practices and common pitfalls to avoid.",
      author: "Alex Johnson",
      date: "March 3, 2024",
      readTime: "15 min read",
      category: "Development",
      image: "https://images.pexels.com/photos/374074/pexels-photo-374074.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&dpr=1",
      featured: false
    }
  ];

  const categories = ["All", "Development", "Design", "Marketing", "Career"];

  return (
    <section id="blog" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Latest <span className="text-gradient">Insights</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay updated with the latest trends, tips, and strategies in tech, design, and career development
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
                category === "All"
                  ? "bg-[#0041c9] text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Featured Post */}
        <div className="mb-16">
          <div className="glass-effect rounded-2xl overflow-hidden card-hover">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="relative">
                <img 
                  src={blogPosts[0].image} 
                  alt={blogPosts[0].title}
                  className="w-full h-64 lg:h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-[#0041c9] text-white px-3 py-1 rounded-full text-sm font-medium">
                  Featured
                </div>
              </div>
              <div className="p-8 flex flex-col justify-center">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="flex items-center space-x-2">
                    <Tag className="h-4 w-4 text-[#0041c9]" />
                    <span className="text-sm font-medium text-[#0041c9]">{blogPosts[0].category}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-4 w-4 text-gray-500" />
                    <span className="text-sm text-gray-600">{blogPosts[0].date}</span>
                  </div>
                </div>

                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                  {blogPosts[0].title}
                </h3>

                <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                  {blogPosts[0].excerpt}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="flex items-center space-x-2">
                      <User className="h-4 w-4 text-gray-500" />
                      <span className="text-sm text-gray-600">{blogPosts[0].author}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="h-4 w-4 text-gray-500" />
                      <span className="text-sm text-gray-600">{blogPosts[0].readTime}</span>
                    </div>
                  </div>
                  <Link href={`/blog/${blogPosts[0].id}`} className="btn-primary group">
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.slice(1).map((post) => (
            <div key={post.id} className="glass-effect rounded-2xl overflow-hidden card-hover">
              <div className="relative">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-[#0041c9]">
                  {post.category}
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center space-x-4 mb-3">
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-4 w-4 text-gray-500" />
                    <span className="text-sm text-gray-600">{post.date}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="h-4 w-4 text-gray-500" />
                    <span className="text-sm text-gray-600">{post.readTime}</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                  {post.title}
                </h3>

                <p className="text-gray-600 mb-4 text-sm leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <User className="h-4 w-4 text-gray-500" />
                    <span className="text-sm text-gray-600">{post.author}</span>
                  </div>
                  <Link href={`/blog/${post.id}`} className="text-[#0041c9] hover:text-[#1a57d6] font-medium text-sm transition-colors duration-200">
                    Read More →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/blog" className="btn-secondary">
            View All Articles
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Blog;