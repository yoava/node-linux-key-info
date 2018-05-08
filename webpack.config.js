const path = require('path');

module.exports = {
  entry: './index.js',
  devtool: 'source-map',
  output: {
    filename: './linux-key-info.min.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
