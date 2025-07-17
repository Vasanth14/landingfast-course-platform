'use client';

import { useState } from 'react';
import { Mail, Download, CheckCircle, ArrowRight, FileText, Sparkles, Users, Award } from 'lucide-react';

const EmailCapture = () => {
  const [email, setEmail] = useState('');
  const [selectedPath, setSelectedPath] = useState('fullstack');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const techPaths = [
    {
      id: 'fullstack',
      title: 'Full Stack Development',
      icon: '💻',
      description: 'Complete web development roadmap',
      color: 'from-blue-500 to-blue-600'
    },
    {
      id: 'design',
      title: 'UI/UX Design',
      icon: '🎨',
      description: 'Design thinking and user experience',
      color: 'from-purple-500 to-purple-600'
    },
    {
      id: 'marketing',
      title: 'Digital Marketing',
      icon: '📈',
      description: 'Growth and marketing strategies',
      color: 'from-green-500 to-green-600'
    }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/send-pathway-pdf', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          pathway: selectedPath,
        }),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setEmail('');
      } else {
        throw new Error('Failed to send email');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <section className="py-24 bg-gradient-to-br from-green-50 via-white to-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-3xl p-12 shadow-2xl border border-green-200">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="h-10 w-10 text-green-600" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Check Your Email! 📧
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Your personalized tech pathway PDF is on its way! We've sent it to your inbox along with exclusive bonus resources.
            </p>
            <div className="bg-green-50 rounded-xl p-6 mb-8">
              <h3 className="text-lg font-semibold text-green-800 mb-2">What's included in your PDF:</h3>
              <ul className="text-green-700 space-y-2">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4" />
                  <span>Complete learning roadmap for your chosen path</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4" />
                  <span>Essential tools and resources list</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4" />
                  <span>Industry salary insights and career progression</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4" />
                  <span>Exclusive discount code for our courses</span>
                </li>
              </ul>
            </div>
            <button 
              onClick={() => setIsSubmitted(false)}
              className="btn-primary"
            >
              Get Another Pathway PDF
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-24 bg-gradient-to-br from-[#0041c9] via-[#1a57d6] to-[#0041c9] relative overflow-hidden">
      {/* Background Patterns */}
      <div className="absolute inset-0 opacity-10">
        <svg className="absolute top-0 left-0 w-full h-full" viewBox="0 0 1000 1000">
          <defs>
            <pattern id="emailGrid" width="50" height="50" patternUnits="userSpaceOnUse">
              <path d="M 50 0 L 0 0 0 50" fill="none" stroke="white" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#emailGrid)"/>
        </svg>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-white/10 rounded-full blur-xl animate-pulse" style={{ animationDelay: '2s' }}></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-full mb-6">
            <Sparkles className="h-5 w-5" />
            <span className="font-semibold">Free Resource</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Get Your Personalized
            <br />
            <span className="text-blue-200">Tech Pathway PDF</span>
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
            Discover your perfect learning path with our comprehensive guide tailored to your career goals. 
            Includes roadmaps, resources, and insider tips from industry experts.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Form Section */}
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/20">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
              Choose Your Path
            </h3>

            {/* Path Selection */}
            <div className="grid grid-cols-1 gap-4 mb-8">
              {techPaths.map((path) => (
                <div
                  key={path.id}
                  className={`p-4 rounded-xl border-2 cursor-pointer transition-all duration-300 ${
                    selectedPath === path.id
                      ? 'border-white bg-white/20'
                      : 'border-white/30 bg-white/5 hover:bg-white/10'
                  }`}
                  onClick={() => setSelectedPath(path.id)}
                >
                  <div className="flex items-center space-x-4">
                    <div className="text-2xl">{path.icon}</div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-white">{path.title}</h4>
                      <p className="text-blue-100 text-sm">{path.description}</p>
                    </div>
                    <div className={`w-4 h-4 rounded-full border-2 ${
                      selectedPath === path.id ? 'bg-white border-white' : 'border-white/50'
                    }`}></div>
                  </div>
                </div>
              ))}
            </div>

            {/* Email Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-white font-medium mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="w-full pl-12 pr-4 py-4 bg-white/90 backdrop-blur-sm rounded-xl border border-white/30 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent text-gray-900 placeholder-gray-500"
                    required
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-white text-[#0041c9] hover:bg-gray-100 font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed group"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-[#0041c9] mr-2"></div>
                    Sending PDF...
                  </span>
                ) : (
                  <span className="flex items-center justify-center">
                    <Download className="mr-2 h-5 w-5" />
                    Get My Free PDF Guide
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-200 group-hover:translate-x-1" />
                  </span>
                )}
              </button>
            </form>

            <p className="text-blue-100 text-sm text-center mt-4">
              No spam, ever. Unsubscribe anytime. 🔒
            </p>
          </div>

          {/* Benefits Section */}
          <div className="space-y-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="flex items-center space-x-4 mb-4">
                <div className="bg-white/20 p-3 rounded-xl">
                  <FileText className="h-6 w-6 text-white" />
                </div>
                <h4 className="text-xl font-semibold text-white">Comprehensive Roadmap</h4>
              </div>
              <p className="text-blue-100">
                Step-by-step learning path with timelines, milestones, and recommended resources for your chosen tech career.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="flex items-center space-x-4 mb-4">
                <div className="bg-white/20 p-3 rounded-xl">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <h4 className="text-xl font-semibold text-white">Industry Insights</h4>
              </div>
              <p className="text-blue-100">
                Real salary data, job market trends, and career progression paths based on current industry standards.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="flex items-center space-x-4 mb-4">
                <div className="bg-white/20 p-3 rounded-xl">
                  <Award className="h-6 w-6 text-white" />
                </div>
                <h4 className="text-xl font-semibold text-white">Exclusive Bonuses</h4>
              </div>
              <p className="text-blue-100">
                Access to our private community, monthly webinars, and special discounts on our premium courses.
              </p>
            </div>

            {/* Social Proof */}
            <div className="text-center">
              <div className="flex items-center justify-center space-x-8 text-white/80">
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">50,000+</div>
                  <div className="text-sm">PDFs Downloaded</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">4.9/5</div>
                  <div className="text-sm">Average Rating</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">95%</div>
                  <div className="text-sm">Success Rate</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmailCapture;