// eslint-disable-next-line import/no-extraneous-dependencies
const HtmlWebpackPlugin = require('html-webpack-plugin');
// eslint-disable-next-line import/no-extraneous-dependencies
const HtmlWebpackRootPlugin = require('html-webpack-root-plugin');
const path = require('path');
const webpack = require('webpack');

module.exports = {
  mode: 'development',
  entry: {
    app: [
      path.join(__dirname, 'src/index.js'),
      'webpack-hot-middleware/client?path=/__webpack_hmr&reload=true',
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'App',
    }),
    new HtmlWebpackRootPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  ],
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000,
  },
};
