// tailwind.config.js

/** @type {import('tailwindcss').Config} */
/* src/index.css */


module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Include all JS, JSX, TS, and TSX files in the src directory
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1D4ED8', // Example custom color
        secondary: '#F59E0B', // Example custom color
      },
      spacing: {
        '128': '32rem', // Custom spacing example
      },
      // You can add more customizations here
    },
  },
  plugins: [
    // Add any plugins you need here
  ],
};
