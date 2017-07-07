const { resolve } = require('path')

module.exports = {
  entry: resolve(__dirname, 'client/index.js'),
  output: {
    path: resolve(__dirname, 'dist'),
    publicPath: 'dist',
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: [
          'babel-loader',
        ],
        exclude: /(node_modules)/,
      },
    ],
  }
}
