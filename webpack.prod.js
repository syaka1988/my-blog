const common = require('./webpack.common.js');
const merge = require('webpack-merge');

const HtmlWebpackPlugin = require('html-webpack-plugin')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = merge(common, {
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html",
      vuejsname: "vue.min.js"
    })
  ]
});
