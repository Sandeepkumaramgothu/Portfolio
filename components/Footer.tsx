import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-8 bg-black border-t border-red-900 text-center relative z-10">
      <div className="container mx-auto px-6">
        <p className="text-gray-500 text-sm font-serif">
          © {new Date().getFullYear()} Sandeep Kumar Amgothu. <span className="text-red-900">Bushido Code.</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;