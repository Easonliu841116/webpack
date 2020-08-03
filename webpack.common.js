const path = require('path')

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
}

module.exports = commonConfig