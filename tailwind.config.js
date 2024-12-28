/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {
      padding: {
        '50': '50%',
      }
    },
    screens: {
      'xs': '576px', // Menambahkan breakpoint baru
      'sm': '640px', // Breakpoint default untuk small
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
  },
  plugins: [],
}

