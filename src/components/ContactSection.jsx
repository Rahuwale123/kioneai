import React, { useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { MessageCircle, Mail, Linkedin, Github, Twitter } from 'lucide-react';

export const ContactSection = () => {
  const [hoveredButton, setHoveredButton] = useState(null);

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/91820594908', '_blank');
  };

  const handleEmailClick = () => {
    window.open('mailto:mail.kioneai@gmail.com', '_blank');
  };

  const socialLinks = [
    { 
      icon: <Linkedin className="h-6 w-6" />, 
      label: "LinkedIn",
      url: "#",
      color: "hover:text-blue-600"
    },
    { 
      icon: <Github className="h-6 w-6" />, 
      label: "GitHub",
      url: "#",
      color: "hover:text-gray-900"
    },
    { 
      icon: <Twitter className="h-6 w-6" />, 
      label: "Twitter",
      url: "#",
      color: "hover:text-blue-400"
    }
  ];

  return (
    <section id="contact" className="py-20 px-6 bg-gradient-to-br from-gray-50 to-slate-100">
      <div className="max-w-4xl mx-auto text-center">
        {/* Header */}
        <div className="mb-16">
          <h2 className="text-5xl font-bold text-slate-900 mb-6">
            Let's Build the Future Together
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Ready to revolutionize your business with next-gen AI? Let's start the conversation.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* WhatsApp Contact */}
          <Card className="p-8 border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white group hover:bg-green-50">
            <CardContent className="p-0 text-center">
              <div className="text-green-500 mb-6 flex justify-center group-hover:scale-110 transition-transform duration-300">
                <MessageCircle className="h-16 w-16" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                WhatsApp
              </h3>
              <p className="text-slate-600 mb-6">
                Get instant responses and quick consultations
              </p>
              <Button
                onClick={handleWhatsAppClick}
                onMouseEnter={() => setHoveredButton('whatsapp')}
                onMouseLeave={() => setHoveredButton(null)}
                className={`
                  bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-3 rounded-none
                  transform transition-all duration-300
                  ${hoveredButton === 'whatsapp' ? 'scale-105 shadow-lg' : ''}
                `}
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Chat Now
              </Button>
            </CardContent>
          </Card>

          {/* Email Contact */}
          <Card className="p-8 border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white group hover:bg-blue-50">
            <CardContent className="p-0 text-center">
              <div className="text-blue-500 mb-6 flex justify-center group-hover:scale-110 transition-transform duration-300">
                <Mail className="h-16 w-16" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                Email
              </h3>
              <p className="text-slate-600 mb-6">
                Send us detailed project requirements
              </p>
              <Button
                onClick={handleEmailClick}
                onMouseEnter={() => setHoveredButton('email')}
                onMouseLeave={() => setHoveredButton(null)}
                className={`
                  bg-blue-500 hover:bg-blue-600 text-white font-semibold px-8 py-3 rounded-none
                  transform transition-all duration-300
                  ${hoveredButton === 'email' ? 'scale-105 shadow-lg' : ''}
                `}
              >
                <Mail className="mr-2 h-5 w-5" />
                Send Email
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Social Links */}
        <div className="border-t border-slate-200 pt-12">
          <h3 className="text-2xl font-semibold text-slate-900 mb-8">
            Connect With Us
          </h3>
          <div className="flex justify-center gap-8">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                className={`
                  p-4 bg-white rounded-full shadow-md hover:shadow-lg
                  text-slate-600 ${social.color} 
                  transform hover:scale-110 transition-all duration-300
                  border border-slate-200 hover:border-current
                `}
                aria-label={social.label}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 pt-12 border-t border-slate-200">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-4">
              <img 
                src="https://customer-assets.emergentagent.com/job_next-gen-tech/artifacts/lpia5z0e_a-flat-vector-logo-design-featuring-an-a_S9Wz4HZZS4m5oP6xC-dJLg_wSDP5BtSSNW2s6SoqCAlWA.jpeg"
                alt="KioneAI Logo"
                className="h-12 w-12 object-contain"
              />
              <span className="text-xl font-bold text-slate-900">KioneAI</span>
            </div>
            <p className="text-slate-600">
              © 2025 KioneAI. Inventing the Future of AI.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};