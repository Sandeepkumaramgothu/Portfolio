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
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${isScrolled ? 'bg-black/90 backdrop-blur-md border-b border-samurai-red/30 py-4' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <a href="#" className="text-2xl font-black tracking-tighter text-white border-l-4 border-samurai-red pl-2 uppercase">
            SKA<span className="text-samurai-red">.</span>
          </a>

          <div className="hidden md:flex gap-8">
            {navLinks.map(link => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-bold uppercase tracking-widest text-slate-400 hover:text-samurai-red transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <a
            href="mailto:sandeepkumaramgothu3@gmail.com"
            className="hidden md:block px-6 py-2 bg-transparent border border-white hover:border-samurai-red hover:text-samurai-red text-white text-sm font-bold uppercase tracking-wider transition-all"
          >
            Contact
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