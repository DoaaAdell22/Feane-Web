/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage : {
        'bg1' : 'url("/public/bg-hero.jpg")'
      },
      animation: {
        'slow-spin': 'spin 20s linear infinite',
        'ani-image': 'bounce 1.5s infinite linear'      },
        // keyframes: {
        //   bounce: {
        //     '0%, 100%': { transform: 'translateY(0)' },
        //     '50%': { transform: 'translateY(-25px)' },
        //   }
        //   }
    },
  },
  plugins: [],
}