/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs':{'min':'320px', 'max':'639px'},
        // => @media (min-width: 320px) { ... }
      },
    },
  },
  plugins: [],
}

