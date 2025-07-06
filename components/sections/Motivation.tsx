'use client';

import { ArrowRight, Target, BookOpen, Users, Zap, TrendingUp, Award } from 'lucide-react';

const Motivation = () => {
  const beginner = {
    title: "Starting Your Tech Journey?",
    subtitle: "Perfect! Every expert was once a beginner",
    description: "Don't let imposter syndrome hold you back. Our beginner-friendly approach will guide you from zero to hero.",
    features: [
      "No prior experience required",
      "Step-by-step learning path",
      "Mentorship program",
      "Beginner-friendly community"
    ],
    stats: [
      { label: "Complete Beginners", value: "60%" },
      { label: "Success Rate", value: "92%" },
      { label: "Average First Salary", value: "$65k" }
    ]
  };

  const switcher = {
    title: "Ready to Switch Careers?",
    subtitle: "It's never too late to follow your passion",
    description: "Join thousands who've successfully transitioned to tech careers. Your experience is an asset, not a liability.",
    features: [
      "Career transition support",
      "Flexible learning schedules",
      "Industry networking events",
      "Job placement assistance"
    ],
    stats: [
      { label: "Career Switchers", value: "40%" },
      { label: "Placement Rate", value: "88%" },
      { label: "Salary Increase", value: "150%" }
    ]
  };

  const successStories = [
    {
      name: "Sarah Chen",
      role: "Software Engineer at Google",
      story: "From marketing manager to full-stack developer in 6 months",
      image: "https://images.pexels.com/photos/3756681/pexels-photo-3756681.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1"
    },
    {
      name: "Michael Rodriguez",
      role: "UI/UX Designer at Netflix",
      story: "Switched from accounting to design and landed his dream job",
      image: "https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1"
    },
    {
      name: "Priya Patel",
      role: "Digital Marketing Manager",
      story: "From teacher to marketing lead, doubled her previous salary",
      image: "https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Your <span className="text-gradient">Success</span> Story Starts Here
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Whether you're a complete beginner or looking to switch careers, we're here to guide you every step of the way
          </p>
        </div>

        {/* Beginner Section */}
        <div className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slideInFromLeft">
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-green-100 p-3 rounded-xl">
                  <BookOpen className="h-8 w-8 text-green-600" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-gray-900">{beginner.title}</h3>
                  <p className="text-green-600 font-medium">{beginner.subtitle}</p>
                </div>
              </div>

              <p className="text-gray-600 mb-6 text-lg">
                {beginner.description}
              </p>

              <div className="space-y-3 mb-8">
                {beginner.features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              <button className="btn-primary group">
                Start as Beginner
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
              </button>
            </div>

            <div className="animate-slideInFromRight">
              <div className="glass-effect rounded-2xl p-8">
                <h4 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                  Beginner Success Stats
                </h4>
                <div className="grid grid-cols-1 gap-6">
                  {beginner.stats.map((stat, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-white rounded-xl shadow-sm">
                      <span className="text-gray-600">{stat.label}</span>
                      <span className="text-2xl font-bold text-green-600">{stat.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Career Switcher Section */}
        <div className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slideInFromLeft lg:order-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-blue-100 p-3 rounded-xl">
                  <Target className="h-8 w-8 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-gray-900">{switcher.title}</h3>
                  <p className="text-blue-600 font-medium">{switcher.subtitle}</p>
                </div>
              </div>

              <p className="text-gray-600 mb-6 text-lg">
                {switcher.description}
              </p>

              <div className="space-y-3 mb-8">
                {switcher.features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              <button className="btn-primary group">
                Switch Careers Now
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
              </button>
            </div>

            <div className="animate-slideInFromRight lg:order-1">
              <div className="glass-effect rounded-2xl p-8">
                <h4 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                  Career Switcher Results
                </h4>
                <div className="grid grid-cols-1 gap-6">
                  {switcher.stats.map((stat, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-white rounded-xl shadow-sm">
                      <span className="text-gray-600">{stat.label}</span>
                      <span className="text-2xl font-bold text-blue-600">{stat.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Success Stories */}
        <div className="bg-gradient-to-r from-[#0041c9] to-[#1a57d6] rounded-3xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Real People, Real Success
            </h3>
            <p className="text-blue-100 text-lg max-w-2xl mx-auto">
              Meet some of our graduates who transformed their careers and lives
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                <div className="w-20 h-20 rounded-full mx-auto mb-4 overflow-hidden">
                  <img 
                    src={story.image} 
                    alt={story.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="text-xl font-semibold text-white mb-2">{story.name}</h4>
                <p className="text-blue-200 font-medium mb-3">{story.role}</p>
                <p className="text-blue-100 text-sm">{story.story}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Motivation;