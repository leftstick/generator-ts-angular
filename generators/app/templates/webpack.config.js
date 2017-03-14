const {resolve} = require('path');
const merge = require('webpack-merge');
const commonConfig = require('./webpack.config.common');

module.exports = merge(commonConfig, {
    output: {
        path: resolve(__dirname, 'build'),
        filename: '[name].bundle.js',
        chunkFilename: '[id].bundle.js',
        publicPath: '/'
    },
    devtool: '#source-map',
    devServer: {
        historyApiFallback: false,
        stats: 'minimal',
        port: 8080,
        host: '0.0.0.0'
    }
});
