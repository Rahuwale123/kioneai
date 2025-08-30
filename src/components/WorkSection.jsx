import React from 'react';
import { Card, CardContent } from './ui/card';
import { Microscope, Package, Handshake, ArrowRight } from 'lucide-react';

export const WorkSection = () => {
  const workPillars = [
    {
      icon: <Microscope className="h-12 w-12" />,
      title: "AI Research Lab (Online)",
      subtitle: "Exploring and inventing new AI technologies",
      points: [
        "Public experiments and research",
        "Open-source contributions", 
        "Innovation hub for AI breakthroughs",
        "Collaborative global research network"
      ],
      gradient: "from-emerald-50 to-teal-50"
    },
    {
      icon: <Package className="h-12 w-12" />,
      title: "In-House Products",
      subtitle: "Building SaaS, APIs, and intelligent platforms",
      points: [
        "AI interviewer systems",
        "Intelligent call agents",
        "Memory assistant platforms",
        "Domain-specific AI tools"
      ],
      gradient: "from-blue-50 to-indigo-50"
    },
    {
      icon: <Handshake className="h-12 w-12" />,
      title: "Custom Product Development", 
      subtitle: "Partnering with businesses to build next-gen AI solutions",
      points: [
        "Healthcare AI solutions",
        "SME automation tools",
        "Recruitment intelligence",
        "Growth automation systems"
      ],
      gradient: "from-purple-50 to-pink-50"
    }
  ];

  return (
    <section id="work" className="py-20 px-6 bg-gradient-to-br from-slate-50 to-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-slate-900 mb-8">What We Do</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Our work spans three core pillars, each designed to push the boundaries of AI technology and deliver real-world impact.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {workPillars.map((pillar, index) => (
            <Card 
              key={index}
              className={`p-8 border-0 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-3 bg-gradient-to-br ${pillar.gradient} group`}
            >
              <CardContent className="p-0">
                <div className="text-cyan-600 mb-6 group-hover:scale-110 transition-transform duration-300">
                  {pillar.icon}
                </div>
                
                <h3 className="text-2xl font-bold text-slate-900 mb-3">
                  {pillar.title}
                </h3>
                
                <p className="text-lg text-slate-700 mb-6 font-medium">
                  {pillar.subtitle}
                </p>
                
                <ul className="space-y-3">
                  {pillar.points.map((point, pointIndex) => (
                    <li key={pointIndex} className="flex items-start gap-3 text-slate-600">
                      <ArrowRight className="h-4 w-4 text-cyan-500 mt-1 flex-shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};