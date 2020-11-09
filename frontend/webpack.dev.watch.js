const path = require('path');
const webpack = require('webpack');
const { merge } = require('webpack-merge');

const devConfig = require(`./webpack.dev`);

module.exports = merge(devConfig, {
  mode: 'development',
  entry: {
    app: [
      path.join(__dirname, 'src/index.js'),
      'webpack-hot-middleware/client?path=/__webpack_hmr&reload=true',
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000,
  },
});
