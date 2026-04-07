import React from 'react';
import { Download, FileText, Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';
import { PERSONAL_INFO } from '../constants';

const ResumeDownload: React.FC = () => {
    return (
        <motion.section 
            id="resume"
            className="w-full relative py-24 px-6 flex flex-col items-center justify-center text-center mt-10 overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
        >
            <div className="absolute left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-amber-400/60 to-transparent opacity-50 pointer-events-none" style={{ animation: 'scan 5s linear infinite' }}></div>

            <div className="relative z-10 max-w-5xl mx-auto w-full glass-card p-12 md:p-16 border-amber-500/20">
                <p className="text-amber-400 text-xs font-mono uppercase tracking-[0.3em] mb-4">
                    PROFESSIONAL DOCUMENTS
                </p>
                <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-3">
                    Download My Documents
                </h2>
                
                <p className="text-amber-400 font-mono text-sm tracking-[0.3em] mt-6 mb-12">
                    STEM OPT Eligible · 3 Years · No Sponsorship Required
                </p>

                <div className="flex items-center justify-center gap-6 flex-wrap">
                    <a
                        href={`${import.meta.env.BASE_URL}${PERSONAL_INFO.resumeUrl}`}
                        download="Sandeep_Kumaramgothu_Universal_Resume.pdf"
                        className="bg-amber-500 text-black font-black px-8 py-4 rounded-lg hover:bg-amber-400 shadow-[0_0_30px_rgba(245,158,11,0.4)] uppercase tracking-widest flex items-center gap-3 animate-pulse-amber transition-all"
                    >
                        <Download size={20} />
                        Resume PDF
                    </a>

                    <a
                        href={`${import.meta.env.BASE_URL}${PERSONAL_INFO.coverLetterUrl}`}
                        download="Sandeep_Kumaramgothu_Universal_CoverLetter.pdf"
                        className="border-2 border-amber-500/60 text-amber-400 font-black px-8 py-4 rounded-lg hover:bg-amber-500/10 uppercase tracking-widest flex items-center gap-3 transition-all"
                    >
                        <FileText size={20} />
                        Cover Letter PDF
                    </a>

                    <a
                        href={PERSONAL_INFO.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="border-2 border-white/10 text-slate-400 font-bold px-8 py-4 rounded-lg hover:border-amber-500/40 hover:text-amber-400 uppercase tracking-widest flex items-center gap-3 transition-all"
                    >
                        <Linkedin size={20} />
                        LinkedIn Profile
                    </a>
                </div>
            </div>
            
            <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute -top-40 -right-40 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none"></div>
        </motion.section>
    );
};

export default ResumeDownload;
