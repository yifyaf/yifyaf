// let webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

  // This code will be compiled
  entry: "./app/app.js",

  // Then output into this file
  output: {
    filename: "public/bundle.js",
    publicPath: '/'
  },

  // This will be what we do
    module: {
    loaders: [
      {
        test: /\.jsx?$/,
        // only process files in app folder
        include: /app/,
        loader: 'babel-loader',
        query: {
          // transformations
          "presets": ["es2015", "stage-0", "react"]
        },
        rules: [{
          test: /\.scss$/,
          use: [{
              loader: "style-loader" // creates style nodes from JS strings
          }, {
              loader: "css-loader" // translates CSS into CommonJS
          }, {
              loader: "sass-loader" // compiles Sass to CSS
          }]
        }]
      }
    ]
  },
  devtool: "eval-source-map",
  devServer: {
    historyApiFallback: true,
  }
}