const {resolve} = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const commonConfig = require('./webpack.config.common');

module.exports = merge(commonConfig, {
    output: {
        path: resolve(__dirname, 'dist'),
        filename: '[name].[hash].bundle.js',
        chunkFilename: '[id].[hash].bundle.js',
        publicPath: '/'
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    ]
});
