import React from 'react';
import { SKILLS } from '../constants';
import SkillsRadar from './SkillsRadar';
import { Code2, Database, Shield, Server, LineChart } from 'lucide-react';
import { motion } from 'framer-motion';

const getIcon = (category: string) => {
  if (category.includes("Machine")) return <Code2 className="text-samurai-red" />;
  if (category.includes("Safety")) return <Shield className="text-red-500" />;
  if (category.includes("MLOps")) return <Server className="text-white" />;
  if (category.includes("Data")) return <Database className="text-red-400" />;
  return <LineChart className="text-samurai-gold" />; // Gold accent for variety
};

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 bg-[#0a0a0a] relative">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-white mb-12 text-center uppercase tracking-widest"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="border-b-4 border-samurai-red pb-2">Technical Expertise</span>
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">

          {/* Left Column: Radar Chart */}
          <motion.div
            className="lg:col-span-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <SkillsRadar />
          </motion.div>

          {/* Right Column: Detailed Lists */}
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
            {SKILLS.map((skillGroup, idx) => (
              <motion.div
                key={idx}
                className="bg-neutral-900/50 p-6 border border-neutral-800 hover:border-samurai-red transition-all duration-300 hover:shadow-[0_0_15px_rgba(208,0,0,0.15)] group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-3 mb-4">
                  {getIcon(skillGroup.category)}
                  <h3 className="text-lg font-bold text-white uppercase tracking-wider group-hover:text-samurai-red transition-colors">{skillGroup.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-3 py-1 bg-black text-slate-300 text-xs font-mono border border-neutral-700 hover:border-samurai-red hover:text-white transition-colors cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;