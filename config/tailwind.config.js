/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',  
  purge: [
      "./themes/**/layouts/**/*.html",
      "./content/**/layouts/**/*.html",
      "./layouts/**/*.html",
      "./content/**/*.html",
      "./content/**/*.md",
      "./public/**/*.html",
    ],
    content: [
      "./themes/**/layouts/**/*.html",
      "./content/**/layouts/**/*.html",
      "./layouts/**/*.html",
      "./content/**/*.html",
      "./content/**/*.md",
      "./public/**/*.html",
    ],
    theme: {
      extend: {
        fontFamily: {
          'sans' : ['"Inter"', '-apple-system' , 'BlinkMacSystemFont', 'avenir next', 'avenir', 'segoe ui', 'helvetica neue', 'helvetica', 'Cantarell', 'Ubuntu', 'roboto', 'noto', 'arial', 'sans-serif'],
        },
      },
    },
    plugins: [],
    variants: ['group-hover'],
  }
  
