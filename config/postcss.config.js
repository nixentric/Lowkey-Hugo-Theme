const themeDir = __dirname + "/../";

// Minification is done by Hugo's `minify` in head/styles.html.
module.exports = {
  plugins: [
    require("tailwindcss")(themeDir + "./config/tailwind.config.js"),
    require("autoprefixer"),
  ],
};
