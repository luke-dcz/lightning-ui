/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./lib/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'default': {
          light: '#698082',
          DEFAULT: '#404E4F',
          dark: '#303a3b'
        },
      }
    },
  },
  plugins: [],
  darkMode: ['class']
}

