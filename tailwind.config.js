/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                samurai: {
                    red: '#D00000', // Deep crimson
                    dark: '#050505', // Void black
                    gold: '#FFD700', // Katana accent
                    silver: '#E5E7EB', // Blade edge
                }
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                // suggest adding a more angular font if possible, but sticking to sans for now
            },
            animation: {
                'slide-up': 'slideUp 0.3s ease-out forwards',
            },
            keyframes: {
                slideUp: {
                    '0%': { transform: 'translateY(20px)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                }
            }
        },
    },
    plugins: [],
}
