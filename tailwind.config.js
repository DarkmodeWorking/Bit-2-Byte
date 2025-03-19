/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        glow: 'glow 1.5s infinite alternate',
      },
      keyframes: {
        glow: {
          '0%': { opacity: '0.4', transform: 'scale(1)' },
          '100%': { opacity: '1', transform: 'scale(1.2)' },
        }
      }
    }
  },
  plugins: [],
}

