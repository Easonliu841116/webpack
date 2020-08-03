const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')

const commonConfig = {
  context: path.resolve(__dirname, 'src'),
  entry: {
    index: ['./index.js'],
    about: ['./about.js']
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },
  plugins: [
    new htmlWebpackPlugin({
      template: 'index.html',
      filename: 'index.html',
      chunks: ['index'],
      minify: false
    })
  ]
}

module.exports = commonConfig