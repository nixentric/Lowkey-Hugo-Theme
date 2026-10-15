const path = require('path');

const themeDir = path.join(__dirname, '..');

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    `${themeDir}/layouts/**/*.html`,
    // Site overrides and content. Hugo runs PostCSS from the site root.
    './layouts/**/*.html',
    './content/**/*.{html,md}',
  ],
  // Classes added by Hugo's Markdown renderer or MathJax, never written in templates.
  safelist: ['footnotes', 'MathJax_Display'],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['"Inter"', '-apple-system', 'BlinkMacSystemFont', 'avenir next', 'avenir', 'segoe ui', 'helvetica neue', 'helvetica', 'Cantarell', 'Ubuntu', 'roboto', 'noto', 'arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

