const merge = require('webpack-merge')
const path = require('path')
const config = require('./config.js').app
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
var common = {
  entry: {
    main: config.jsentry,
    vendor: [
      'vue',
      'vue-router',
      'axios',
      'form-urlencoded',
      './src/lib/polyfill.min.js',
    ]
  },
  output: {
    path: path.join(__dirname, config.output),
    filename: '[name]-[hash].js',
    publicPath: '/'
  },
  module: {
    loaders: [{
      test: /\.vue$/,
      loader: 'vue-loader'
    }, {
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: /node_modules/,
    }, {
      test: /\.css$/,
      loader: 'css-loader'
    }, {
      test: /\.(png|jpg|gif|svg|woff|eot|ttf)$/,
      loader: 'file-loader?name=[path][name]-[hash].[ext]'
    }, {
      test: /\.html$/,
      loader: 'html-loader'
    }]
  },
  resolve: {
    alias: {
      'src': path.resolve(__dirname, './src')
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html'
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: 'base-[hash].js'
    }),
  ]
}

module.exports = function (env) {
  var envconfig = require(`./webpack.${env}.js`)
  return merge(common, envconfig)
}
