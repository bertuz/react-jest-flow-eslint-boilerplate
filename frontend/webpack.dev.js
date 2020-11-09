const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackRootPlugin = require('html-webpack-root-plugin');
const ReactRootPlugin = require('html-webpack-root-plugin');
const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    app: [path.join(__dirname, 'src/index.js')],
  },
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, '../dist/frontend'),
  },
  devtool: 'inline-source-map',
  plugins: [
    new HtmlWebpackPlugin({
      title: 'App',
    }),
    // new HtmlWebpackRootPlugin(),
    //   new ReactRootPlugin()
  ],
};
