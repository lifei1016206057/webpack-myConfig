# webpack通用配置

1. module.rules可导入文件配置
    1. vue
    2. css
    3. sass
    4. png|jpg|gif|svg
    5. js
    6. ts
2. 区分环境, 开发环境dev, 生产环境pro. 通过环境变量获取. 不同的配置在不同的配置文件
    1. 测试环境配置:config/webpack.dev.js 
    2. 生产环境配置: webpack/prod.js
    3. 通用配置: webpack.common.js
    4. 入口: webpack.config.js
3. entry, output
4. sourceMap:包括js, ts, vue的sourceMap
5. 热更新: 包括js, ts, vue
6. ts: 单独的ts文件, 在vue中使用ts
7. vue
8. vuex
9. vue-router
10. elementUI
11. html-webpack-plugin
12. webpack-dev-serve
13. 给build之后的文件加hash, 防止浏览器缓存
14. resolve 解析
    1. extensions: 在import导入的时候,如果没有注明后缀名时使用的默认后缀
    2. alias: 路径别名
15. jest



# tip

1. `npm i --save-dev` 等同于 `npm i -d `. 将插件保存到dev环境. `npm i --save`等同于`npm i -s`将插件保存到盛传环境. `npm i -dev`这种是错误写法.没有单独的-dev的参数.


