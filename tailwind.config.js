/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        amiri: ['Amiri', 'serif'],
      },
      translate: {
        '1.25': '0.3125rem', // Giữ định nghĩa translate-x-1.25 từ trước
      },
      padding: {
        '15': '3.75rem', // Định nghĩa p-15 tương ứng với 60px (3.75rem * 16px per rem)
      },
    },
  },
  plugins: [],
};