import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Scroll } from 'lucide-react';
import { PUBLICATIONS } from '../constants';

const Publications: React.FC = () => {
    return (
        <section id="publications" className="py-20 bg-black relative text-white overflow-hidden">
            {/* Falling Maple Leaves */}
            <div className="absolute inset-0 pointer-events-none">
                {[...Array(10)].map((_, i) => (
                    <div key={i} className="absolute w-4 h-4 bg-red-700/40 rounded-full animate-float" style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        animationDelay: `${i}s`,
                        clipPath: "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)"
                    }}></div>
                ))}
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <h2 className="text-4xl font-black text-center mb-16 text-white uppercase tracking-[0.3em] drop-shadow-[0_0_10px_#FF0000]">
                    Scrolls of Wisdom
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                    {PUBLICATIONS.map((pub, index) => (
                        <motion.div
                            key={index}
                            className="bg-[#Fdfcf0] text-black relative p-8 shadow-[0_10px_30px_rgba(0,0,0,0.5)] group hover:-translate-y-2 transition-transform duration-300"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                        >
                            {/* Scroll Rollers */}
                            <div className="absolute -left-4 top-0 bottom-0 w-6 bg-red-900 rounded-l-lg shadow-inner flex flex-col justify-center items-center">
                                <div className="w-1 h-3/4 bg-black/30 rounded-full"></div>
                            </div>
                            <div className="absolute -right-4 top-0 bottom-0 w-6 bg-red-900 rounded-r-lg shadow-inner flex flex-col justify-center items-center">
                                <div className="w-1 h-3/4 bg-black/30 rounded-full"></div>
                            </div>

                            {/* Wax Seal */}
                            <div className="absolute top-4 right-4 w-12 h-12 bg-samurai-red rounded-full flex items-center justify-center text-white shadow-md transform rotate-12 group-hover:rotate-0 transition-transform">
                                <span className="font-serif font-black text-lg">秘</span>
                            </div>

                            <div className="mb-2 flex items-center gap-2 text-red-800 font-bold uppercase tracking-widest text-xs">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/c/c7/Google_Scholar_logo.svg" className="w-4 h-4" alt="Scholar" />
                                {pub.conference}
                            </div>

                            <h3 className="text-xl font-bold font-serif mb-3 leading-tight">{pub.title}</h3>
                            <p className="text-gray-700 font-serif text-sm leading-relaxed mb-4">
                                {pub.description}
                            </p>

                            <a href={pub.link} className="inline-flex items-center gap-2 text-samurai-red font-bold uppercase text-xs hover:underline tracking-widest">
                                <FileText size={14} /> Read Paper
                            </a>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Publications;
