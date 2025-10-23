/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        customBlue: '#249AD6',
      },
      fontFamily: {
        pixelify: ['Pixelify Sans', 'sans-serif'],
      },
      maxWidth: {
        '1440': '1440px',
      },
    },
  },
  plugins: [],
};
