import React, { useState } from 'react';
import { motion } from 'framer-motion';

const navLinks = [
    { name: 'About', href: '#home' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: 'mailto:sandeepkumaramgothu3@gmail.com' },
];

const KatanaNav: React.FC = () => {
    return (
        <div className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-5xl px-4 pointer-events-none">
            <motion.div
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: '100%', opacity: 1 }}
                transition={{ duration: 1.5, ease: "circOut" }}
                className="relative flex items-center pointer-events-auto"
            >
                {/* --- TSUKA (Handle) --- */}
                <div className="flex-shrink-0 w-24 h-10 bg-black border-2 border-samurai-red relative flex items-center justify-center overflow-hidden rounded-l-md shadow-[0_0_15px_#D00000]">
                    {/* Diamond wrapping pattern (Tsuka-ito) */}
                    <div className="absolute inset-0 opacity-50 bg-[repeating-linear-gradient(45deg,transparent,transparent_5px,#333_5px,#333_10px)]"></div>
                    <span className="relative z-10 text-white font-black tracking-tighter">SKA</span>
                </div>

                {/* --- TSUBA (Guard) --- */}
                <div className="flex-shrink-0 w-8 h-14 bg-gradient-to-b from-samurai-gold to-yellow-700 rounded-sm border border-yellow-900 shadow-lg relative z-20 flex items-center justify-center -ml-1">
                    <div className="w-4 h-8 bg-black/50 border border-yellow-500/30 rounded-full"></div>
                </div>

                {/* --- BLADE (Nagasa) - Navigation Container --- */}
                <div className="flex-grow h-12 bg-gradient-to-r from-gray-200 via-white to-gray-300 relative rounded-r-full shadow-[0_5px_15px_rgba(0,0,0,0.5)] flex items-center overflow-hidden border-t-2 border-b border-gray-400">
                    {/* Steel texture */}
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/50 to-gray-400/20"></div>

                    {/* Hamon (Temper line) - Wavy SVG or trick */}
                    <div className="absolute bottom-0 left-0 w-full h-1/2 opacity-30" style={{
                        background: 'repeating-linear-gradient(90deg, transparent, transparent 20px, rgba(255,255,255,0.8) 25px, transparent 30px)'
                    }}></div>

                    <div className="flex justify-around w-full relative z-10 px-8">
                        {navLinks.map((link, idx) => (
                            <a
                                key={idx}
                                href={link.href}
                                className="text-black font-bold uppercase tracking-widest text-sm hover:text-samurai-red hover:scale-110 transition-all duration-300 drop-shadow-sm"
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>

                    {/* Tip glow */}
                    <div className="absolute right-0 top-0 h-full w-10 bg-gradient-to-l from-white to-transparent"></div>
                </div>
            </motion.div>
        </div>
    );
};

export default KatanaNav;
