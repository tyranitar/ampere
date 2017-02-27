const webpack = require('webpack');
const path = require('path');

const babelLoader = {
    test: /\.jsx?$/,
    exclude: /node_modules/,
    loader: 'babel-loader',

    query: {
        presets: [ 'react', 'es2015', 'stage-0' ]
    }
};

module.exports = {
    context: path.join(__dirname, 'src', 'public', 'js'),

    entry: [
        './app.js'
    ],

    module: {
        loaders: [ babelLoader ]
    },

    output: {
        path: path.join(__dirname, 'src', 'public', 'js'),
        filename: 'app.min.js'
    }
}