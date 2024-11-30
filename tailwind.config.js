/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
    },
    extend: {
      colors: {
        white: '#FFFFFF',
        'black-1': '#000000',
        'black-2': '#1A1A1A',
        'black-3': '#121212',
        'black-4': '#090D1F',
        purple: '#6941C6',
        pink: '#C11574',
        blue: '#3538CD',
        green: '#027A48',
        'red-burnt': '#C4320A',
        'pink-dark': '#C01048',
        'blue-dark-1': '#363F72',
        'blue-dark-2': '#026AA2',
        'gray-1': '#667085',
        'gray-2': '#9FA5B3',
        'gray-3': '#C0C5D0',
        'gray-4': '#EAECF0',
        'gray-5': '#F8F9FC',
        'gray-6': '#EFEFEF',
        'soft-purple-1': '#F9F5FF',
        'soft-purple-2': '#EEF4FF',
        'soft-blue': '#F0F9FF',
        'soft-green': '#ECFDF3',
        'soft-yellow': '#FFF6ED',
        'soft-pink-1': '#FDF2FA',
        'soft-pink-2': '#FFF1F3',
        'light-gray-transparent': 'rgba(234, 236, 240, 0.34)',
        'black-transparent': 'rgba(0, 0, 0, 0.34)',
      },
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
      margin: {
        0.5: '0.125rem',
        7.5: '30px',
        19: '75px',
      },
      padding: {
        7.5: '30px',
      },
      borderRadius: {
        '3.5xl': '1.8125rem',
      },
      fontSize: {
        'display-mobile': '4.5rem',
        'display-tablet': '10.05rem',
        'display-desktop': '15.2375rem',
      },
      height: {
        50: '12.5rem',
        57: '14.25rem',
        62: '15.375rem',
      },
      width: {
        85.5: '21.375rem',
      },
    },
  },
  plugins: [],
};
