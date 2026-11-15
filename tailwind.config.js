/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        bg: 'rgb(var(--bg) / <alpha-value>)',
        surface: 'rgb(var(--surface) / <alpha-value>)',
        raised: 'rgb(var(--raised) / <alpha-value>)',
        ink: 'rgb(var(--ink) / <alpha-value>)',
        muted: 'rgb(var(--muted) / <alpha-value>)',
        line: 'rgb(var(--line) / <alpha-value>)',
        emerald: { DEFAULT: '#064E3B', deep: '#022C22' },
        gold: { DEFAULT: '#D4AF69', text: 'rgb(var(--gold-text) / <alpha-value>)' },
      },
      fontFamily: {
        bn: ['"Hind Siliguri"', '"Noto Sans Bengali"', 'sans-serif'],
        en: ['Poppins', 'sans-serif'],
        ar: ['Amiri', 'serif'],
      },
    },
  },
  plugins: [],
}
