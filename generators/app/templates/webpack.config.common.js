const {resolve} = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        externals: resolve(__dirname, 'ts', 'core', 'externals', 'index.ts'),
        app: resolve(__dirname, 'ts', 'index.ts')
    },
    resolve: {
        extensions: ['.ts', '.js', '.css']
    },
    module: {
        exprContextCritical: false,
        rules: [
            {
                test: /\.ts$/,
                use: ['ng-annotate-loader', 'ts-loader', 'tslint-loader']
            },
            {
                test: /\.(png)$/,
                use: ['file-loader']
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true
                        }
                    }
                    ,
                    'postcss-loader']
            }
        ]
    },

    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: 'externals',
            minChunks: Infinity
        }),

        new HtmlWebpackPlugin({
            filename: 'index.html',
            inject: 'body',
            template: resolve(__dirname, 'index.html'),
            favicon: resolve(__dirname, 'img', 'favicon.ico'),
            hash: false
        })
    ]
};
