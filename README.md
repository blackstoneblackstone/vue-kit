# vue+jade+stylus KIT脚手架
node <6.0 && npm > 5.0

## 第一步 安装依赖
npm run update

## 第二步 复制配置文件
修改配置文件 config.js

## 第三步 启动项目
前端环境：npm run dev

浏览器： localhost:端口号 (默认80) //端口可以在app.js中修改
更新依赖
npm run update


## 可能遇到的问题

1. uglifyjs版本更新问题 

```bash
 // run dev 时报错：
 function (exports, require, module, __filename, __dirname) { throw "uglifyjs is deprecated - use uglify-js instead.";
                                                               ^
 uglifyjs is deprecated - use uglify-js instead.
```
原因是 uglifyjs 版本升级到 uglify-js，之前的不能用了，如果你用了gulp-jstrans 1.0.0版本，该
版本用的还是 uglifyjs，所以会报错。

**解决方法** 是：

在node_modules文件夹下，找到gulp-jstrans里的index.js里的

var UglifyJS = require('uglifyjs');改成 var UglifyJS = require('uglify-js');

```javascript
var through = require('through2');
var gutil = require('gulp-util');
var UglifyJS = require('uglify-js');
var PluginError = gutil.PluginError;
```

2.browser-sync 用于自动刷新页面，如果不需要可以在config.js中将

```javascript
browserSync：{
   isUse:false
}
```
