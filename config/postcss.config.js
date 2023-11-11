const themeDir = __dirname + '/../';

const purgecss = require("@fullhuman/postcss-purgecss")({
    content: ["./hugo_stats.json"],
    defaultExtractor: (content) => {
      const els = JSON.parse(content).htmlElements;
      return [...(els.tags || []), ...(els.classes || []), ...(els.ids || [])];
    },
    safelist: [],
  });

module.exports = {
    plugins: [
        require('tailwindcss')(themeDir + './config/tailwind.config.js'),
        require('autoprefixer')({ path: [themeDir] })
    ]
}

