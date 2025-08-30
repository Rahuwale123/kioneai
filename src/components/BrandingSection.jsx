import React, { useState, useEffect } from 'react';

export const BrandingSection = () => {
  const [visibleTags, setVisibleTags] = useState(0);
  
  const brandKeywords = [
    "Futuristic",
    "Intelligent", 
    "Research-driven",
    "Innovative",
    "Scalable",
    "Digital-first",
    "Next-gen"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setVisibleTags(prev => {
        if (prev < brandKeywords.length) {
          return prev + 1;
        }
        return 0; // Reset animation
      });
    }, 600);

    return () => clearInterval(timer);
  }, [brandKeywords.length]);

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-slate-900 via-gray-900 to-slate-900 overflow-hidden">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-5xl font-bold text-white mb-4">
          Our DNA
        </h2>
        <p className="text-xl text-gray-300 mb-16 max-w-2xl mx-auto">
          The core attributes that define everything we create
        </p>
        
        <div className="flex flex-wrap justify-center gap-6">
          {brandKeywords.map((keyword, index) => (
            <div
              key={keyword}
              className={`
                px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold text-xl rounded-none
                transform transition-all duration-700 cursor-pointer
                hover:scale-110 hover:shadow-2xl hover:from-cyan-400 hover:to-blue-400
                ${index < visibleTags 
                  ? 'translate-y-0 opacity-100 rotate-0' 
                  : 'translate-y-8 opacity-0 rotate-3'
                }
              `}
              style={{
                transitionDelay: `${index * 100}ms`
              }}
            >
              {keyword}
              
              {/* Animated underline */}
              <div className="h-1 bg-white rounded-full mt-2 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
            </div>
          ))}
        </div>
        
        {/* Floating animation elements */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-cyan-400 rounded-full animate-pulse"
              style={{
                left: `${10 + Math.random() * 80}%`,
                top: `${20 + Math.random() * 60}%`,
                animationDelay: `${Math.random() * 4}s`,
                animationDuration: `${3 + Math.random() * 2}s`,
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};