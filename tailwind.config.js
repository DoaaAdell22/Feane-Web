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
      },
     
    },
  },
  plugins: [],
}