import React, { useState, useEffect } from 'react';
import Hero from './components/Hero';
import Background from './components/Background';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Chatbot from './components/Chatbot';
import Publications from './components/Publications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import KatanaNav from './components/KatanaNav';

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen text-slate-100 overflow-x-hidden selection:bg-samurai-red selection:text-white relative bg-samurai-dark">
      <Background />

      {/* Navigation */}
      <KatanaNav />

      <main>
        <Hero />
        <Skills />
        <Experience />
        <Projects />
        <Publications />
        <Contact />
      </main>

      <Footer />
      <Chatbot />
    </div>
  );
};

export default App;