const autoprefixer = require('autoprefixer');
const nested = require('postcss-nested');

module.exports = {
    plugins: [
        autoprefixer({
            browsers: ['last 5 versions']
        }),
        nested
    ]
};
