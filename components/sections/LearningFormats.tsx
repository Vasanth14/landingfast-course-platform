'use client';

import { Monitor, Users, Video, MapPin, Clock, Calendar, Globe, Coffee } from 'lucide-react';

const LearningFormats = () => {
  const formats = [
    // {
    //   icon: Monitor,
    //   title: 'Online Self-Paced',
    //   description: 'Learn at your own pace with lifetime access to course materials',
    //   features: ['24/7 Access', 'Downloadable Resources', 'Progress Tracking', 'Community Support'],
    //   price: 'From Rs.9999',
    //   duration: 'Lifetime Access',
    //   color: 'from-blue-500 to-blue-600'
    // },
    {
      icon: Video,
      title: 'Live Virtual Classes',
      description: 'Interactive sessions with expert instructors and real-time feedback',
      features: ['Live Q&A', 'Screen Sharing', 'Group Projects', 'Recorded Sessions'],
      price: 'From Rs.5999',
      duration: '3-6 Months',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Users,
      title: 'Workshops',
      description: 'Intensive weekend workshops focused on specific skills and projects',
      features: ['Hands-on Projects', 'Expert Mentorship', 'Networking', 'Certificate'],
      price: 'From Rs.1999',
      duration: '2-3 Days',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: MapPin,
      title: 'Offline Classes',
      description: 'Traditional classroom experience with face-to-face interaction',
      features: ['In-Person Support', 'Lab Access', 'Peer Learning', 'Job Placement'],
      price: 'From Rs.999',
      duration: '4-8 Months',
      color: 'from-orange-500 to-orange-600'
    }
  ];

  const benefits = [
    {
      icon: Globe,
      title: 'Global Access',
      description: 'Learn from anywhere in the world with our flexible formats'
    },
    {
      icon: Clock,
      title: 'Flexible Schedule',
      description: 'Choose timings that work best for your lifestyle'
    },
    {
      icon: Coffee,
      title: 'Industry Experts',
      description: 'Learn from professionals working at top tech companies'
    },
    {
      icon: Calendar,
      title: 'Regular Cohorts',
      description: 'New batches starting every month across all formats'
    }
  ];

  return (
    <section id="formats" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Learn Your <span className="text-gradient">Way</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the learning format that best fits your schedule and learning style
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {formats.map((format, index) => (
            <div key={index} className="glass-effect rounded-2xl p-6 card-hover">
              <div className="flex items-center justify-center mb-4">
                <div className={`bg-gradient-to-r ${format.color} p-3 rounded-xl`}>
                  <format.icon className="h-6 w-6 text-white" />
                </div>
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">
                {format.title}
              </h3>

              <p className="text-gray-600 mb-4 text-center text-sm">
                {format.description}
              </p>

              <div className="mb-4">
                <ul className="space-y-2">
                  {format.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-[#0041c9] rounded-full"></div>
                      <span className="text-sm text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border-t pt-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-gray-500">Duration</span>
                  <span className="text-sm font-semibold text-gray-900">{format.duration}</span>
                </div>
                {/* <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">Price</span>
                  <span className="text-lg font-bold text-[#0041c9]">{format.price}</span>
                </div> */}
              </div>
            </div>
          ))}
        </div>

        {/* Benefits Section */}
        <div className="bg-gradient-to-r from-[#0041c9] to-[#1a57d6] rounded-3xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose LandingFast?
            </h3>
            <p className="text-blue-100 text-lg max-w-2xl mx-auto">
              We're committed to providing the best learning experience across all formats
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="flex items-center justify-center mb-4">
                  <div className="bg-white/20 backdrop-blur-sm p-3 rounded-xl">
                    <benefit.icon className="h-6 w-6 text-white" />
                  </div>
                </div>
                <h4 className="text-xl font-semibold text-white mb-2">{benefit.title}</h4>
                <p className="text-blue-100 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LearningFormats;