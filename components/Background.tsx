import React from 'react';

const Background: React.FC = () => {
    return (
        <div className="fixed top-0 left-0 w-full h-full -z-10 bg-slate-50 pointer-events-none">
            {/* Subtle Circuit Pattern Overlay could go here */}
        </div>
    );
};

export default Background;
