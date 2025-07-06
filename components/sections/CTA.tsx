'use client';

import { ArrowRight, CheckCircle, Users, Award, Clock } from 'lucide-react';

const CTA = () => {
  const benefits = [
    { icon: Users, text: "Join 10,000+ successful graduates" },
    { icon: Award, text: "Industry-recognized certifications" },
    { icon: Clock, text: "Flexible learning schedules" },
    { icon: CheckCircle, text: "Job placement assistance" }
  ];

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-[#0041c9] via-[#1a57d6] to-[#0041c9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Ready to Transform
            <br />
            Your Career?
          </h2>
          <p className="text-xl md:text-2xl text-blue-100 mb-12 max-w-4xl mx-auto">
            Don't wait for the perfect moment. Start your journey to a rewarding tech career today.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-3 justify-center md:justify-start">
                <div className="bg-white/20 backdrop-blur-sm p-2 rounded-lg">
                  <benefit.icon className="h-5 w-5 text-white" />
                </div>
                <span className="text-white text-sm font-medium">{benefit.text}</span>
              </div>
            ))}
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-12 max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
              Get Started Today
            </h3>
            <p className="text-blue-100 mb-8 text-lg">
              Book a free consultation call with our career advisors and find the perfect course for your goals.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button className="bg-white text-[#0041c9] hover:bg-gray-100 font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl group">
                Book Free Consultation
                <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-200 group-hover:translate-x-1" />
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-[#0041c9] font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105">
                View All Courses
              </button>
            </div>

            <div className="mt-8 pt-8 border-t border-white/20">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-white mb-2">24/7</div>
                  <div className="text-blue-100 text-sm">Learning Support</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white mb-2">30 Days</div>
                  <div className="text-blue-100 text-sm">Money-back Guarantee</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white mb-2">Lifetime</div>
                  <div className="text-blue-100 text-sm">Access to Materials</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;