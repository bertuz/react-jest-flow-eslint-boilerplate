const path = require('path');
const webpack = require('webpack');
const { merge } = require('webpack-merge');

const devConfig = require(`./webpack.dev`);

module.exports = merge(devConfig, {
  mode: 'development',
  entry: {
    app: ['webpack-hot-middleware/client?path=/__webpack_hmr&reload=true'],
  },
  //todo must be activated
  // plugins: [new webpack.HotModuleReplacementPlugin()],
});
