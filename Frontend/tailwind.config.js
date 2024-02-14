/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      textColor: {
        'sky': 'rgb(0, 136, 255)',
        'black': 'rgb(0,0,0)'
      },
    },
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    animation: {
      pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
    },
    keyframes: {
      pulse: {
        '0%, 100%': {
          opacity: 1,
        },
        '50%': {
          opacity: 0.5,
        },
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  }
};
