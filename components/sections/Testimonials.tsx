'use client';

import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Alex Johnson",
      role: "Full Stack Developer at Microsoft",
      image: "https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1",
      content: "LandingFast transformed my career completely. The instructors are industry experts and the curriculum is perfectly designed for real-world applications. I landed my dream job within 3 months!",
      rating: 5
    },
    {
      name: "Maria Garcia",
      role: "UX Designer at Adobe",
      image: "https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1",
      content: "As a career switcher, I was nervous about learning design from scratch. The mentorship program and hands-on projects gave me confidence. Now I'm designing products used by millions!",
      rating: 5
    },
    {
      name: "David Kim",
      role: "Digital Marketing Manager at Spotify",
      image: "https://images.pexels.com/photos/3756681/pexels-photo-3756681.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1",
      content: "The digital marketing course is incredibly comprehensive. From SEO to social media strategy, everything is covered with practical examples. My ROI campaigns improved by 300%!",
      rating: 5
    },
    {
      name: "Sophie Chen",
      role: "Software Engineer at Tesla",
      image: "https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1",
      content: "The live coding sessions and project-based learning approach made complex concepts easy to understand. The job placement support was exceptional - they helped me negotiate my salary too!",
      rating: 5
    },
    {
      name: "James Wilson",
      role: "Product Designer at Airbnb",
      image: "https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1",
      content: "What sets LandingFast apart is their focus on current industry trends. The design system course alone was worth the entire program. Highly recommend to anyone serious about their career!",
      rating: 5
    },
    {
      name: "Rachel Thompson",
      role: "Marketing Director at Uber",
      image: "https://images.pexels.com/photos/3756681/pexels-photo-3756681.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1",
      content: "The flexibility of online learning combined with the quality of instruction is unmatched. I could learn while working full-time and still got personalized attention from instructors.",
      rating: 5
    }
  ];

  return (
    <section id="success" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            What Our <span className="text-gradient">Students</span> Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join thousands of successful graduates who've transformed their careers with LandingFast
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="glass-effect rounded-2xl p-8 card-hover">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>

              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>

              <div className="relative">
                <Quote className="absolute top-0 left-0 h-6 w-6 text-[#0041c9] opacity-50" />
                <p className="text-gray-600 pl-8 leading-relaxed">
                  {testimonial.content}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-[#0041c9] to-[#1a57d6] rounded-2xl p-8 inline-block">
            <div className="flex items-center justify-center space-x-8 text-white">
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">4.9/5</div>
                <div className="text-sm">Average Rating</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">10,000+</div>
                <div className="text-sm">Happy Students</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">95%</div>
                <div className="text-sm">Success Rate</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;