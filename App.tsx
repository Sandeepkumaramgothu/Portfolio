/*
FUNCTIONAL TESTING CHECKLIST — Verify before deploying:

RESUME DOWNLOAD:
  [ ] Resume button downloads Sandeep_Kumaramgothu_Universal_Resume.pdf
  [ ] Cover letter button downloads Sandeep_Kumaramgothu_Universal_CoverLetter.pdf
  [ ] Both files exist in /public/ folder with exact filenames
  [ ] import.meta.env.BASE_URL resolves to "/Portfolio/" on GitHub Pages

NAVIGATION:
  [ ] All 7 nav links scroll to correct section IDs
  [ ] Mobile hamburger opens/closes drawer
  [ ] "Contact" button highlights on hover with amber border
  [ ] Nav becomes more opaque on scroll

THREE.js:
  [ ] Hero crystal scene renders and animates
  [ ] Mouse parallax works on desktop
  [ ] Project canvases render per card (TorusKnot/Icosahedron/Octahedron)
  [ ] All useEffect cleanups fire: cancelAnimationFrame + renderer.dispose()
  [ ] No console errors about WebGL context lost
  [ ] window.__THREE_LOADED__ prevents double script injection

CONTACT FORM:
  [ ] All 6 connection type pills are clickable and toggle correctly
  [ ] Selected pill value included in form submission as "connection_type"
  [ ] Form submits to Formspree ID: mqardrnw
  [ ] Success state appears after submission
  [ ] Error alert appears on network failure
  [ ] Disabled state prevents double-submit

SOCIAL LINKS:
  [ ] LinkedIn opens https://www.linkedin.com/in/sandeepkumaramgothu/
  [ ] GitHub opens https://github.com/Sandeepkumaramgothu
  [ ] Scholar opens correct Google Scholar URL
  [ ] Email opens mailto correctly
  [ ] All external links have target="_blank" rel="noopener noreferrer"

PERFORMANCE:
  [ ] No layout shift on load (CLS)
  [ ] Fonts load with display=swap
  [ ] Images/canvases don't block main thread
  [ ] Page scrolls smoothly (scroll-behavior: smooth)

RESPONSIVE:
  [ ] Hero two-column on lg, stacked on mobile
  [ ] Nav hamburger on mobile
  [ ] Buttons wrap gracefully on small screens
  [ ] Three.js canvases resize correctly
*/
import React from 'react';
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
import ResumeDownload from './components/ResumeDownload';

const App: React.FC = () => {
  return (
    <div className="min-h-screen relative font-sans text-white overflow-x-hidden selection:bg-amber-500/30 selection:text-white bg-[#0D1117]">
      <Background />
      <KatanaNav />
      <main className="container mx-auto px-4 max-w-6xl">
        <Hero />
        <Skills />
        <Experience />
        <Projects />
        <Publications />
        <ResumeDownload />
        <Contact />
      </main>
      <Footer />
      <Chatbot />
    </div>
  );
};

export default App;