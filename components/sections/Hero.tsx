'use client';

import { useState, useEffect } from 'react';
import { ArrowRight, Play, Users, Award, Clock, Sparkles } from 'lucide-react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const stats = [
    { icon: Users, label: 'Students Trained', value: '10,000+' },
    { icon: Award, label: 'Success Rate', value: '95%' },
    { icon: Clock, label: 'Avg. Job Time', value: '3 Months' },
  ];

  // Tech icons data for scattered animation
  const techIcons = [
    { name: 'React', symbol: '⚛️', delay: '0s', x: '10%', y: '20%' },
    { name: 'Node.js', symbol: '🟢', delay: '0.5s', x: '85%', y: '15%' },
    { name: 'TypeScript', symbol: '🔷', delay: '1s', x: '15%', y: '70%' },
    { name: 'Python', symbol: '🐍', delay: '1.5s', x: '80%', y: '65%' },
    { name: 'Figma', symbol: '🎨', delay: '2s', x: '20%', y: '45%' },
    { name: 'AWS', symbol: '☁️', delay: '2.5s', x: '75%', y: '40%' },
    { name: 'MongoDB', symbol: '🍃', delay: '3s', x: '25%', y: '85%' },
    { name: 'Docker', symbol: '🐳', delay: '3.5s', x: '70%', y: '80%' },
    { name: 'GraphQL', symbol: '🔗', delay: '4s', x: '5%', y: '50%' },
    { name: 'Vue.js', symbol: '💚', delay: '4.5s', x: '90%', y: '50%' },
    { name: 'Firebase', symbol: '🔥', delay: '5s', x: '35%', y: '25%' },
    { name: 'Next.js', symbol: '▲', delay: '5.5s', x: '60%', y: '25%' },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Patterns */}
      <div className="absolute inset-0">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50"></div>
        
        {/* Geometric Patterns */}
        <div className="absolute inset-0 opacity-30">
          <svg className="absolute top-0 left-0 w-full h-full" viewBox="0 0 1000 1000" preserveAspectRatio="xMidYMid slice">
            <defs>
              <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
                <path d="M 50 0 L 0 0 0 50" fill="none" stroke="#0041c9" strokeWidth="0.5" opacity="0.3"/>
              </pattern>
              <pattern id="dots" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle cx="10" cy="10" r="1" fill="#1a57d6" opacity="0.4"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)"/>
            <rect width="100%" height="100%" fill="url(#dots)"/>
          </svg>
        </div>

        {/* Floating Geometric Shapes */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-blue-200 to-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-purple-200 to-purple-300 rounded-lg rotate-45 mix-blend-multiply filter blur-lg opacity-40 animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-32 left-20 w-40 h-40 bg-gradient-to-br from-pink-200 to-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-pulse" style={{ animationDelay: '4s' }}></div>
        <div className="absolute bottom-20 right-32 w-28 h-28 bg-gradient-to-br from-indigo-200 to-indigo-300 rounded-lg rotate-12 mix-blend-multiply filter blur-lg opacity-40 animate-pulse" style={{ animationDelay: '6s' }}></div>
        
        {/* Hexagon Pattern */}
        <div className="absolute top-1/4 right-1/4 opacity-20">
          <svg width="100" height="100" viewBox="0 0 100 100">
            <polygon points="50,5 85,25 85,75 50,95 15,75 15,25" fill="none" stroke="#0041c9" strokeWidth="2"/>
            <polygon points="50,15 75,30 75,70 50,85 25,70 25,30" fill="none" stroke="#1a57d6" strokeWidth="1"/>
          </svg>
        </div>
      </div>

      {/* Scattered Tech Icons */}
      {/* <div className="absolute inset-0 pointer-events-none">
        {techIcons.map((tech, index) => (
          <div
            key={index}
            className="absolute animate-float"
            style={{
              left: tech.x,
              top: tech.y,
              animationDelay: tech.delay,
              animationDuration: '6s',
            }}
          >
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-3 shadow-lg border border-white/40 hover:scale-110 transition-transform duration-300">
              <div className="text-2xl">{tech.symbol}</div>
            </div>
          </div>
        ))}
      </div> */}

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="text-center">
          {/* Badge */}
          <div className={`transition-all duration-1000 ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`}>
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-[#0041c9] to-[#1a57d6] text-white px-6 py-3 rounded-full mb-8 shadow-lg">
              <Sparkles className="h-5 w-5" />
              <span className="font-semibold">🎉 Join 10,000+ Successful Graduates</span>
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            </div>
          </div>

          <div className={`transition-all duration-1000 ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`}>
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
              <span className="text-gradient">Land Your</span>
              <br />
              Dream Jobs
              <br />
              <span className="text-gradient">Faster</span>
            </h1>
          </div>

          <div className={`transition-all duration-1000 ${isVisible ? 'animate-fadeInUp animate-delay-200' : 'opacity-0'}`}>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
              Master in-demand tech skills with our comprehensive courses in 
              <span className="text-[#0041c9] font-semibold"> Fullstack Development</span>, 
              <span className="text-[#0041c9] font-semibold"> UI/UX Design</span>, and 
              <span className="text-[#0041c9] font-semibold"> Digital Marketing</span>
            </p>
          </div>

          <div className={`transition-all duration-1000 ${isVisible ? 'animate-fadeInUp animate-delay-400' : 'opacity-0'}`}>
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6 mb-16">
              <button className="btn-primary group">
                Start Your Journey
                <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-200 group-hover:translate-x-1" />
              </button>
              <button className="btn-secondary group">
                <Play className="mr-2 h-5 w-5" />
                Watch Demo
              </button>
            </div>
          </div>

          {/* Stats Section */}
          <div className={`transition-all duration-1000 ${isVisible ? 'animate-fadeInUp animate-delay-600' : 'opacity-0'}`}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="glass-effect rounded-2xl p-6 card-hover">
                  <div className="flex items-center justify-center mb-4">
                    <div className="bg-gradient-to-r from-[#0041c9] to-[#1a57d6] p-3 rounded-full">
                      <stat.icon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          25% {
            transform: translateY(-10px) rotate(2deg);
          }
          50% {
            transform: translateY(-5px) rotate(-1deg);
          }
          75% {
            transform: translateY(-15px) rotate(1deg);
          }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;