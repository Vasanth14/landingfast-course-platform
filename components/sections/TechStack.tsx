'use client';

import { useEffect, useState } from 'react';

const TechStack = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const techStacks = [
    // Frontend Technologies
    'React', 'Next.js', 'Vue.js', 'Angular', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Bootstrap',
    // Backend Technologies
    'Node.js', 'Express.js', 'Python', 'Django', 'Flask', 'PHP', 'Laravel', 'Ruby on Rails', 'Java', 'Spring Boot',
    // Databases
    'MongoDB', 'PostgreSQL', 'MySQL', 'Redis', 'Firebase', 'Supabase', 'GraphQL', 'Prisma',
    // Cloud & DevOps
    'AWS', 'Google Cloud', 'Azure', 'Docker', 'Kubernetes', 'Vercel', 'Netlify', 'GitHub Actions', 'Jenkins',
    // Design Tools
    'Figma', 'Adobe XD', 'Sketch', 'Adobe Photoshop', 'Adobe Illustrator', 'Framer', 'Principle', 'InVision',
    // Marketing Tools
    'Google Analytics', 'Google Ads', 'Facebook Ads', 'HubSpot', 'Mailchimp', 'Hootsuite', 'Canva', 'WordPress',
    // Mobile Development
    'React Native', 'Flutter', 'Swift', 'Kotlin', 'Ionic', 'Xamarin',
    // Testing & Quality
    'Jest', 'Cypress', 'Selenium', 'Postman', 'Insomnia',
    // Version Control
    'Git', 'GitHub', 'GitLab', 'Bitbucket'
  ];

  // Duplicate the array to create seamless infinite scroll
  const duplicatedStacks = [...techStacks, ...techStacks];

  return (
    <section className="py-16 bg-gradient-to-r from-gray-900 via-[#0041c9] to-gray-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Master Industry-Leading <span className="text-blue-200">Technologies</span>
          </h2>
          <p className="text-blue-100 text-lg max-w-3xl mx-auto">
            Learn the most in-demand tools and technologies used by top companies worldwide
          </p>
        </div>

        {/* Infinite Ticker */}
        <div className="relative">
          <div className="flex overflow-hidden">
            <div className="flex animate-scroll whitespace-nowrap">
              {duplicatedStacks.map((tech, index) => (
                <div
                  key={index}
                  className="inline-flex items-center mx-4 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                  <span className="text-white font-medium text-sm md:text-base whitespace-nowrap">
                    {tech}
                  </span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Gradient overlays for smooth fade effect */}
          <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-gray-900 to-transparent pointer-events-none"></div>
          <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-gray-900 to-transparent pointer-events-none"></div>
        </div>

        <div className="text-center mt-12">
          <p className="text-blue-100 text-lg mb-6">
            And many more cutting-edge technologies added regularly!
          </p>
          <button className="bg-white mx-auto text-[#0041c9] hover:bg-gray-100 font-semibold py-3 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg">
            Explore All Courses
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-scroll {
          animation: scroll 200s linear infinite;
        }
        
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default TechStack;