const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const WorkboxPlugin = require('workbox-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    entry: {
        index: './src/index.js',
        vendor: [
            'lodash'
        ]
        // print: './src/print.js'
    },
    output: {
        filename: '[name].[chunkhash].js',
        path: path.resolve(__dirname, 'dist')
    },
    // devtool: 'inline-source-map',
    // devServer: {
    //     contentBase: '/dist',
    //     hot: true
    // },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader','css-loader']
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: ['file-loader']
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            title: 'Output Management'
        }),
        new webpack.HashedModuleIdsPlugin(),
        // new WorkboxPlugin({
        //     clientsClaim: true,
        //     skipWaiting: true
        // })
        // new webpack.NamedModulesPlugin(),
        // new webpack.HotModuleReplacementPlugin(),
        // new UglifyJSPlugin()
    ]
};

/**
 * devServer
 * entry
 * new HtmlWebpackPlugin
 * 
 */