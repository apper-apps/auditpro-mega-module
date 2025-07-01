/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#f0f4f8',
          100: '#d9e6f1',
          200: '#b8d0e5',
          300: '#8bb3d6',
          400: '#5c92c5',
          500: '#3b76b4',
          600: '#2d5fa3',
          700: '#1e3a5f',
          800: '#1a3355',
          900: '#162d4a',
        },
        sky: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#4a90e2',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
        teal: {
          50: '#f0fdfa',
          100: '#ccfbf1',
          200: '#99f6e4',
          300: '#5eead4',
          400: '#2dd4bf',
          500: '#00d4aa',
          600: '#0d9488',
          700: '#0f766e',
          800: '#115e59',
          900: '#134e4a',
        }
      },
      fontFamily: {
        display: ['Plus Jakarta Sans', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      borderRadius: {
        'card': '8px',
        'button': '6px',
      },
      boxShadow: {
        'card': '0 2px 4px 0 rgba(0, 0, 0, 0.1)',
        'card-hover': '0 4px 12px 0 rgba(0, 0, 0, 0.15)',
        'elevation': '0 8px 24px 0 rgba(0, 0, 0, 0.12)',
      }
    },
  },
  plugins: [],
}