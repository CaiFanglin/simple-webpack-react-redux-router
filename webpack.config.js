var path = require('path');
var HtmlwebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: path.resolve(__dirname, './src/js/index.jsx'),
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, './build')
    },
    module: {
        loaders: [
            {
                test: /\.css$/,
                loader: 'style!css',
                include: path.resolve(__dirname, './src/css')
            },
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                include: path.resolve(__dirname, './src/js'),
                query: {
                    "presets": ["es2015", "react"]
                }
            }
        ]
    },
    plugins: [
        new HtmlwebpackPlugin({
            title: 'react-redux-router-webpack'
        })
    ]
}