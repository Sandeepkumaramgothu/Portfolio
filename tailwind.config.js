/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                cyber: {
                    base: '#070B19',      // Dark background
                    neon: '#FF003C',      // Neon red glow
                    dim: '#4D0014',       // Dimmed red
                    panel: '#0B1124',     // Sub-panel bg
                    text: '#FFFFFF',      // Pure white text
                    subtext: '#A0AABF',   // Muted tech text
                    success: '#00FF41'    // Bright hacker green
                }
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                orbitron: ['Orbitron', 'sans-serif'],
                rajdhani: ['Rajdhani', 'sans-serif'],
            },
            animation: {
                'slide-up': 'slideUp 0.3s ease-out forwards',
                'pulse-neon': 'pulseNeon 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
            },
            keyframes: {
                slideUp: {
                    '0%': { transform: 'translateY(20px)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                },
                pulseNeon: {
                    '0%, 100%': { opacity: 1, filter: 'drop-shadow(0 0 8px rgba(255, 0, 60, 0.8))' },
                    '50%': { opacity: .7, filter: 'drop-shadow(0 0 2px rgba(255, 0, 60, 0.3))' },
                }
            }
        },
    },
    plugins: [],
}
