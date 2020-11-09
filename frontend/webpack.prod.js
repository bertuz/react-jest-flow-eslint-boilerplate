// eslint-disable-next-line import/no-extraneous-dependencies
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  devtool: 'hidden-source-map',
  optimization: {
    minimizer: [new UglifyJsPlugin({ extractComments: true })],
  },
};
