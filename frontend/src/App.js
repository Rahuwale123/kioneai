import React from "react";
import "./App.css";
import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { AboutSection } from "./components/AboutSection";
import { WorkSection } from "./components/WorkSection";
import { WhySection } from "./components/WhySection";
import { BrandingSection } from "./components/BrandingSection";
import { ContactSection } from "./components/ContactSection";

function App() {
  const handleGetInTouch = () => {
    console.log('Get in Touch clicked - scrolling to contact');
  };

  return (
    <div className="App">
      <Header />
      <HeroSection onGetInTouchClick={handleGetInTouch} />
      <AboutSection />
      <WorkSection />
      <WhySection />
      <BrandingSection />
      <ContactSection />
    </div>
  );
}

export default App;