'use client';

import { Zap, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';
import Link from 'next/link';

const scrollToContact = () => {
  const el = document.getElementById('contact-form');
  if (el) el.scrollIntoView({ behavior: 'smooth' });
};

const Footer = () => {
  const quickLinks = [
    { name: 'Courses', href: '#courses' },
    { name: 'Learning Formats', href: '#formats' },
    { name: 'Success Stories', href: '#success' },
    { name: 'Blog', href: '#blog' },
    { name: 'Contact', href: '#contact' }
  ];

  const courses = [
    { name: 'Fullstack Development', href: '/courses/fullstack' },
    { name: 'UI/UX Design', href: '/courses/design' },
    { name: 'Digital Marketing', href: '/courses/marketing' },
    { name: 'Data Science', href: '/courses/data-science' },
    { name: 'Cloud Computing', href: '/courses/cloud' }
  ];

  const company = [
    { name: 'About Us', href: '/about' },
    { name: 'Careers', href: '/careers' },
    { name: 'Press Kit', href: '/press' },
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' }
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Youtube, href: '#', label: 'YouTube' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-2 mb-6">
                <div className="bg-gradient-to-r from-[#0041c9] to-[#1a57d6] p-2 rounded-lg">
                  <Zap className="h-6 w-6 text-white" />
                </div>
                <span className="text-2xl font-bold">LandingFast</span>
              </div>
              <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                Accelerate your tech career with our comprehensive courses and expert mentorship. 
                Join thousands of successful graduates who've transformed their lives through technology.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-[#0041c9]" />
                  <span className="text-gray-300">guide@landingfast.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-[#0041c9]" />
                  <span className="text-gray-300">+91 9940722428</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-[#0041c9]" />
                  <span className="text-gray-300">Madurai, Tamil Nadu</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-semibold mb-6">Quick Links</h3>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <button 
                      onClick={scrollToContact}
                      className="text-gray-300 hover:text-white transition-colors duration-200 bg-transparent border-none outline-none cursor-pointer w-full text-left"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Courses */}
            <div>
              <h3 className="text-xl font-semibold mb-6">Courses</h3>
              <ul className="space-y-3">
                {courses.map((course) => (
                  <li key={course.name}>
                    <Link 
                      href={course.href} 
                      className="text-gray-300 hover:text-white transition-colors duration-200"
                    >
                      {course.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-xl font-semibold mb-6">Company</h3>
              <ul className="space-y-3">
                {company.map((item) => (
                  <li key={item.name}>
                    <Link 
                      href={item.href} 
                      className="text-gray-300 hover:text-white transition-colors duration-200"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-300">
              © 2025 LandingFast. All rights reserved.
            </div>
            <div className="flex items-center space-x-6">
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;