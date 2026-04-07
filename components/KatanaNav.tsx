import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Publications', href: '#publications' },
  { name: 'Resume', href: '#resume' },
];

const KatanaNav: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <motion.nav 
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5 }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                    isScrolled ? 'bg-[#0D1117]/95 shadow-lg shadow-black/50 border-b border-white/5' : 'bg-[#0D1117]/80 backdrop-blur-xl border-b border-white/5'
                }`}
            >
                <div className="container mx-auto px-6 h-20 flex items-center justify-between">
                    <div className="flex items-center">
                        <a href="#home" className="text-xl font-black text-white hover:text-amber-400 transition-colors flex items-center">
                            Sandeep.ai<span className="w-2 h-2 bg-amber-400 rounded-full ml-1"></span>
                        </a>
                    </div>
                    
                    <div className="hidden lg:flex items-center gap-6">
                        {navLinks.map((link, idx) => (
                            <a 
                                key={idx} 
                                href={link.href} 
                                className="text-slate-400 hover:text-white text-sm font-medium transition-colors px-3 py-2"
                            >
                                {link.name}
                            </a>
                        ))}
                        <a 
                            href="#contact" 
                            className="ml-2 px-5 py-2 rounded-lg border border-amber-500/60 text-amber-400 text-sm font-bold hover:bg-amber-500/10 transition-all uppercase tracking-wider"
                        >
                            Contact
                        </a>
                    </div>

                    <button 
                        className="lg:hidden text-white"
                        onClick={() => setIsOpen(true)}
                    >
                        <Menu size={28} />
                    </button>
                </div>
            </motion.nav>

            {/* Mobile Drawer */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        <motion.div 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsOpen(false)}
                            className="fixed inset-0 bg-black/60 z-[60] backdrop-blur-sm lg:hidden"
                        />
                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                            className="fixed inset-y-0 right-0 w-64 bg-[#0D1117] border-l border-white/10 z-[70] flex flex-col p-6 lg:hidden"
                        >
                            <div className="flex justify-end mb-8">
                                <button onClick={() => setIsOpen(false)} className="text-slate-400 hover:text-white">
                                    <X size={28} />
                                </button>
                            </div>
                            <div className="flex flex-col gap-6">
                                {navLinks.map((link, idx) => (
                                    <a 
                                        key={idx} 
                                        href={link.href} 
                                        onClick={() => setIsOpen(false)}
                                        className="text-slate-300 hover:text-amber-400 text-lg font-medium transition-colors"
                                    >
                                        {link.name}
                                    </a>
                                ))}
                                <div className="h-px w-full bg-white/10 my-2"></div>
                                <a 
                                    href="#contact" 
                                    onClick={() => setIsOpen(false)}
                                    className="px-5 py-3 text-center rounded-lg border border-amber-500/60 text-amber-400 text-sm font-bold hover:bg-amber-500/10 transition-all uppercase tracking-wider"
                                >
                                    Contact
                                </a>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
};

export default KatanaNav;
