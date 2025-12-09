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
      <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${isScrolled ? 'bg-slate-900/90 backdrop-blur-md border-b border-slate-800 py-4' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <a href="#" className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            SKA.
          </a>

          <div className="hidden md:flex gap-8">
            {navLinks.map(link => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-slate-300 hover:text-white hover:text-cyan-400 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <a
            href="mailto:sandeepkumaramgothu3@gmail.com"
            className="hidden md:block px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-sm font-medium transition-colors border border-slate-700"
          >
            Contact Me
          </a>
        </div>
      </nav>

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