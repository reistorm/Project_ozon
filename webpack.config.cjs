// webpack.config.cjs
const path = require('path'); // Используем require вместо import

module.exports = {
  mode: 'development', // или 'production'
  module: {
    rules: [
      {
        test: /.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  }
};