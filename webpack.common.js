const src = __dirname + "/src";
const dist = __dirname + "/dist"

const ExtractTextPlugin = require("extract-text-webpack-plugin")

module.exports = {
  context: src,
  entry: './js/index.js',
  output: {
    filename: 'index.min.js',
    path: dist
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          use: [
            {loader: 'css-loader', options: {minimize: true}},
            'sass-loader'
          ]
        })
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('style.css')
  ]
}
