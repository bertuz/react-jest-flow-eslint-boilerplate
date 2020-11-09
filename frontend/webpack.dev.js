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
  plugins: [],
};
