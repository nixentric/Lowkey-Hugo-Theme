/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/themes/**/layouts/**/*.html",
    "./src/content/**/layouts/**/*.html",
    "./src/layouts/**/*.html",
    "./src/content/**/*.html",
    "./src/content/**/*.md",
    "./src/public/**/*.html",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['"Inter"', '-apple-system', 'BlinkMacSystemFont', 'avenir next', 'avenir', 'segoe ui', 'helvetica neue', 'helvetica', 'Cantarell', 'Ubuntu', 'roboto', 'noto', 'arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
  variants: ['group-hover'],
}

