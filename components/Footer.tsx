import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-8 bg-slate-900 border-t border-slate-800 text-center">
      <div className="container mx-auto px-6">
        <p className="text-slate-500 text-sm">
          © {new Date().getFullYear()} Sandeep Kumar Amgothu. Built with React, Tailwind & Gemini API.
        </p>
      </div>
    </footer>
  );
};

export default Footer;