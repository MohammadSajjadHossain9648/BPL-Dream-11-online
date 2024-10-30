/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white_color: 'rgb(255, 255, 255)',
        shade_white_color_1: 'rgba(255, 255, 255, 0.7)',
        shade_white_color_2: 'rgba(255, 255, 255, 0.6)',


        black_color: 'rgb(19, 19, 19)',
        shade_black_color_1: 'rgba(19, 19, 19, 0.7)',
        shade_black_color_2: 'rgba(19, 19, 19, 0.6)',
        shade_black_hr_color: 'rgba(19, 19, 19, 0.1)',
        shade_black_placeholder_color: 'rgba(19, 19, 19, 0.4)',
        shade_black_bg_color: 'rgba(19, 19, 19, 0.05)',

        yellow_color: 'rgb(231, 254, 41)',

        blue_color: 'rgb(6, 9, 26)',
        greenish_blue_color: 'rgb(4, 13, 17)',
      },
    },
  },
  plugins: [require('daisyui'),],
}

