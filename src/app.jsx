import React from "react";
import Hero from "./sections/Hero";
import ShowCaseSection from "./sections/showCaseSection";
import Navbar from "./components/navbar";
import LogoSection from "./sections/logoSection";
import FeaturesCards from "./sections/featuresCards";
import ExperienceSection from "./sections/ExperienceSection";
import TechStack from "./sections/techStack";
import Testimonials from "./sections/testimonials";
import Contact from "./sections/Contact";
import Footer from "./sections/footer";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <ShowCaseSection />
      <LogoSection />
      <FeaturesCards />
      <ExperienceSection />
      <TechStack />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
