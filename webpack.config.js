// Libraries depencies
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var filePath = require('path');

// Paths where the app is hosted
var publicPath = 'public/';
var appPath = 'app/';

// fullpaths to build app
var buildPath = filePath.resolve(__dirname, publicPath);
var developPath = filePath.resolve(__dirname, appPath);

// settings
module.exports = {
    // index file to generate app
    entry: developPath + '/app.jsx',

    // output settings
    output: {
        filename: 'build.js',
        path: buildPath,
        publicPath: ''
    },

    // devtools
    devtool: 'source-map',

    // modules & loaders
    module: {
        loaders: [
            // watch all files scss to build css file
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                loader: ExtractTextPlugin.extract('css!sass')
            },
            // load all the fonts and icons
            {
                test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
                exclude: /node_modules/,
                loader: 'file-loader'
            },
            // watch all files jsx to generate build.js file
            {
                test: /\.jsx?/,
                include: developPath,
                exclude: /node_modules/,
                loader: 'babel'
            }
        ]
    },

    // plugins
    plugins: [
        new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.js'),
        new ExtractTextPlugin('main.css'),
        new webpack.DefinePlugin({
            "process.env": {
                NODE_ENV: JSON.stringify("development")
            }
        })
    ]
};