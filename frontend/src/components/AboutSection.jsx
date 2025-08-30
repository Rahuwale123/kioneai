import React from 'react';
import { Card, CardContent } from './ui/card';
import { Zap, Globe, Rocket, Target, Brain } from 'lucide-react';

export const AboutSection = () => {
  const principles = [
    {
      icon: <Brain className="h-8 w-8" />,
      title: "Innovation First",
      description: "Groundbreaking research and development at the forefront of AI"
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Online-First Research Lab", 
      description: "Remote and globally collaborative operational model"
    },
    {
      icon: <Rocket className="h-8 w-8" />,
      title: "Build & Ship",
      description: "Creating and launching tangible products that matter"
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "Dual Focus",
      description: "In-house products and custom solutions for clients"
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Future Over Present",
      description: "Dedicated to long-term technological advancement"
    }
  ];

  return (
    <section id="about" className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Introduction */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-slate-900 mb-8">About KioneAI</h2>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
            We are a cutting-edge AI research lab and product company, dedicated to creating the next generation of artificial intelligence technologies that will reshape how humans interact with the digital world.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <Card className="p-8 border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-gradient-to-br from-cyan-50 to-blue-50">
            <CardContent className="p-0">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Mission</h3>
              <p className="text-lg text-slate-700 leading-relaxed">
                To invent and build next-generation AI technologies that reshape how people and businesses interact with the digital world.
              </p>
            </CardContent>
          </Card>
          
          <Card className="p-8 border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-gradient-to-br from-indigo-50 to-purple-50">
            <CardContent className="p-0">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Vision</h3>
              <p className="text-lg text-slate-700 leading-relaxed">
                To become the world's leading online AI research lab and product company, driving the future of human-AI collaboration.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Core Principles */}
        <div className="text-center mb-12">
          <h3 className="text-4xl font-bold text-slate-900 mb-8">Core Principles</h3>
        </div>
        
        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8">
          {principles.map((principle, index) => (
            <Card 
              key={index}
              className="p-6 border-0 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-2 bg-white"
            >
              <CardContent className="p-0 text-center">
                <div className="text-cyan-600 mb-4 flex justify-center">
                  {principle.icon}
                </div>
                <h4 className="text-lg font-semibold text-slate-900 mb-3">
                  {principle.title}
                </h4>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {principle.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};