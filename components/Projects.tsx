import React from 'react';
import { PROJECTS, PERSONAL_INFO } from '../constants';
import { ExternalLink, Github } from 'lucide-react';
import { motion } from 'framer-motion';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 bg-black relative z-10">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center uppercase tracking-widest">
            <span className="border-b-4 border-samurai-red pb-2">Key Projects</span>
          </h2>
          <p className="text-slate-400 text-center mb-16 max-w-2xl mx-auto font-light">
            Showcasing operations in LLM Security, UAV Detection, and Data Analytics.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={index}
              className="group bg-neutral-900 border border-neutral-800 hover:border-samurai-red transition-all duration-300 hover:shadow-[0_0_20px_rgba(208,0,0,0.3)] flex flex-col h-full transform hover:-translate-y-1 relative overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-900 via-samurai-red to-red-900 opacity-0 group-hover:opacity-100 transition-opacity" />

              {/* Placeholder image using picsum but grayscale until hover */}
              <div className="h-48 overflow-hidden relative">
                <img
                  src={`https://picsum.photos/seed/${index + 12}/800/600`}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 grayscale group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-transparent to-transparent opacity-90" />
              </div>

              <div className="p-6 flex flex-col flex-grow relative z-10">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-white leading-tight group-hover:text-samurai-red transition-colors uppercase tracking-tight">{project.title}</h3>
                </div>

                <p className="text-xs text-samurai-red mb-4 font-mono uppercase tracking-widest">{project.period}</p>

                <ul className="space-y-2 mb-6 flex-grow">
                  {project.description.slice(0, 2).map((desc, dIdx) => (
                    <li key={dIdx} className="text-slate-400 text-sm line-clamp-3 leading-relaxed group-hover:text-slate-200 transition-colors">
                      • {desc}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="px-2 py-1 bg-black text-xs text-red-500 border border-red-900/30 uppercase tracking-wider">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex gap-3">
                  {/* Simulated Links */}
                  <a href={`https://${PERSONAL_INFO.github}`} target="_blank" rel="noreferrer" className="flex items-center gap-1 text-sm text-white hover:text-samurai-red transition-colors border border-neutral-700 px-3 py-2 hover:border-samurai-red bg-black">
                    <Github size={16} /> <span className="uppercase text-xs font-bold">Code</span>
                  </a>
                  {project.link && project.link !== '#' && (
                    <a href={project.link} target="_blank" rel="noreferrer" className="flex items-center gap-1 text-sm text-samurai-red hover:text-white transition-colors font-medium border border-samurai-red px-3 py-2 hover:bg-samurai-red hover:border-samurai-red">
                      <ExternalLink size={16} /> <span className="uppercase text-xs font-bold">Demo</span>
                    </a>
                  )}
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