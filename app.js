const fs = require('fs')
const path = require('path')
const config = require('./config.js')
const express = require('express')
const gulp = require('gulp')
const webpack = require('webpack')
const merge = require('webpack-merge')
const webpack_config = require('./webpack.config.js')('dev')
const proxy = require('http-proxy-middleware')
const port = config.devserver.port
const browserConfig = config.devserver.browserSync
const browserSync = require('browser-sync').create()
const reload = browserSync.reload
const app = express()


const compiler = webpack(webpack_config)

compiler.watch({
  aggregateTimeout: 100
}, function (err, stats) {
  if (browserConfig.isUse) {
    reload();
  }
})

app.use(function (req, res, next) {
  console.log('%s %s - %s', new Date().toISOString(), req.method, req.url)
  return next()
})

var proxyTable = config.devserver.proxy
Object.keys(proxyTable).forEach(function (context) {
  var options = proxyTable[context]
  if (typeof options === 'string') {
    options = {
      target: options,
    }
  }
  app.use(proxy(context, options))
})

app.use('/', express.static(config.app.output))

app.use('/', function (req, res) {
  var indexHtml = fs.readFileSync(config.app.output + '/index.html')
  res.header('Content-Type', 'text/html')
  res.end(indexHtml)
})

app.listen(port, function () {
  console.log([
    'Listening on port ' + port + ',',
  ].join('\n'))
})

if (browserConfig.isUse) {
  browserSync.init(
    browserConfig.conf
  );
}