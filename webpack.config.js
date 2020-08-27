const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const htmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

const env = process.env.NODE_ENV;

const config = {
  entry: path.join(__dirname, "src/main.js"),
  output: {
    filename: 'vue.esm.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(png|jpeg|gif|jpg|svg)$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: '[img/[name].[hash:8].[ext]s'
        }
      },
      {
        test: /\.styl$/,
        use: [
          'style-loader',
          'css-loader',
          'stylus-loader'
        ]
      },
    ]
  },
  plugins: [
    // 在使用了这个plugin之后我们可以在编译的过程以及我们开发的过程中通过process.env来调用NODE_ENV来进行判断
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: env === "development" ? '"development"' : '"production"'
      }
    }),
    new VueLoaderPlugin(),
    new htmlWebpackPlugin(),
  ]
};
if (env === "development") {
  config.devServer = {
    port: 3030,
    host: '0.0.0.0'
  }
}

module.exports = config;