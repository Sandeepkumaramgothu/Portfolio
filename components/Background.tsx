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

        // Configuration
        const particles: Particle[] = [];
        const slashes: Slash[] = [];
        const PARTICLE_COUNT = 100;

        class Particle {
            x: number;
            y: number;
            speedX: number;
            speedY: number;
            size: number;
            color: string;

            constructor() {
                this.x = Math.random() * width;
                this.y = Math.random() * height;
                this.speedX = (Math.random() - 0.5) * 1.5;
                this.speedY = (Math.random() - 0.5) * 1.5;
                this.size = Math.random() * 2;
                // Tech red/white colors
                this.color = Math.random() > 0.8 ? '#ffffff' : '#D00000';
            }

            update() {
                this.x += this.speedX;
                this.y += this.speedY;

                if (this.x < 0 || this.x > width) this.speedX *= -1;
                if (this.y < 0 || this.y > height) this.speedY *= -1;
            }

            draw() {
                if (!ctx) return;
                ctx.fillStyle = this.color;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        class Slash {
            x: number;
            y: number;
            length: number;
            angle: number;
            life: number;
            width: number;

            constructor() {
                this.x = Math.random() * width;
                this.y = Math.random() * height;
                this.length = Math.random() * 200 + 100;
                this.angle = Math.random() * Math.PI * 2;
                this.life = 1.0;
                this.width = Math.random() * 2 + 1;
            }

            update() {
                this.life -= 0.02;
            }

            draw() {
                if (!ctx || this.life <= 0) return;
                ctx.save();
                ctx.globalAlpha = this.life;
                ctx.strokeStyle = '#D00000'; // Samurai Red
                ctx.lineWidth = this.width;
                ctx.shadowBlur = 10;
                ctx.shadowColor = '#FF0000';

                const endX = this.x + Math.cos(this.angle) * this.length;
                const endY = this.y + Math.sin(this.angle) * this.length;

                ctx.beginPath();
                ctx.moveTo(this.x, this.y);
                ctx.lineTo(endX, endY);
                ctx.stroke();
                ctx.restore();
            }
        }

        // Initialize particles
        for (let i = 0; i < PARTICLE_COUNT; i++) {
            particles.push(new Particle());
        }

        const animate = () => {
            if (!ctx) return;
            // Trail effect (Void Black)
            ctx.fillStyle = 'rgba(5, 5, 5, 0.2)';
            ctx.fillRect(0, 0, width, height);

            // Tech Grid (Subtle)
            ctx.strokeStyle = 'rgba(208, 0, 0, 0.05)';
            ctx.lineWidth = 1;
            ctx.beginPath();
            for (let i = 0; i < width; i += 50) {
                ctx.moveTo(i, 0);
                ctx.lineTo(i, height);
            }
            for (let i = 0; i < height; i += 50) {
                ctx.moveTo(0, i);
                ctx.lineTo(width, i);
            }
            ctx.stroke();

            // Particles
            particles.forEach(p => {
                p.update();
                p.draw();
            });

            // Random Slashes (Katana effect)
            if (Math.random() < 0.05) {
                slashes.push(new Slash());
            }

            slashes.forEach((s, index) => {
                s.update();
                s.draw();
                if (s.life <= 0) slashes.splice(index, 1);
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
