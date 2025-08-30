// Mock data for KioneAI website
// This file contains all the static content and mock interactions for the frontend

export const mockData = {
  // Company Information
  company: {
    name: "KioneAI",
    tagline: "Inventing the Future of AI",
    description: "KioneAI is an online-first research lab and product company, building next-gen AI technologies and intelligent systems for businesses and the future.",
    logo: "https://customer-assets.emergentagent.com/job_next-gen-tech/artifacts/lpia5z0e_a-flat-vector-logo-design-featuring-an-a_S9Wz4HZZS4m5oP6xC-dJLg_wSDP5BtSSNW2s6SoqCAlWA.jpeg"
  },

  // Mission & Vision
  mission: "To invent and build next-generation AI technologies that reshape how people and businesses interact with the digital world.",
  vision: "To become the world's leading online AI research lab and product company, driving the future of human-AI collaboration.",

  // Core Principles
  principles: [
    {
      title: "Innovation First",
      description: "Groundbreaking research and development at the forefront of AI",
      icon: "brain"
    },
    {
      title: "Online-First Research Lab",
      description: "Remote and globally collaborative operational model",
      icon: "globe"
    },
    {
      title: "Build & Ship",
      description: "Creating and launching tangible products that matter",
      icon: "rocket"
    },
    {
      title: "Dual Focus",
      description: "In-house products and custom solutions for clients",
      icon: "target"
    },
    {
      title: "Future Over Present", 
      description: "Dedicated to long-term technological advancement",
      icon: "zap"
    }
  ],

  // Work Pillars
  workPillars: [
    {
      title: "AI Research Lab (Online)",
      subtitle: "Exploring and inventing new AI technologies",
      points: [
        "Public experiments and research",
        "Open-source contributions",
        "Innovation hub for AI breakthroughs", 
        "Collaborative global research network"
      ]
    },
    {
      title: "In-House Products",
      subtitle: "Building SaaS, APIs, and intelligent platforms",
      points: [
        "AI interviewer systems",
        "Intelligent call agents",
        "Memory assistant platforms",
        "Domain-specific AI tools"
      ]
    },
    {
      title: "Custom Product Development",
      subtitle: "Partnering with businesses to build next-gen AI solutions", 
      points: [
        "Healthcare AI solutions",
        "SME automation tools",
        "Recruitment intelligence",
        "Growth automation systems"
      ]
    }
  ],

  // Differentiators
  differentiators: [
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
  ],

  // Brand Keywords
  brandKeywords: [
    "Futuristic",
    "Intelligent",
    "Research-driven", 
    "Innovative",
    "Scalable",
    "Digital-first",
    "Next-gen"
  ],

  // Contact Information
  contact: {
    whatsapp: "+91820594908",
    email: "mail.kioneai@gmail.com",
    socialLinks: [
      { platform: "LinkedIn", url: "#", icon: "linkedin" },
      { platform: "GitHub", url: "#", icon: "github" },
      { platform: "Twitter", url: "#", icon: "twitter" }
    ]
  },

  // Interactive Elements Mock Functions
  interactions: {
    // Mock smooth scroll function
    scrollToSection: (sectionId) => {
      console.log(`Mock: Scrolling to section ${sectionId}`);
      // In real implementation, this would be handled by the component
      return true;
    },

    // Mock WhatsApp integration
    openWhatsApp: () => {
      console.log(`Mock: Opening WhatsApp to ${mockData.contact.whatsapp}`);
      // In real implementation: window.open(`https://wa.me/${phone}`, '_blank');
      return true;
    },

    // Mock Email integration  
    openEmail: () => {
      console.log(`Mock: Opening email to ${mockData.contact.email}`);
      // In real implementation: window.open(`mailto:${email}`, '_blank');
      return true;
    },

    // Mock social media links
    openSocialLink: (platform) => {
      console.log(`Mock: Opening ${platform} profile`);
      // In real implementation: window.open(url, '_blank');
      return true;
    },

    // Mock form submission
    submitContactForm: (formData) => {
      console.log('Mock: Contact form submitted with data:', formData);
      // In real implementation: send to backend API
      return { success: true, message: "Form submitted successfully!" };
    },

    // Mock newsletter signup
    subscribeNewsletter: (email) => {
      console.log(`Mock: Newsletter subscription for ${email}`);
      // In real implementation: send to backend API
      return { success: true, message: "Successfully subscribed!" };
    }
  },

  // Animation Settings
  animations: {
    heroParticles: {
      count: 20,
      colors: ['#06b6d4', '#3b82f6', '#8b5cf6'],
      speed: 2
    },
    brandKeywords: {
      staggerDelay: 600, // ms
      animationDuration: 700 // ms
    },
    scrollAnimations: {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    }
  }
};

// Mock API responses (for future backend integration)
export const mockAPI = {
  // Mock responses for when backend is implemented
  responses: {
    getCompanyInfo: () => Promise.resolve({ 
      success: true, 
      data: mockData.company 
    }),
    
    getProjects: () => Promise.resolve({ 
      success: true, 
      data: [] // Will be populated when backend is ready
    }),
    
    submitContact: (data) => Promise.resolve({ 
      success: true, 
      message: "Contact form submitted successfully",
      id: Math.random().toString(36).substr(2, 9)
    }),
    
    getTestimonials: () => Promise.resolve({ 
      success: true, 
      data: [] // Will be populated when backend is ready
    })
  }
};

export default mockData;