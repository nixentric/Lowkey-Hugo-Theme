const themeDir = __dirname + '/../';
module.exports = {
    plugins: [
        require('tailwindcss')(themeDir + './config/tailwind.config.js'),
        require('autoprefixer')({
            path: [themeDir]
        }),
        ...process.env.NODE_ENV === 'production' ? [cssnano] : []
    ]
}