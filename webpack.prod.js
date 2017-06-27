'use strict'

const path = require('path')
const config = require('./config.js')
const webpack = require('webpack')
const QiniuPlugin = require('qn-webpack')
const cdn_config = config.cdn

module.exports = qiniuPlugin(cdn_config)

function qiniuPlugin(cdn) {
  if (cdn.ak && cdn.sk && cdn.buket && cdn.path) {
    return {
      output: {
        publicPath: cdn_config.publicPath
      },
      plugins: [
        new webpack.optimize.UglifyJsPlugin(),
        new QiniuPlugin({
          accessKey: cdn.ak,
          secretKey: cdn.sk,
          bucket: cdn.bucket,
          path: cdn.path
        })
      ]
    }
  } else {
    return {
      plugins: [
        new webpack.optimize.UglifyJsPlugin(),
      ]
    }
  }
}
