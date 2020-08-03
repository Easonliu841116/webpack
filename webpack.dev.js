const { merge } = require('webpack-merge')
const commonConfig = require('./webpack.common')

const devConfig = {
  mode: 'development',
  devServer: {
    // watchContentBase: true,
    // contentBase: path.resolve(__dirname, 'static'),
    inline: true,
    open: true,
    // host: '0.0.0.0',
    // port: 8080
    // disableHostCheck: false
  }
}

module.exports = merge(commonConfig, devConfig)