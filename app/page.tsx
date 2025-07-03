'use client';

import { useState, useEffect } from 'react';
import { ChevronDown, Play, Users, BookOpen, Award, ArrowRight, CheckCircle, Star, TrendingUp, Code, Zap, Quote, Palette, BarChart3, Layers } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const courses = [
    {
      title: "Fullstack Development",
      description: "Master both frontend and backend technologies with React, Node.js, and databases.",
      duration: "6 months",
      students: "2,500+",
      rating: 4.9,
      price: "$299",
      features: ["React & Next.js", "Node.js & Express", "MongoDB & PostgreSQL", "AWS Deployment"],
      badge: "Most Popular"
    },
    {
      title: "UI/UX Design",
      description: "Create beautiful, user-centered designs with industry-standard tools and processes.",
      duration: "4 months",
      students: "1,800+",
      rating: 4.8,
      price: "$199",
      features: ["Figma & Adobe XD", "Design Systems", "User Research", "Prototyping"],
      badge: "Creative"
    },
    {
      title: "Digital Marketing",
      description: "Build comprehensive digital marketing strategies and grow businesses online.",
      duration: "3 months",
      students: "1,200+",
      rating: 4.7,
      price: "$149",
      features: ["SEO & SEM", "Social Media", "Analytics", "Content Strategy"],
      badge: "High Demand"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Frontend Developer at Google",
      content: "LandingFast transformed my career. The instructors are world-class and the curriculum is incredibly practical.",
      rating: 5,
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    },
    {
      name: "Michael Chen",
      role: "UX Designer at Microsoft",
      content: "The UI/UX course gave me the skills and confidence to land my dream job. Highly recommend!",
      rating: 5,
      image: "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    },
    {
      name: "Emily Rodriguez",
      role: "Marketing Manager at Shopify",
      content: "Excellent course structure and amazing support. I got promoted within 3 months of completing the program.",
      rating: 5,
      image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    }
  ];

  const techQuotes = [
    {
      quote: "The first step is to establish that something is possible; then probability will occur.",
      author: "Elon Musk",
      role: "CEO of Tesla & SpaceX",
      image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    },
    {
      quote: "AI will probably be the best or worst thing to happen to humanity.",
      author: "Sam Altman",
      role: "CEO of OpenAI",
      image: "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    },
    {
      quote: "The future belongs to those who learn more skills and combine them in creative ways.",
      author: "Robert Greene",
      role: "Author & Strategist",
      image: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    }
  ];

  const inDemandSkills = [
    { skill: "Artificial Intelligence", growth: "+74%", icon: "🤖" },
    { skill: "Cloud Computing", growth: "+68%", icon: "☁️" },
    { skill: "Cybersecurity", growth: "+62%", icon: "🔒" },
    { skill: "Data Science", growth: "+58%", icon: "📊" },
    { skill: "Mobile Development", growth: "+45%", icon: "📱" },
    { skill: "DevOps", growth: "+42%", icon: "⚙️" },
    { skill: "Blockchain", growth: "+38%", icon: "⛓️" },
    { skill: "UI/UX Design", growth: "+35%", icon: "🎨" }
  ];

  const techStack = [
    "React", "Next.js", "TypeScript", "Node.js", "Python", "AWS", "Docker", "Kubernetes",
    "MongoDB", "PostgreSQL", "Redis", "GraphQL", "TensorFlow", "PyTorch", "Figma", "Adobe XD",
    "Git", "Jenkins", "Terraform", "Ansible", "Vue.js", "Angular", "Express.js", "Django",
    "Flask", "Spring Boot", "MySQL", "Firebase", "Vercel", "Netlify", "Heroku", "DigitalOcean"
  ];

  const faqs = [
    {
      question: "What makes LandingFast different from other online courses?",
      answer: "We focus on practical, industry-relevant skills with live mentorship, real projects, and career support. Our instructors are working professionals from top tech companies."
    },
    {
      question: "Do you offer job placement assistance?",
      answer: "Yes! We provide resume reviews, interview preparation, portfolio building, and direct connections to our hiring partners. 85% of our graduates land jobs within 6 months."
    },
    {
      question: "Can I access courses after completion?",
      answer: "Absolutely! You get lifetime access to all course materials, updates, and our exclusive alumni community."
    },
    {
      question: "What if I'm a complete beginner?",
      answer: "Our courses are designed for all skill levels. We start with fundamentals and gradually build up to advanced topics with plenty of practice exercises."
    },
    {
      question: "Do you offer refunds?",
      answer: "Yes, we offer a 30-day money-back guarantee. If you're not satisfied with the course, we'll refund your payment in full."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-[#0041ca] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">LF</span>
              </div>
              <span className="text-xl font-bold text-gray-900">LandingFast</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="#courses" className="text-gray-700 hover:text-[#0041ca] transition-colors">Courses</Link>
              <Link href="/blog" className="text-gray-700 hover:text-[#0041ca] transition-colors">Blog</Link>
              <Link href="#about" className="text-gray-700 hover:text-[#0041ca] transition-colors">About</Link>
              <Link href="#faq" className="text-gray-700 hover:text-[#0041ca] transition-colors">FAQ</Link>
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

      {/* Hero Section */}
      <section className="relative overflow-hidden min-h-screen flex items-center">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Primary Gradient Orbs */}
          <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-[#0041ca]/20 to-[#0052ff]/20 rounded-full blur-3xl animate-float"></div>
          <div className="absolute top-40 right-20 w-96 h-96 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-float-delayed"></div>
          <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 rounded-full blur-3xl animate-float-slow"></div>
          
          {/* Secondary Gradient Elements */}
          <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-gradient-to-r from-[#0041ca]/10 to-indigo-400/10 rounded-full blur-2xl animate-pulse-slow"></div>
          <div className="absolute bottom-1/3 right-1/4 w-56 h-56 bg-gradient-to-r from-violet-400/10 to-purple-400/10 rounded-full blur-2xl animate-pulse-slow"></div>
          
          {/* Geometric Patterns */}
          <div className="absolute top-32 right-1/3 w-32 h-32 border border-[#0041ca]/20 rounded-lg rotate-45 animate-spin-slow"></div>
          <div className="absolute bottom-32 left-1/4 w-24 h-24 border border-purple-400/20 rounded-full animate-bounce-slow"></div>
          
          {/* Grid Pattern Overlay */}
          <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className={`text-center transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-[#0041ca]/20 text-[#0041ca] font-medium mb-8 animate-fade-in-up">
              <Star className="w-4 h-4 mr-2" />
              #1 Tech Education Platform
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Land Your Dream Job
              <span className="block bg-gradient-to-r from-[#0041ca] to-[#0052ff] bg-clip-text text-transparent animate-gradient">
                Faster
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
              Master in-demand tech skills through live classes, hands-on projects, and expert mentorship. 
              Join thousands of successful career switchers and beginners.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button size="lg" className="bg-[#0041ca] hover:bg-[#003bb3] text-lg px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                Start Learning Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-4 rounded-xl border-2 border-gray-300 hover:border-[#0041ca] hover:text-[#0041ca] transition-all duration-300">
                <Play className="mr-2 h-5 w-5" />
                Watch Demo
              </Button>
            </div>
            
            {/* Stats */}
            <div className="flex flex-wrap justify-center items-center gap-8 text-gray-600">
              <div className="flex items-center bg-white/60 backdrop-blur-sm rounded-full px-6 py-3 border border-white/40">
                <Users className="h-5 w-5 mr-2 text-[#0041ca]" />
                <span className="font-semibold">5,000+ Students</span>
              </div>
              <div className="flex items-center bg-white/60 backdrop-blur-sm rounded-full px-6 py-3 border border-white/40">
                <Star className="h-5 w-5 mr-2 text-yellow-400" />
                <span className="font-semibold">4.9/5 Rating</span>
              </div>
              <div className="flex items-center bg-white/60 backdrop-blur-sm rounded-full px-6 py-3 border border-white/40">
                <Award className="h-5 w-5 mr-2 text-green-500" />
                <span className="font-semibold">85% Job Placement</span>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-1/4 left-8 animate-float">
          <div className="w-16 h-16 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg flex items-center justify-center">
            <Code className="w-8 h-8 text-[#0041ca]" />
          </div>
        </div>
        <div className="absolute top-1/3 right-8 animate-float-delayed">
          <div className="w-16 h-16 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg flex items-center justify-center">
            <Palette className="w-8 h-8 text-purple-600" />
          </div>
        </div>
        <div className="absolute bottom-1/4 left-1/4 animate-float-slow">
          <div className="w-16 h-16 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg flex items-center justify-center">
            <BarChart3 className="w-8 h-8 text-green-600" />
          </div>
        </div>
      </section>

      {/* Custom Styles */}
      {/* <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-30px) rotate(-5deg); }
        }
        
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(3deg); }
        }
        
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.05); }
        }
        
        @keyframes spin-slow {
          from { transform: rotate(45deg); }
          to { transform: rotate(405deg); }
        }
        
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
        }
        
        .animate-float-slow {
          animation: float-slow 10s ease-in-out infinite;
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
        
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        
        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }
        
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out;
        }
        
        .bg-grid-pattern {
          background-image: 
            linear-gradient(rgba(0, 65, 202, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 65, 202, 0.1) 1px, transparent 1px);
          background-size: 50px 50px;
        }
      `}</style> */}

      {/* Tech is the Future Section */}
      <section className="py-20 bg-gradient-to-r from-[#0041ca] to-[#0052ff]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Technology is the Future
            </h2>
            <p className="text-xl text-blue-100 max-w-4xl mx-auto">
              The digital revolution is reshaping every industry. Those who master technology today 
              will lead tomorrow's innovations and secure the most rewarding careers.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-white/20 transition-all duration-300">
              <CardContent className="p-8 text-center">
                <TrendingUp className="h-12 w-12 mx-auto mb-4 text-blue-200" />
                <h3 className="text-xl font-bold mb-4">Exponential Growth</h3>
                <p className="text-blue-100">
                  Tech jobs are growing 3x faster than other industries, with AI and cloud computing leading the charge.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-white/20 transition-all duration-300">
              <CardContent className="p-8 text-center">
                <Code className="h-12 w-12 mx-auto mb-4 text-blue-200" />
                <h3 className="text-xl font-bold mb-4">High Salaries</h3>
                <p className="text-blue-100">
                  Tech professionals earn 40% more than average, with entry-level positions starting at $70k+.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-white/20 transition-all duration-300">
              <CardContent className="p-8 text-center">
                <Zap className="h-12 w-12 mx-auto mb-4 text-blue-200" />
                <h3 className="text-xl font-bold mb-4">Remote Flexibility</h3>
                <p className="text-blue-100">
                  Work from anywhere with 80% of tech companies offering remote or hybrid options.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Fullstack Developer Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="flex items-center mb-6">
                <Code className="h-8 w-8 text-[#0041ca] mr-3" />
                <Badge className="bg-[#0041ca] text-white">Most In-Demand</Badge>
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Fullstack Developers: The Digital Architects
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Fullstack developers are the versatile problem-solvers who build complete digital solutions. 
                They bridge the gap between user experience and server functionality, creating seamless applications 
                that power modern businesses.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">E-commerce Revolution</h4>
                    <p className="text-gray-600">Building platforms that enable millions of businesses to sell online, creating jobs and economic growth worldwide.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Healthcare Innovation</h4>
                    <p className="text-gray-600">Developing telemedicine apps and patient management systems that save lives and improve healthcare accessibility.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Financial Technology</h4>
                    <p className="text-gray-600">Creating secure banking apps and payment systems that democratize financial services globally.</p>
                  </div>
                </div>
              </div>
              <Button className="bg-[#0041ca] hover:bg-[#003bb3] text-lg px-8 py-3">
                Start Fullstack Journey
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
            <div className="order-1 lg:order-2">
              <img
                src="https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="Fullstack Developer working on multiple screens"
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* UI/UX Designer Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="UI/UX Designer creating user interfaces"
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
            </div>
            <div>
              <div className="flex items-center mb-6">
                <Palette className="h-8 w-8 text-[#0041ca] mr-3" />
                <Badge className="bg-purple-100 text-purple-800">Creative Impact</Badge>
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                UI/UX Designers: The Experience Creators
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                UI/UX designers are the empathy-driven professionals who understand human behavior and translate 
                it into intuitive digital experiences. They solve complex user problems and make technology 
                accessible to everyone.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Accessibility Champions</h4>
                    <p className="text-gray-600">Designing inclusive interfaces that make technology usable for people with disabilities, breaking down digital barriers.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Business Growth Drivers</h4>
                    <p className="text-gray-600">Creating user experiences that increase conversion rates by 200%+, directly impacting company revenue and success.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Social Impact</h4>
                    <p className="text-gray-600">Designing apps for education, mental health, and social causes that improve millions of lives worldwide.</p>
                  </div>
                </div>
              </div>
              <Button className="bg-[#0041ca] hover:bg-[#003bb3] text-lg px-8 py-3">
                Start Design Journey
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Digital Marketing Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="flex items-center mb-6">
                <BarChart3 className="h-8 w-8 text-[#0041ca] mr-3" />
                <Badge className="bg-green-100 text-green-800">Growth Focused</Badge>
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Digital Marketers: The Growth Catalysts
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Digital marketers are the strategic minds who connect businesses with their ideal customers. 
                They leverage data, creativity, and technology to drive growth, build brands, and create 
                meaningful connections in the digital world.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Small Business Empowerment</h4>
                    <p className="text-gray-600">Helping local businesses compete globally through strategic digital campaigns, creating jobs and economic opportunities.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Startup Success Stories</h4>
                    <p className="text-gray-600">Scaling startups from zero to millions in revenue through data-driven marketing strategies and customer acquisition.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Social Change</h4>
                    <p className="text-gray-600">Promoting awareness for important causes, driving social movements, and creating positive change through strategic campaigns.</p>
                  </div>
                </div>
              </div>
              <Button className="bg-[#0041ca] hover:bg-[#003bb3] text-lg px-8 py-3">
                Start Marketing Journey
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
            <div className="order-1 lg:order-2">
              <img
                src="https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="Digital Marketing analytics and strategy"
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* In-Demand Skills Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Study In-Demand Skills
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Focus on the skills that employers are actively seeking. These technologies show the highest job growth and salary potential.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {inDemandSkills.map((item, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-[#0041ca] transition-colors">
                    {item.skill}
                  </h3>
                  <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
                    {item.growth} growth
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Leaders Quotes Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Wisdom from Tech Leaders
            </h2>
            <p className="text-xl text-gray-600">
              Insights from the visionaries shaping our technological future
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {techQuotes.map((quote, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden">
                <CardContent className="p-8">
                  <Quote className="h-8 w-8 text-[#0041ca] mb-4" />
                  <blockquote className="text-lg text-gray-700 mb-6 italic leading-relaxed">
                    "{quote.quote}"
                  </blockquote>
                  <div className="flex items-center">
                    <img 
                      src={quote.image} 
                      alt={quote.author}
                      className="w-12 h-12 rounded-full mr-4"
                    />
                    <div>
                      <div className="font-semibold text-gray-900">{quote.author}</div>
                      <div className="text-sm text-gray-600">{quote.role}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Infinite Scroll Tech Stack Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-gray-800 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <div className="text-center text-white">
            <h2 className="text-4xl font-bold mb-4">
              Latest Tech & Tools We Teach
            </h2>
            <p className="text-xl text-gray-300">
              Stay current with the most in-demand technologies and frameworks
            </p>
          </div>
        </div>
        
        <div className="relative">
          <div className="flex animate-scroll space-x-8">
            {[...techStack, ...techStack].map((tech, index) => (
              <div
                key={index}
                className="flex-shrink-0 bg-white/10 backdrop-blur-md rounded-lg px-6 py-3 text-white font-medium border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
        
        {/* <style jsx>{`
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
          
          .animate-scroll {
            animation: scroll 30s linear infinite;
          }
        `}</style> */}
      </section>

      {/* Courses Section */}
      <section id="courses" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Choose Your Path</h2>
            <p className="text-xl text-gray-600">
              Industry-focused courses designed to get you hired fast
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-gray-200">
                <CardHeader className="pb-4">
                  <div className="flex justify-between items-start">
                    <Badge variant="secondary" className="bg-blue-100 text-[#0041ca]">
                      {course.badge}
                    </Badge>
                    <div className="text-right">
                      <div className="flex items-center">
                        <Star className="h-4 w-4 text-yellow-400 mr-1" />
                        <span className="text-sm font-medium">{course.rating}</span>
                      </div>
                    </div>
                  </div>
                  <CardTitle className="text-xl group-hover:text-[#0041ca] transition-colors">
                    {course.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    {course.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between text-sm text-gray-500">
                      <span>Duration: {course.duration}</span>
                      <span>{course.students} students</span>
                    </div>
                    <div className="space-y-2">
                      {course.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-sm">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                    <div className="flex justify-between items-center pt-4">
                      <div className="text-2xl font-bold text-gray-900">
                        {course.price}
                      </div>
                      <Button className="bg-[#0041ca] hover:bg-[#003bb3]">
                        Enroll Now
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Card className="inline-block p-8 bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
              <CardContent className="p-0">
                <BookOpen className="h-12 w-12 text-[#0041ca] mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">More Courses Coming Soon</h3>
                <p className="text-gray-600 mb-4">
                  Data Science, Mobile Development, DevOps, and more!
                </p>
                <Button variant="outline" className="border-[#0041ca] text-[#0041ca] hover:bg-blue-50">
                  Get Notified
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Success Stories</h2>
            <p className="text-xl text-gray-600">
              Hear from our graduates who landed their dream jobs
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white border-gray-200 hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full mr-4"
                    />
                    <div>
                      <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                      <p className="text-sm text-gray-600">{testimonial.role}</p>
                    </div>
                  </div>
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 italic">"{testimonial.content}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">
              Everything you need to know about our courses
            </p>
          </div>
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border border-gray-200 rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold text-gray-900 hover:text-[#0041ca] transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#0041ca] to-[#0052ff]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to Transform Your Career?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of successful students who landed their dream jobs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-[#0041ca] hover:bg-gray-100 text-lg px-8 py-3">
              Start Your Journey
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-[#0041ca] text-lg px-8 py-3">
              Schedule a Call
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-[#0041ca] rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">LF</span>
                </div>
                <span className="text-xl font-bold">LandingFast</span>
              </div>
              <p className="text-gray-400">
                Land your dream job faster with industry-focused tech courses.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Courses</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="#" className="hover:text-white transition-colors">Fullstack Development</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">UI/UX Design</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Digital Marketing</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="#" className="hover:text-white transition-colors">About</Link></li>
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