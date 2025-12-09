import React, { useEffect, useRef } from 'react';

const Background: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let width = window.innerWidth;
        let height = window.innerHeight;
        canvas.width = width;
        canvas.height = height;

        const stars: { x: number; y: number; radius: number; vx: number; vy: number; alpha: number }[] = [];
        const numStars = 150;

        for (let i = 0; i < numStars; i++) {
            stars.push({
                x: Math.random() * width,
                y: Math.random() * height,
                radius: Math.random() * 1.5,
                vx: (Math.random() - 0.5) * 0.2,
                vy: (Math.random() - 0.5) * 0.2,
                alpha: Math.random()
            });
        }

        const animate = () => {
            ctx.clearRect(0, 0, width, height);

            // Draw Background
            const gradient = ctx.createLinearGradient(0, 0, 0, height);
            gradient.addColorStop(0, '#0f172a'); // slate-900
            gradient.addColorStop(1, '#020617'); // slate-950
            ctx.fillStyle = gradient;
            ctx.fillRect(0, 0, width, height);

            // Draw Stars
            ctx.fillStyle = '#ffffff';
            stars.forEach(star => {
                ctx.globalAlpha = star.alpha;
                ctx.beginPath();
                ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
                ctx.fill();

                // Move
                star.x += star.vx;
                star.y += star.vy;

                // Bounce/Wrap
                if (star.x < 0) star.x = width;
                if (star.x > width) star.x = 0;
                if (star.y < 0) star.y = height;
                if (star.y > height) star.y = 0;

                // Twinkle
                star.alpha += (Math.random() - 0.5) * 0.02;
                if (star.alpha < 0.1) star.alpha = 0.1;
                if (star.alpha > 0.8) star.alpha = 0.8;
            });

            requestAnimationFrame(animate);
        };

        animate();

        const handleResize = () => {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none"
        />
    );
};

export default Background;
