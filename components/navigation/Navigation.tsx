'use client';

import { useState, useEffect } from 'react';
import { Menu, X, Zap } from 'lucide-react';
import Link from 'next/link';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '#courses', label: 'Courses' },
    { href: '#formats', label: 'Learning Formats' },
    { href: '#success', label: 'Success Stories' },
    { href: '#blog', label: 'Blog' },
    { href: '#contact', label: 'Contact' },
  ];

  const scrollToContact = () => {
    const el = document.getElementById('contact-form');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-2">
            <div className="bg-gradient-to-r from-[#0041c9] to-[#1a57d6] p-2 rounded-lg">
              <Zap className="h-6 w-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-gradient">LandingFast</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={scrollToContact}
                className="text-gray-700 hover:text-[#0041c9] font-medium transition-colors duration-200 bg-transparent border-none outline-none cursor-pointer"
              >
                {item.label}
              </button>
            ))}
            <button className="btn-primary" onClick={scrollToContact}>
              Get Started
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-[#0041c9] transition-colors duration-200"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-md rounded-lg shadow-lg p-4 mt-2">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => { scrollToContact(); setIsMenuOpen(false); }}
                className="block py-2 text-gray-700 hover:text-[#0041c9] font-medium transition-colors duration-200 bg-transparent border-none outline-none w-full text-left cursor-pointer"
              >
                {item.label}
              </button>
            ))}
            <button className="btn-primary w-full mt-4" onClick={() => { scrollToContact(); setIsMenuOpen(false); }}>
              Get Started
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;