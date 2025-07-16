import React from 'react';
import { ChevronRight, ClipboardCheck, Gem, Archive } from 'lucide-react';

const Hero = () => {
  const features = [
    {
      icon: <ClipboardCheck className="h-8 w-8 text-blue-600" />,
      title: "Advanced Medical Care",
      description: "State-of-the-art medical technology and experienced healthcare professionals"
    },
    {
      icon: <Gem className="h-8 w-8 text-blue-600" />,
      title: "Premium Healthcare",
      description: "Exceptional medical services with personalized patient care approach"
    },
    {
      icon: <Archive className="h-8 w-8 text-blue-600" />,
      title: "Comprehensive Services",
      description: "Full range of medical specialties and healthcare solutions under one roof"
    }
  ];

  const handleLearnMore = () => {
    const element = document.querySelector('#about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-600">
        <div className="absolute inset-0 bg-black/20"></div>
        <img 
          src="https://images.pexels.com/photos/236380/pexels-photo-236380.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
          alt="Medical facility"
          className="w-full h-full object-cover mix-blend-overlay"
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 pt-20">
        <div className="grid lg:grid-cols-3 gap-8 items-center">
          {/* Welcome Message */}
          <div className="lg:col-span-3 text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 animate-fade-in">
              WELCOME TO MEDILAB
            </h1>
            <p className="text-xl text-blue-100 animate-fade-in-delay">
              We are team of talented medical professionals providing exceptional healthcare
            </p>
          </div>

          {/* Why Choose Us Box */}
          <div className="lg:col-span-1">
            <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-2xl transform hover:scale-105 transition-transform duration-300">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Why Choose Medilab?</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Our commitment to excellence in healthcare combines cutting-edge medical technology 
                with compassionate care. We provide comprehensive medical services with a focus on 
                patient comfort and positive outcomes.
              </p>
              <button
                onClick={handleLearnMore}
                className="inline-flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors group"
              >
                <span>Learn More</span>
                <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Feature Cards */}
          <div className="lg:col-span-2 grid md:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white/90 backdrop-blur-sm rounded-xl p-6 text-center shadow-xl transform hover:scale-105 transition-all duration-300 hover:shadow-2xl"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">
                  {feature.title}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;