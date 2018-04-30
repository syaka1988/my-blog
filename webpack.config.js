const src = __dirname + "/src";
const dist = __dirname + "/dist"

const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  context: src,
  entry: './js/index.js',
  output: {
    filename: 'index.min.js',
    path: dist
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html"
    })
  ]
};
