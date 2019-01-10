const path = require('path');
module.exports = {
  // mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  resolve: {
    extensions: ['.json', '.js', '.jsx', '.css']
  },
  // devtool: 'source-map',
  devServer: {
    publicPath: path.join('/dist/')
  }
};