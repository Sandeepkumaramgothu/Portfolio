/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                tech: {
                    blue: '#0EA5E9',   // Primary Cyan/Blue
                    dark: '#0F172A',   // Navy/Dark for contrasts (Blade)
                    light: '#F1F5F9',  // Background White/Slate
                    paper: '#F8FAFC',  // Scroll background
                    accent: '#6366F1', // Indigo accent
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
