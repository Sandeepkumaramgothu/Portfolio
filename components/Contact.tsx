import React, { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
    const [submitted, setSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    // User provided ID: mqardrnw
    const FORMSPREE_ID = 'mqardrnw';

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);

        const formData = new FormData(e.currentTarget);

        try {
            const response = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                setSubmitted(true);
                setTimeout(() => setSubmitted(false), 5000); // Reset after 5s
                e.currentTarget.reset();
            } else {
                alert("The messenger was intercepted! Please check your connection.");
            }
        } catch (error) {
            alert("Error sending scroll. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="py-20 bg-samurai-dark text-white relative flex justify-center overflow-hidden">
            {/* Background elements */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(60,0,0,0.5),transparent)]"></div>

            <div className="container mx-auto px-6 relative z-10 max-w-3xl">
                <h2 className="text-4xl font-black text-center mb-16 text-white uppercase tracking-[0.3em] drop-shadow-[0_0_10px_#FF0000]">
                    Send Messenger
                </h2>

                <div className="bg-[#Fdfcf0] p-10 md:p-16 relative shadow-2xl rotate-1 transform hover:rotate-0 transition-transform duration-500">
                    {/* Burnt edges effect simulation with inner shadow */}
                    <div className="absolute inset-0 shadow-[inset_0_0_40px_rgba(139,69,19,0.2)] pointer-events-none"></div>

                    {/* Ancient texture overlay */}
                    <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/aged-paper.png')]"></div>

                    {!submitted ? (
                        <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="group">
                                    <label className="block text-red-900 font-bold uppercase text-xs tracking-widest mb-2">Name <span className="opacity-50">名</span></label>
                                    <input type="text" name="name" className="w-full bg-transparent border-b-2 border-gray-300 focus:border-red-600 outline-none py-2 text-black font-serif transition-colors" placeholder="Ronin Name" required disabled={isSubmitting} />
                                </div>
                                <div className="group">
                                    <label className="block text-red-900 font-bold uppercase text-xs tracking-widest mb-2">Email <span className="opacity-50">電子メール</span></label>
                                    <input type="email" name="email" className="w-full bg-transparent border-b-2 border-gray-300 focus:border-red-600 outline-none py-2 text-black font-serif transition-colors" placeholder="messenger@clan.com" required disabled={isSubmitting} />
                                </div>
                            </div>

                            <div>
                                <label className="block text-red-900 font-bold uppercase text-xs tracking-widest mb-2">Message <span className="opacity-50">伝言</span></label>
                                <textarea rows={4} name="message" className="w-full bg-transparent border-b-2 border-gray-300 focus:border-red-600 outline-none py-2 text-black font-serif transition-colors resize-none" placeholder="Your message..." required disabled={isSubmitting}></textarea>
                            </div>

                            <div className="text-center pt-4">
                                <button type="submit" disabled={isSubmitting} className="group relative inline-flex items-center justify-center px-12 py-4 overflow-hidden font-bold tracking-tighter text-white bg-red-900 rounded-sm hover:bg-red-800 transition-all duration-300 shadow-md disabled:opacity-50 disabled:cursor-not-allowed">
                                    <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-red-600 rounded-full group-hover:w-56 group-hover:h-56 opacity-10"></span>
                                    <span className="relative flex items-center gap-2 uppercase tracking-widest">
                                        <Send size={18} /> {isSubmitting ? 'Sealing...' : 'Seal & Send'}
                                    </span>
                                </button>
                            </div>
                        </form>
                    ) : (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="flex flex-col items-center justify-center h-full py-10 text-center"
                        >
                            <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mb-6 text-red-600">
                                <CheckCircle size={40} />
                            </div>
                            <h3 className="text-2xl font-black text-black uppercase tracking-widest mb-2">Message Dispatched</h3>
                            <p className="text-gray-600 font-serif">The crane carries your words.</p>
                        </motion.div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Contact;
