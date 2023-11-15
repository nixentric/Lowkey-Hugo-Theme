const themeDir = __dirname + "/../";

const cssnanoPlugin = require("cssnano")({
  path: [themeDir],
  preset: [
    "default",
    {
      discardComments: {
        removeAll: true,
      },
    },
  ],
});

module.exports = {
  plugins: [
    require("tailwindcss")(themeDir + "./config/tailwind.config.js"),
    require("autoprefixer")({ path: [themeDir] }),
    ...(process.env.HUGO_ENVIRONMENT === "production" ? [cssnanoPlugin] : []),
  ],
};
