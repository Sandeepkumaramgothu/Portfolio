import React from 'react';
import { PROJECTS, PERSONAL_INFO } from '../constants';
import { ExternalLink, Github } from 'lucide-react';
import { motion } from 'framer-motion';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 bg-samurai-dark text-white relative">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-black text-center mb-4 text-white uppercase tracking-[0.3em] drop-shadow-[0_0_10px_#FF0000]">
          The Armoury
        </h2>
        <p className="text-center text-samurai-red mb-16 font-mono tracking-widest text-sm">
            // CLASSIFIED PROJECTS
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={index}
              className="group bg-black border-2 border-samurai-blood hover:border-samurai-red transition-all duration-300 relative overflow-hidden h-[450px] flex flex-col"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              {/* Shoji Screen Overlay (Slides away on hover) */}
              <div className="absolute inset-0 bg-[#Fdfcf0] z-20 transition-transform duration-700 ease-in-out transform translate-y-0 group-hover:-translate-y-full pointer-events-none flex flex-col items-center justify-center opacity-95">
                {/* Shoji Grid */}
                <div className="absolute inset-0 grid grid-cols-4 grid-rows-6 opacity-20 pointer-events-none">
                  {[...Array(24)].map((_, i) => (
                    <div key={i} className="border border-black"></div>
                  ))}
                </div>
                <h3 className="text-black text-xl font-bold font-serif uppercase tracking-widest text-center px-4 relative z-10">
                  {project.title}
                </h3>
                <div className="mt-4 w-12 h-12 border-2 border-red-800 rounded-full flex items-center justify-center">
                  <div className="w-8 h-8 bg-red-800 rounded-full animate-pulse"></div>
                </div>
                <p className="text-red-900 text-xs mt-4 uppercase tracking-wider font-bold">Access Restricted</p>
              </div>

              {/* Revealed Content (Underneath) */}
              <div className="h-48 overflow-hidden relative bg-black p-0">
                {/* Tech card header visual */}
                <div className="w-full h-full bg-slate-900 flex items-center justify-center relative overflow-hidden">
                  <img
                    src={`https://picsum.photos/seed/${index + 40}/800/600`}
                    alt={project.title}
                    className="w-full h-full object-cover opacity-50 group-hover:opacity-100 transition-opacity grayscale group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
                </div>
              </div>

              <div className="p-6 flex flex-col flex-grow relative z-10 bg-black/90">
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-samurai-red transition-colors border-l-4 border-samurai-red pl-3">
                  {project.title}
                </h3>
                <div className="space-y-3 mb-6 flex-grow">
                  {project.description.slice(0, 2).map((desc, i) => (
                    <p key={i} className="text-gray-400 text-xs leading-relaxed border-l border-gray-800 pl-2">
                      {desc}
                    </p>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.slice(0, 3).map((tag, tIdx) => (
                    <span key={tIdx} className="px-2 py-1 bg-red-900/30 border border-red-900/50 text-red-400 text-[10px] uppercase tracking-wider">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex justify-between items-center mt-auto pt-4 border-t border-gray-800">
                  <span className="text-xs text-gray-500 font-mono">{project.period}</span>
                  {project.link && project.link !== "#" && (
                    <a href={project.link} target="_blank" rel="noreferrer" className="text-white hover:text-samurai-red transition-colors">
                      <Github size={18} />
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