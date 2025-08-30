import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { label: 'About', sectionId: 'about' },
    { label: 'What We Do', sectionId: 'work' },
    { label: 'Why KioneAI', sectionId: 'why' },
    { label: 'Contact', sectionId: 'contact' }
  ];

  return (
    <header 
      className={`
        fixed top-0 w-full z-50 transition-all duration-300
        ${isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
        }
      `}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div 
          className="flex items-center gap-3 cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <img 
            src="https://customer-assets.emergentagent.com/job_next-gen-tech/artifacts/lpia5z0e_a-flat-vector-logo-design-featuring-an-a_S9Wz4HZZS4m5oP6xC-dJLg_wSDP5BtSSNW2s6SoqCAlWA.jpeg"
            alt="KioneAI Logo"
            className="h-10 w-10 object-contain hover:scale-110 transition-transform duration-300"
          />
          <span className={`
            text-2xl font-bold transition-colors duration-300
            ${isScrolled ? 'text-slate-900' : 'text-white'}
          `}>
            KioneAI
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item, index) => (
            <button
              key={index}
              onClick={() => scrollToSection(item.sectionId)}
              className={`
                font-medium transition-all duration-300 hover:scale-105
                ${isScrolled 
                  ? 'text-slate-700 hover:text-cyan-600' 
                  : 'text-white/90 hover:text-cyan-300'
                }
              `}
            >
              {item.label}
            </button>
          ))}
          
          <button
            onClick={() => scrollToSection('contact')}
            className={`
              px-6 py-2 font-semibold rounded-none transition-all duration-300 hover:scale-105
              ${isScrolled
                ? 'bg-cyan-500 text-white hover:bg-cyan-600'
                : 'bg-white text-slate-900 hover:bg-gray-100'
              }
            `}
          >
            Get Started
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className={`
            md:hidden p-2 rounded-none transition-colors duration-300
            ${isScrolled ? 'text-slate-900' : 'text-white'}
          `}
        >
          {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-slate-200">
          <div className="px-6 py-4 space-y-4">
            {navItems.map((item, index) => (
              <button
                key={index}
                onClick={() => scrollToSection(item.sectionId)}
                className="block w-full text-left text-slate-700 hover:text-cyan-600 font-medium py-2 transition-colors duration-300"
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => scrollToSection('contact')}
              className="w-full bg-cyan-500 text-white py-3 rounded-none font-semibold hover:bg-cyan-600 transition-colors duration-300"
            >
              Get Started
            </button>
          </div>
        </div>
      )}
    </header>
  );
};