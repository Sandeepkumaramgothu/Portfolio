import React from 'react';
import { motion } from 'framer-motion';
import { FileText } from 'lucide-react';
import { PUBLICATIONS } from '../constants';

const Publications: React.FC = () => {
    return (
        <section id="publications" className="py-16 relative w-full mt-8">
            <div className="container mx-auto px-4 max-w-5xl">
                <h2 className="text-cyber-text text-2xl md:text-3xl font-bold tracking-[0.3em] uppercase mb-10 text-glow font-orbitron text-center">
                    Research Logs
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {PUBLICATIONS.map((pub, index) => (
                        <motion.div
                            key={index}
                            className="bg-cyber-panel/90 text-cyber-text p-6 cyber-box border border-cyber-neon/30 hover:border-cyber-neon transition-colors shadow-[0_0_15px_rgba(255,0,60,0.2)] hover:shadow-[0_0_20px_rgba(255,0,60,0.6)] flex flex-col group relative"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            {/* Decorative Top Line */}
                            <div className="absolute top-0 left-4 right-4 h-[1px] bg-cyber-neon/50"></div>
                            
                            <div className="flex items-center gap-2 mb-3">
                                <div className="w-2 h-2 bg-cyber-neon rounded-full cyber-glow animate-pulse"></div>
                                <span className="text-cyber-neon font-orbitron text-xs font-bold uppercase tracking-widest">{pub.conference}</span>
                            </div>

                            <h3 className="text-lg font-bold font-rajdhani mb-3 leading-tight text-white group-hover:text-cyber-neon transition-colors">{pub.title}</h3>
                            <p className="text-cyber-subtext font-rajdhani text-sm leading-relaxed mb-6 flex-grow border-l-2 border-cyber-dim pl-3">
                                {pub.description}
                            </p>

                            <a href={pub.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center self-start gap-2 text-cyber-neon font-orbitron font-bold uppercase text-xs tracking-widest border border-cyber-neon/40 px-4 py-2 hover:bg-cyber-neon hover:text-black transition-all">
                                <FileText size={14} /> Extract Data
                            </a>

                            {/* Corner dots */}
                            <div className="absolute bottom-2 right-2 flex gap-1">
                                <div className="w-1 h-1 bg-cyber-neon opacity-50"></div>
                                <div className="w-1 h-1 bg-cyber-neon opacity-50"></div>
                                <div className="w-1 h-1 bg-cyber-neon opacity-50"></div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Publications;
