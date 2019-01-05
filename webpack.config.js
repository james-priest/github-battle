const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './app/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index_bundle.js'
  },
  module: {
    rules: [
      { test: /\.(js)$/, use: 'babel-loader' },
      { test: /\.css$/, use: ['style-loader', 'css-loader'] }
    ]
  },
  mode: 'development',
  plugins: [
    new HtmlWebpackPlugin({
      template: './app/index.html'
    })
  ],
  devServer: {
    port: 9000,
    // open: 'Google Chrome Canary',
    // open: true,
    // lazy: false,
    contentBase: 'app',
    watchContentBase: true
  }
};
// console.log(`__dirname: ${__dirname}`)
