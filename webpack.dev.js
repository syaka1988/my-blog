const common = require('./webpack.common.js');
const merge = require('webpack-merge');

const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = merge(common, {
  devtool: 'inline-source-map',
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html",
      vuejsname: "vue.js"
    })
  ]
});
