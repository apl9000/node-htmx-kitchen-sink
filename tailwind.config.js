/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,html,hbs}'],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
};
