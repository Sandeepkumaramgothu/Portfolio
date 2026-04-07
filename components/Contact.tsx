import React, { useState } from 'react';
import { Send, CheckCircle, Linkedin, Github, GraduationCap, Mail, Globe } from 'lucide-react';
import { motion } from 'framer-motion';
import { PERSONAL_INFO } from '../constants';

const Contact: React.FC = () => {
    const [submitted, setSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [selectedType, setSelectedType] = useState<string>('');

    const FORMSPREE_ID = 'mqardrnw';

    const connectionTypes = [
        "Job Opportunity", "Research Collaboration", "Consulting",
        "Speaking Invitation", "Open Source", "Just Saying Hi"
    ];

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        const formData = new FormData(e.currentTarget);
        try {
            const response = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
                method: 'POST',
                body: formData,
                headers: { 'Accept': 'application/json' }
            });

            if (response.ok) {
                setSubmitted(true);
                setTimeout(() => setSubmitted(false), 5000);
                e.currentTarget.reset();
                setSelectedType('');
            } else {
                alert("Transmission failed! Please check your connection.");
            }
        } catch (error) {
            alert("Error sending message. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="py-24 relative overflow-hidden bg-transparent z-10 w-full mb-10 min-h-screen flex items-center">
            
            {/* Animated Blobs */}
            <div className="absolute top-10 -left-20 w-96 h-96 rounded-full bg-amber-500/5 blur-3xl pointer-events-none z-0" style={{ animation: 'drift 12s ease infinite' }}></div>
            <div className="absolute bottom-10 -right-20 w-80 h-80 rounded-full bg-cyan-500/5 blur-3xl pointer-events-none z-0" style={{ animation: 'drift 16s ease infinite reverse' }}></div>

            <div className="container mx-auto px-4 max-w-5xl relative z-10">
                <div className="text-center mb-16">
                    <p className="text-amber-400 text-xs font-mono uppercase tracking-[0.3em] mb-4">
                        GET IN TOUCH
                    </p>
                    <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
                        Let's Build Something Together
                    </h2>
                    <p className="text-slate-400 max-w-2xl mx-auto">
                        Open to opportunities, collaborations, and conversations in AI, ML, and beyond.
                    </p>
                </div>
                
                {/* Social quick-links */}
                <div className="flex justify-center gap-4 mb-16 flex-wrap">
                    <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full glass-card flex items-center justify-center text-slate-400 hover:border-amber-500/60 hover:text-amber-400 hover:shadow-[0_0_20px_rgba(245,158,11,0.3)] transition-all cursor-pointer">
                        <Linkedin size={20} />
                    </a>
                    <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full glass-card flex items-center justify-center text-slate-400 hover:border-amber-500/60 hover:text-amber-400 hover:shadow-[0_0_20px_rgba(245,158,11,0.3)] transition-all cursor-pointer">
                        <Github size={20} />
                    </a>
                    <a href={PERSONAL_INFO.scholar} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full glass-card flex items-center justify-center text-slate-400 hover:border-amber-500/60 hover:text-amber-400 hover:shadow-[0_0_20px_rgba(245,158,11,0.3)] transition-all cursor-pointer">
                        <GraduationCap size={20} />
                    </a>
                    <a href={`mailto:${PERSONAL_INFO.email}`} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full glass-card flex items-center justify-center text-slate-400 hover:border-amber-500/60 hover:text-amber-400 hover:shadow-[0_0_20px_rgba(245,158,11,0.3)] transition-all cursor-pointer">
                        <Mail size={20} />
                    </a>
                    <a href={PERSONAL_INFO.portfolio} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full glass-card flex items-center justify-center text-slate-400 hover:border-amber-500/60 hover:text-amber-400 hover:shadow-[0_0_20px_rgba(245,158,11,0.3)] transition-all cursor-pointer">
                        <Globe size={20} />
                    </a>
                </div>
                
                <div className="relative glass-card p-8 md:p-12 max-w-4xl mx-auto shadow-2xl">

                    {!submitted ? (
                        <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
                            
                            {/* Connection Type Pills */}
                            <div>
                                <label className="block text-slate-400 text-xs uppercase tracking-widest mb-4 text-center">What brings you here?</label>
                                <div className="flex flex-wrap justify-center gap-3">
                                    {connectionTypes.map(type => (
                                        <div 
                                            key={type}
                                            onClick={() => setSelectedType(type)}
                                            className={`px-4 py-2 rounded-full text-sm font-medium cursor-pointer transition-all ${
                                                selectedType === type ? 'bg-amber-500 text-black font-bold shadow-[0_0_15px_rgba(245,158,11,0.4)]' : 'glass-card text-slate-400 hover:border-amber-500/40 hover:text-amber-400'
                                            }`}
                                        >
                                            {type}
                                        </div>
                                    ))}
                                </div>
                                <input type="hidden" name="connection_type" value={selectedType} />
                            </div>

                            <div className="w-full h-px bg-white/5 my-4"></div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="group flex flex-col">
                                    <label className="text-slate-400 text-xs uppercase tracking-widest mb-2">Name</label>
                                    <input type="text" name="name" className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-amber-500/60 focus:bg-white/10 transition-all placeholder-slate-600 w-full" placeholder="John Doe" required disabled={isSubmitting} />
                                </div>
                                <div className="group flex flex-col">
                                    <label className="text-slate-400 text-xs uppercase tracking-widest mb-2">Email</label>
                                    <input type="email" name="email" className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-amber-500/60 focus:bg-white/10 transition-all placeholder-slate-600 w-full" placeholder="john@example.com" required disabled={isSubmitting} />
                                </div>
                            </div>

                            <div className="group flex flex-col">
                                <label className="text-slate-400 text-xs uppercase tracking-widest mb-2">Message</label>
                                <textarea rows={5} name="message" className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-amber-500/60 focus:bg-white/10 transition-all placeholder-slate-600 w-full resize-none" placeholder="Let's build..." required disabled={isSubmitting}></textarea>
                            </div>

                            <div className="flex justify-center pt-4">
                                <button type="submit" disabled={isSubmitting} className="bg-amber-500 text-black font-black px-12 py-4 rounded-lg hover:bg-amber-400 shadow-[0_0_25px_rgba(245,158,11,0.4)] uppercase tracking-widest flex items-center gap-2 disabled:opacity-50 transition-all group">
                                    <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" /> 
                                    {isSubmitting ? 'Sending...' : 'Send Message'}
                                </button>
                            </div>
                        </form>
                    ) : (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="flex flex-col items-center justify-center py-20 text-center"
                        >
                            <div className="w-20 h-20 bg-amber-500/10 rounded-full flex items-center justify-center mb-6 text-amber-500 shadow-[0_0_30px_rgba(245,158,11,0.3)] border border-amber-500/30">
                                <CheckCircle size={40} />
                            </div>
                            <h3 className="text-3xl font-black text-white tracking-tight mb-3">Transmission Successful</h3>
                            <p className="text-slate-400">Thank you for reaching out. I'll respond shortly.</p>
                        </motion.div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Contact;
