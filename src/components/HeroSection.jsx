import React from 'react';
import Spline from '@splinetool/react-spline';
import { Button } from './ui/button';
import { ArrowDown } from 'lucide-react';

export const HeroSection = ({ onGetInTouchClick }) => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
    if (onGetInTouchClick) onGetInTouchClick();
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-cyan-50">
      {/* Background 3D Animation */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full flex items-center justify-center">
          <div style={{ width: "800px", height: "800px", overflow: "visible", position: "relative" }}>
            <Spline scene="https://prod.spline.design/NbVmy6DPLhY-5Lvg/scene.splinecode" />
          </div>
        </div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* Logo */}
        <div className="mb-12 flex justify-center">
          <img 
            src="https://customer-assets.emergentagent.com/job_next-gen-tech/artifacts/lpia5z0e_a-flat-vector-logo-design-featuring-an-a_S9Wz4HZZS4m5oP6xC-dJLg_wSDP5BtSSNW2s6SoqCAlWA.jpeg"
            alt="KioneAI Logo"
            className="h-20 w-20 object-contain hover:scale-110 transition-transform duration-500"
          />
        </div>
        
        {/* Main Headline */}
        <h1 className="text-6xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-slate-900 via-cyan-900 to-slate-900 bg-clip-text text-transparent leading-tight">
          Inventing the Future of AI
        </h1>
        
        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-slate-600 mb-12 leading-relaxed max-w-4xl mx-auto">
          KioneAI is an online-first research lab and product company, building next-gen AI technologies and intelligent systems for businesses and the future.
        </p>
        
        {/* CTA Button */}
        <Button 
          onClick={scrollToContact}
          className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold px-12 py-6 text-lg rounded-none border-0 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
        >
          Get in Touch
          <ArrowDown className="ml-3 h-5 w-5 animate-bounce" />
        </Button>
      </div>

      {/* Animated particles overlay */}
      <div className="absolute inset-0 pointer-events-none z-5">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>
    </section>
  );
};