module.exports = {
  app: {
    root: './src',
    jsentry: './src/main.js',
    htmlentry: './src/index.html',
    output: './dist/'
  },

  cdn: {},

  devserver: {
    port: 8090,
    proxy: {},
    browserSync: {
      //是否使用browserSync自动刷新页面
      isUse: true,
      conf: {
        host: "fangshan.com",
        open: "external",
        port: 8080,
        proxy: {
          target: "fangshan.com:8090"
        }
      }
    }
  }


}
