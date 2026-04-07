import React from 'react';
import { SKILLS } from '../constants';
import { motion } from 'framer-motion';
import { Database, Code2, BrainCircuit, ShieldAlert, Cpu, Network, Cloud, LineChart } from 'lucide-react';

const getCategoryIcon = (category: string) => {
    switch (category) {
        case "Machine Learning & AI": return <BrainCircuit size={20} />;
        case "LLM & Generative AI": return <Network size={20} />;
        case "AI Safety & Security": return <ShieldAlert size={20} />;
        case "MLOps & Infrastructure": return <Cpu size={20} />;
        case "Data Engineering": return <Database size={20} />;
        case "Vector Databases & Search": return <Code2 size={20} />;
        case "Cloud & DevOps": return <Cloud size={20} />;
        default: return <LineChart size={20} />;
    }
};

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 relative z-10 w-full lg:min-h-screen flex flex-col justify-center">
      <div className="w-full mb-12">
        <p className="text-amber-400 text-xs font-mono uppercase tracking-[0.3em] mb-3">CORE PROFICIENCIES</p>
        <h2 className="text-4xl md:text-5xl font-black text-white">The Intelligence Stack.</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        
        {/* Main large card */}
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2 glass-card p-8 flex flex-col justify-between relative overflow-hidden"
        >
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>
            
            <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-500 mb-6 border border-amber-500/20">
                    <BrainCircuit size={24} />
                </div>
                <h3 className="font-black text-2xl text-white mb-4">Core Architecture & AI Systems</h3>
                <p className="text-slate-400 mb-8 max-w-lg leading-relaxed">
                    Engineering scalable machine learning platforms and securing large language models against adversarial attacks using state-of-the-art frameworks.
                </p>
            </div>

            <div className="flex flex-wrap gap-2 relative z-10">
                {SKILLS[0].skills.slice(0, 5).map(skill => (
                    <span key={skill} className="px-4 py-2 rounded-full text-sm font-medium border border-amber-500/30 bg-amber-500/10 text-amber-400">
                        {skill}
                    </span>
                ))}
                {SKILLS[1].skills.slice(0, 4).map(skill => (
                    <span key={skill} className="px-4 py-2 rounded-full text-sm font-medium border border-cyan-500/30 bg-cyan-500/10 text-cyan-400">
                        {skill}
                    </span>
                ))}
            </div>
        </motion.div>

        {/* Regular cards */}
        {SKILLS.map((item, index) => (
            <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card p-6"
            >
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-400 mb-4">
                    {getCategoryIcon(item.category)}
                </div>
                <h3 className="font-bold text-white mb-4">{item.category}</h3>
                
                <div className="flex flex-wrap gap-2">
                    {item.skills.map(skill => (
                        <span key={skill} className="px-3 py-1.5 rounded-full text-xs font-medium border border-white/10 text-slate-300 hover:border-amber-500/40 hover:text-amber-400 transition-all cursor-default">
                            {skill}
                        </span>
                    ))}
                </div>
            </motion.div>
        ))}

        {/* CTA Card */}
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass-card p-8 border-amber-500/40 bg-amber-500/5 flex flex-col items-center justify-center text-center"
        >
            <h3 className="text-xl font-bold text-white mb-2 max-w-[200px]">Let's discuss your next breakthrough in AI</h3>
            <a href="#contact" className="mt-4 text-amber-400 font-bold uppercase tracking-widest text-sm hover:text-amber-300 transition-colors inline-flex items-center gap-2">
                INITIATE CONTACT →
            </a>
        </motion.div>

      </div>
    </section>
  );
};

export default Skills;