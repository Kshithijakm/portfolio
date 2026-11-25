/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      colors: {
        accent: {
          50: '#eef6ff',
          100: '#d9ebff',
          200: '#bcddff',
          300: '#8ec8ff',
          400: '#59a9ff',
          500: '#3385ff',
          600: '#1c64f2',
          700: '#144ee0',
        },
      },
    },
  },
  plugins: [],
};
