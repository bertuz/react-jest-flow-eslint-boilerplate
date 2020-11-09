const path = require('path');

module.exports = {
  mode: 'development',
  // entry: {
  //   app: [path.join(__dirname, 'src/index.js')],
  // },
  devtool: 'inline-source-map',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, '../dist/frontend'),
  },
  plugins: [],
};
