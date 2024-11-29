/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
    },
    extend: {
      container: {
        center: true,
        screens: {
          sm: '100%',
          md: '100%',
          lg: '1216px',
          xl: '1216px',
          '2xl': '1216px',
        },
      },
    },
  },
  plugins: [],
};
