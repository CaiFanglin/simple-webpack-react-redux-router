var path = require('path');
var webpack = require('webpack');
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
                loaders: ['react-hot-loader', 'babel-loader?presets[]=es2015,presets[]=react'],
                include: path.resolve(__dirname, './src/js'),
            }
        ]
    },
    plugins: [
        new webpack.BannerPlugin('版权所有，翻版必究'),
        new HtmlwebpackPlugin({
            title: 'react-redux-router-webpack'
        })
    ],
    devServer: {
        historyApiFallback: true
    }
}