/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primaryBg': '#151925',
        'secondaryBg': '#353846',
        'primaryBtn': '#01EEFF',
      },
      boxShadow: {
        '3xl': '0 15px 60px 15px rgba(0, 0, 0, 0.3)',
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: ["light"],
  },
}