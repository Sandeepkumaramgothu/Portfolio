import React from 'react';
import { SKILLS } from '../constants';
import SkillsRadar from './SkillsRadar';
import { Code2, Database, Shield, Server, LineChart } from 'lucide-react';

const getIcon = (category: string) => {
  if (category.includes("Machine")) return <Code2 className="text-purple-400" />;
  if (category.includes("Safety")) return <Shield className="text-red-400" />;
  if (category.includes("MLOps")) return <Server className="text-blue-400" />;
  if (category.includes("Data")) return <Database className="text-green-400" />;
  return <LineChart className="text-yellow-400" />;
};

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 bg-slate-900 relative">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">Technical Expertise</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          
          {/* Left Column: Radar Chart */}
          <div className="lg:col-span-1">
             <SkillsRadar />
          </div>

          {/* Right Column: Detailed Lists */}
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
            {SKILLS.map((skillGroup, idx) => (
              <div key={idx} className="bg-slate-800/30 p-6 rounded-xl border border-slate-700/50 hover:border-cyan-500/30 transition-colors">
                <div className="flex items-center gap-3 mb-4">
                  {getIcon(skillGroup.category)}
                  <h3 className="text-lg font-semibold text-slate-200">{skillGroup.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.skills.map((skill, sIdx) => (
                    <span 
                      key={sIdx} 
                      className="px-3 py-1 bg-slate-700/50 text-slate-300 rounded-full text-xs font-medium border border-slate-600"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;