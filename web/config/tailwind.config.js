/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: '#ffffff',
      primary: {
        DEFAULT: '#8465CA',
        dark: '#442D72',
      },
      black: '#000000',
      gray: '#9ca3af',
    },
    extend: {},
  },
  plugins: [require('@tailwindcss/forms')],
}
