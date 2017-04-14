const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const isProd = process.env.NODE_ENV === 'production'; // true
const cssDev = ['style-loader', 'css-loader', 'sass-loader'];

const cssProd = ExtractTextPlugin.extract({
  fallback: "style-loader",
  use: ['css-loader', 'sass-loader']
});
const cssConfig = isProd ? cssProd : cssDev;

module.exports = {
  entry: {
    app: './src/app.js',
    contact: './src/contact.js'
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: '[name].js'
  },
  module: {
    rules: [{
        test: /\.scss$/,
        use: cssConfig
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.jpg$/,
        loader: "file-loader"
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 9000,
    hot: true,
    stats: "errors-only",
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'My AppProject',
      // minify: {
      //   collapseWhitespace: true,
      // },
      hash: true,
      excludeChunks: ['contact'],
      template: './src/index.html'
    }),
    new HtmlWebpackPlugin({
      title: 'My Contact',
      hash: true,
      chunks: ['contact'],
      filename: 'contact.html',
      template: './src/contact.html'
    }),
    new ExtractTextPlugin({
      filename: "app.css",
      disable: !isProd,
      allChunks: true
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin()
  ]
}