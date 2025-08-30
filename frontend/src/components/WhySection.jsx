import React from 'react';
import { Badge } from './ui/badge';

export const WhySection = () => {
  const differentiators = [
    {
      title: "Online-first, Global-first",
      description: "Agile and borderless approach to talent and research collaboration",
      highlight: "Borderless Innovation"
    },
    {
      title: "R&D-Driven, Not Service-Driven", 
      description: "Core focus on innovation and product development over traditional client services",
      highlight: "Innovation Focus"
    },
    {
      title: "Products that Scale + Client Solutions",
      description: "Dual capability to build scalable platforms and bespoke client solutions",
      highlight: "Scalable Impact"
    }
  ];

  return (
    <section id="why" className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto text-center">
        {/* Main Statement */}
        <div className="mb-16">
          <Badge className="bg-cyan-100 text-cyan-800 px-6 py-2 text-lg mb-8 rounded-none">
            Our Differentiator
          </Badge>
          <h2 className="text-6xl font-bold text-slate-900 mb-8 leading-tight">
            We don't follow AI trends —<br />
            <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
              we create them
            </span>
          </h2>
        </div>

        {/* Differentiators Grid */}
        <div className="grid md:grid-cols-3 gap-12">
          {differentiators.map((item, index) => (
            <div 
              key={index}
              className="group p-8 rounded-none bg-gradient-to-br from-slate-50 to-gray-50 hover:from-cyan-50 hover:to-blue-50 transition-all duration-500 hover:shadow-lg border border-transparent hover:border-cyan-200"
            >
              <Badge className="bg-cyan-600 text-white mb-6 px-4 py-2 rounded-none">
                {item.highlight}
              </Badge>
              
              <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-cyan-900 transition-colors">
                {item.title}
              </h3>
              
              <p className="text-slate-600 leading-relaxed text-lg">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Statement */}
        <div className="mt-16 p-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-none text-white">
          <h3 className="text-3xl font-bold mb-4">
            The Future is Built Here
          </h3>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            While others adapt to change, we engineer it. Join us in shaping the next generation of AI technology.
          </p>
        </div>
      </div>
    </section>
  );
};