## 初始化项目
  #### `npm init -y`

##  安装依赖
  #### `npm i -save-dev vue webpack vue-loader`
  #### `npm i -save-dev vue-template-compiler`

## 初始化webpack配置
  #### `npm add webpack webpack-cli -D `

## create webpack.config.js
 #### `在webpack中配置enter和soutput`
 #### `webpack只支持js类型的文件，要想支持vue这种文件，需要在module中配置rule`
 #### `使用vue-loader需要使用相应的插件，需要配置plugins(VueLoaderPlugin)`

## 创建入口文件
  #### `create src/main.js`
  #### `create src/app.vue file`

## 处理css
  #### `npm i -save-dev css-loader style-loader `
  #### `在module中配置rule`

### 图片处理
  #### `npm i -save-dev url-loader`
  #### `在module中配置rule`

## CSS 预处理 ---- 暂时可省略
  #### `npm i -save-dev stylus-loader`
  #### `在module中配置rule`


## 配置开发环境启动命令（webpack配置webpack-dev-server）
 #### `npm i -save-dev webpack-dev-server`
 #### `add build script in packages.json  ("dev": "webpack-dev-server")`
 #### `增加html-webpack-plugin, npm i html-webpack-plugin`
#### `配置 webpack.DefinePlugin(在使用了这个plugin之后我们可以在编译的过程以及我们开发的过程中通过process.env来调用NODE_ENV来进行判断)`


### 配置生产环境启动命令
  #### `add build script in packages.json  ("build": "webpack")`


### 区分不同环境
  #### `npm i cross-env`
  #### `修改build 和 dev脚本`
  #### `在webpack.config.js中进行判断`s


