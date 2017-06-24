# website-fangshan
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

1.browser-sync 用于自动刷新页面，如果不需要可以在config.js中将

```javascript
browserSync：{
   isUse:false
}
```
