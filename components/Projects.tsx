import React from 'react';
import { PROJECTS, PERSONAL_INFO } from '../constants';
import { ExternalLink, Github } from 'lucide-react';
import { motion } from 'framer-motion';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 bg-white relative">
      <div className="container mx-auto px-6">
        <div className="flex justify-center mb-16">
          <div className="bg-slate-900 text-white px-12 py-2 rounded-sm clip-path-slant shadow-lg transform -skew-x-12">
            <h2 className="text-2xl font-bold uppercase tracking-widest skew-x-12">Projects</h2>
          </div>
        </div>

        <div className="flex justify-center gap-4 mb-12">
          {['Research', 'Open-Source', 'Atlas'].map(tab => (
            <button key={tab} className="px-6 py-1 rounded-full border border-slate-300 text-slate-600 text-xs font-bold uppercase hover:bg-slate-100 hover:text-tech-blue transition-colors">
              {tab}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={index}
              className="group bg-white border border-slate-200 hover:border-tech-blue transition-all duration-300 hover:shadow-xl flex flex-col h-full rounded-2xl overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="h-40 overflow-hidden relative bg-slate-100 p-4">
                {/* Tech card header visual */}
                <div className="w-full h-full rounded-xl bg-slate-800 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-tr from-tech-blue/20 to-purple-500/20"></div>
                  <img
                    src={`https://picsum.photos/seed/${index + 40}/800/600`}
                    alt={project.title}
                    className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity"
                  />
                </div>
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <div className="mb-4">
                  <h3 className="text-lg font-black text-slate-800 uppercase tracking-tight mb-1 group-hover:text-tech-blue transition-colors">{project.title}</h3>
                  <div className="text-xs font-mono text-slate-400">{project.period}</div>
                </div>

                <p className="text-slate-600 text-sm leading-relaxed mb-6 line-clamp-3">
                  {project.description[0]}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.slice(0, 3).map((tag, tIdx) => (
                    <span key={tIdx} className="px-2 py-1 bg-slate-100 text-slate-500 text-[10px] font-bold uppercase tracking-wider rounded-sm">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;