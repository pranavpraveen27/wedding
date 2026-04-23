import { useEffect, useState } from "react";
import IntroScreen from "@/components/IntroScreen";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Events from "@/components/Events";
import Family from "@/components/Family";
import Gallery from "@/components/Gallery";
import Gifts from "@/components/Gifts";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { useReveal } from "@/hooks/use-reveal";

const Index = () => {
  const [introDone, setIntroDone] = useState(false);

  // Activate scroll reveals once the main site renders
  useReveal();

  // Hide intro after ~3.2s (matches IntroScreen's removal timing)
  useEffect(() => {
    const t = setTimeout(() => setIntroDone(true), 3300);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <IntroScreen />
      <div className={introDone ? "animate-fade-in-slow" : "opacity-0"}>
        <Navigation />
        <main>
          <Hero />
          <Events />
          <Family />
          <Gallery />
          <Gifts />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
