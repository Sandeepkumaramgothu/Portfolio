import React, { useState, useEffect } from 'react';
import Hero from './components/Hero';
import Background from './components/Background';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Chatbot from './components/Chatbot';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
  ];

  return (
    <div className="min-h-screen text-slate-100 overflow-x-hidden selection:bg-cyan-500 selection:text-white relative">
      <Background />

      {/* Navigation */}
      <KatanaNav />

      <main>
        <Hero />
        <Skills />
        <Experience />
        <Projects />
      </main>

      <Footer />
      <Chatbot />
    </div>
  );
};

export default App;