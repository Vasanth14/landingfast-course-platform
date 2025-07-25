'use client';

import { Code, Palette, TrendingUp, ArrowRight, Clock, Users, Star } from 'lucide-react';

const Courses = () => {
  const courses = [
    {
      icon: Code,
      title: 'Fullstack Development',
      description: 'Master both frontend and backend technologies with React, Node.js, and modern databases.',
      duration: '6 Months',
      students: '5,000+',
      rating: 4.9,
      features: ['React & Next.js', 'Node.js & Express', 'MongoDB & PostgreSQL', 'Docker & AWS'],
      price: '$799',
      popular: true
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Create stunning user interfaces and experiences using Figma, Adobe XD, and design principles.',
      duration: '4 Months',
      students: '3,500+',
      rating: 4.8,
      features: ['Figma & Adobe XD', 'Design Systems', 'User Research', 'Prototyping'],
      price: '$599',
      popular: false
    },
    {
      icon: TrendingUp,
      title: 'Digital Marketing',
      description: 'Learn SEO, social media marketing, Google Ads, and analytics to grow businesses online.',
      duration: '3 Months',
      students: '2,800+',
      rating: 4.7,
      features: ['SEO & SEM', 'Social Media', 'Google Analytics', 'Content Strategy'],
      price: '$499',
      popular: false
    },
    {
      icon: Code,
      title: 'Java Programming',
      description: 'Build robust applications and backend systems with Java, Spring Boot, and modern frameworks.',
      duration: '4 Months',
      students: '2,200+',
      rating: 4.8,
      features: ['Java Basics', 'OOP', 'Spring Boot', 'REST APIs'],
      price: '$599',
      popular: false
    },
    {
      icon: Code,
      title: 'Python Programming',
      description: 'Learn Python for web, data science, automation, and AI with hands-on projects.',
      duration: '4 Months',
      students: '3,000+',
      rating: 4.9,
      features: ['Python Basics', 'Data Science', 'Flask & Django', 'Automation'],
      price: '$599',
      popular: false
    },
    {
      icon: Code,
      title: 'Selenium Automation',
      description: 'Automate web testing using Selenium, Python, and best QA practices.',
      duration: '2 Months',
      students: '1,200+',
      rating: 4.7,
      features: ['Selenium WebDriver', 'Python/Java', 'Test Automation', 'CI/CD Integration'],
      price: '$399',
      popular: false
    },
    {
      icon: Code,
      title: 'Software Testing',
      description: 'Master manual and automated testing, QA methodologies, and tools.',
      duration: '3 Months',
      students: '1,800+',
      rating: 4.8,
      features: ['Manual Testing', 'Automation', 'JIRA', 'Bug Tracking'],
      price: '$499',
      popular: false
    },
    {
      icon: Code,
      title: 'Cloud Computing',
      description: 'Get hands-on with AWS, Azure, and Google Cloud for modern cloud solutions.',
      duration: '4 Months',
      students: '2,500+',
      rating: 4.9,
      features: ['AWS', 'Azure', 'GCP', 'Cloud Architecture'],
      price: '$699',
      popular: false
    },
    {
      icon: Code,
      title: 'DevOps',
      description: 'Learn CI/CD, Docker, Kubernetes, and modern DevOps practices for scalable deployments.',
      duration: '3 Months',
      students: '2,000+',
      rating: 4.8,
      features: ['CI/CD', 'Docker', 'Kubernetes', 'Monitoring'],
      price: '$599',
      popular: false
    },
    // Add more trending courses as needed
  ];

  return (
    <section id="courses" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Choose Your <span className="text-gradient">Path</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our comprehensive courses are designed to take you from beginner to job-ready professional
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <div key={index} className="relative">
              {course.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-[#0041c9] to-[#1a57d6] text-white px-4 py-2 rounded-full text-sm font-semibold z-10">
                  Most Popular
                </div>
              )}

              <div className={`glass-effect rounded-2xl p-8 card-hover h-full ${course.popular ? 'ring-2 ring-[#0041c9] ring-opacity-50' : ''
                }`}>
                <div className="flex items-center justify-center mb-6">
                  <div className="bg-gradient-to-r from-[#0041c9] to-[#1a57d6] p-4 rounded-xl">
                    <course.icon className="h-8 w-8 text-white" />
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                  {course.title}
                </h3>

                <p className="text-gray-600 mb-6 text-center">
                  {course.description}
                </p>

                <div className="flex items-center justify-center space-x-6 mb-6">
                  <div className="flex items-center space-x-2">
                    <Clock className="h-4 w-4 text-gray-500" />
                    <span className="text-sm text-gray-600">{course.duration}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className="h-4 w-4 text-gray-500" />
                    <span className="text-sm text-gray-600">{course.students}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Star className="h-4 w-4 text-yellow-500 fill-current" />
                    <span className="text-sm text-gray-600">{course.rating}</span>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">What you'll learn:</h4>
                  <ul className="space-y-2">
                    {course.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-[#0041c9] rounded-full"></div>
                        <span className="text-sm text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                {/* 
                <div className="flex items-center justify-between mb-6">
                  <div className="text-3xl font-bold text-gray-900">{course.price}</div>
                  <div className="text-sm text-gray-500">One-time payment</div>
                </div> */}

                <div>
                  <a href="#contact-form" className="btn-primary w-full block text-center">
                    Enroll Now
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Need help choosing the right course?</p>
          <a href="#contact-form" className="btn-secondary">
            Get Free Consultation
          </a>
        </div>
      </div>
    </section>
  );
};

export default Courses;