var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: './src/app.js',
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      test: /\.scss$/,
      use: ExtractTextPlugin.extract({
        fallback: "style-loader",
        use: ['css-loader', 'sass-loader']
      })
    }]
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 9000,
    stats: "errors-only",
    open: true

  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'My AppProject',
      // minify: {
      //   collapseWhitespace: true,
      // },
      hash: true,
      template: './src/index.html'
    }),
    new ExtractTextPlugin("app.css")
  ]
}