'use client';

import { Code, Palette, TrendingUp, Target, Globe, ArrowRight, Briefcase } from 'lucide-react';

const CareerPaths = () => {
  const careers = [
    {
      icon: Code,
      title: 'Full Stack Developer',
      description: 'Build complete web applications from frontend to backend, creating seamless digital experiences that power modern businesses.',
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50',
      iconBg: 'bg-blue-100',
      iconColor: 'text-blue-600',
      image: 'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1',
      roles: [
        'Frontend Developer',
        'Backend Developer',
        'Full Stack Engineer',
        'Software Architect',
        'Technical Lead'
      ],
      businessImpact: [
        'Build scalable web applications that serve millions of users',
        'Optimize performance to reduce server costs by 40-60%',
        'Implement features that increase user engagement and retention',
        'Automate processes saving companies thousands of hours annually'
      ],
      worldImpact: [
        'Create platforms that connect people globally',
        'Build educational tools that democratize learning',
        'Develop healthcare applications that save lives',
        'Design fintech solutions that provide financial inclusion'
      ]
    },
    {
      icon: Palette,
      title: 'UI/UX Designer',
      description: 'Create intuitive and beautiful user experiences that delight users and drive business success through thoughtful design.',
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50',
      iconBg: 'bg-purple-100',
      iconColor: 'text-purple-600',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1',
      roles: [
        'UI Designer',
        'UX Designer',
        'Product Designer',
        'Design Systems Lead',
        'Head of Design'
      ],
      businessImpact: [
        'Improve user experience leading to 25-40% increase in conversions',
        'Reduce customer support tickets through intuitive design',
        'Increase user retention rates by 30-50%',
        'Create brand consistency that builds customer trust and loyalty'
      ],
      worldImpact: [
        'Make technology accessible to people with disabilities',
        'Design interfaces that bridge cultural and language barriers',
        'Create educational apps that make learning more engaging',
        'Design healthcare interfaces that improve patient outcomes'
      ]
    },
    {
      icon: TrendingUp,
      title: 'Digital Marketer',
      description: 'Drive growth through data-driven marketing strategies, connecting brands with their audiences in meaningful ways.',
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50',
      iconBg: 'bg-green-100',
      iconColor: 'text-green-600',
      image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1',
      roles: [
        'Digital Marketing Specialist',
        'SEO/SEM Manager',
        'Social Media Manager',
        'Growth Hacker',
        'Marketing Director'
      ],
      businessImpact: [
        'Generate 300-500% ROI through targeted advertising campaigns',
        'Increase organic traffic by 200-400% through SEO strategies',
        'Build brand awareness that drives long-term customer value',
        'Create viral campaigns that reach millions of potential customers'
      ],
      worldImpact: [
        'Promote sustainable products and eco-friendly practices',
        'Market educational content that spreads knowledge globally',
        'Support small businesses in reaching wider audiences',
        'Raise awareness for important social and environmental causes'
      ]
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Your <span className="text-gradient">Career Journey</span> Awaits
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the exciting career paths and global impact you can make in tech
          </p>
        </div>

        <div className="space-y-20">
          {careers.map((career, index) => (
            <div key={index} className="glass-effect rounded-3xl overflow-hidden card-hover">
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-0 ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                {/* Content Column */}
                <div className={`p-8 md:p-12 ${career.bgColor} ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="flex items-center space-x-4 mb-6">
                    <div className={`${career.iconBg} p-4 rounded-2xl`}>
                      <career.icon className={`h-8 w-8 ${career.iconColor}`} />
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-gray-900">{career.title}</h3>
                    </div>
                  </div>

                  <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                    {career.description}
                  </p>

                  {/* Career Roles */}
                  <div className="mb-8">
                    <h4 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                      <Briefcase className="h-5 w-5 mr-2" />
                      Career Opportunities
                    </h4>
                    <div className="flex flex-wrap gap-3">
                      {career.roles.map((role, idx) => (
                        <div key={idx} className="bg-white rounded-full px-4 py-2 shadow-sm border border-gray-200">
                          <span className="text-sm font-medium text-gray-700">{role}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Business Impact */}
                  <div className="mb-8">
                    <h4 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                      <Target className="h-5 w-5 mr-2" />
                      Business Impact
                    </h4>
                    <div className="space-y-3">
                      {career.businessImpact.slice(0, 2).map((impact, idx) => (
                        <div key={idx} className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-[#0041c9] rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-700">{impact}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* World Impact */}
                  <div className="mb-8">
                    <h4 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                      <Globe className="h-5 w-5 mr-2" />
                      Global Impact
                    </h4>
                    <div className="space-y-3">
                      {career.worldImpact.slice(0, 2).map((impact, idx) => (
                        <div key={idx} className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-700">{impact}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <button className="btn-primary group">
                    Explore {career.title} Course
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                  </button>
                </div>

                {/* Image Column */}
                <div className={`relative ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <div className="h-64 lg:h-full relative overflow-hidden">
                    <img 
                      src={career.image} 
                      alt={career.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    
                    {/* Floating Stats */}
                    {/* <div className="absolute bottom-6 left-6 right-6">
                      <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                        <div className="grid grid-cols-2 gap-4 text-center">
                          <div>
                            <div className="text-2xl font-bold text-gray-900">
                              {index === 0 ? '95%' : index === 1 ? '40%' : '300%'}
                            </div>
                            <div className="text-sm text-gray-600">
                              {index === 0 ? 'Job Placement' : index === 1 ? 'UX Improvement' : 'ROI Increase'}
                            </div>
                          </div>
                          <div>
                            <div className="text-2xl font-bold text-gray-900">
                              {index === 0 ? '$85k' : index === 1 ? '$75k' : '$70k'}
                            </div>
                            <div className="text-sm text-gray-600">Avg. Starting Salary</div>
                          </div>
                        </div>
                      </div>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <div className="bg-gradient-to-r from-[#0041c9] to-[#1a57d6] rounded-3xl p-8 md:p-12">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Choose Your Path to Success
            </h3>
            <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
              Every expert was once a beginner. Start your journey today and join thousands who've transformed their careers with LandingFast.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-[#0041c9] hover:bg-gray-100 font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg">
                Book Free Consultation
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-[#0041c9] font-semibold py-4 px-8 rounded-xl transition-all duration-300">
                Compare All Courses
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerPaths;