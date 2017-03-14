var HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './src/app.js',
  output: {
    path: 'dist',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {test: /\.scss$/, use: ['style-loader','css-loader','sass-loader']}
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'My AppProject',
      minify: {
        collapseWhitespace: true,
      },
      hash: true,
      template: './src/index.html'
    })
  ]
}