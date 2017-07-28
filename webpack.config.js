const webpack = require('webpack')
const path = require('path')
const postcssImport = require('postcss-import')
const postcssNext = require('postcss-cssnext')
const CssOptions = '?modules=true&localIdentName=[local]___[hash:base64:5]'

module.exports = {
  entry: [
    'webpack-dev-server/client?http://localhost:5000',
    'webpack/hot/dev-server',
    './app/index'
  ],
  output: {
    path: __dirname,
    filename: 'bundle.js',
    publicPath: '/'
  },
  resolve: {
    extensions: ['', '.js']
  },
  devtool: 'eval-source-map',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel'],
        include: path.join(__dirname, 'app')
      },
      {
        test: /\.css$/, 
        loader: `style-loader!css-loader${CssOptions}!postcss`
      },
      {
        test: /\.yaml$/,
        loader: 'json!yaml'
      },
      { 
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, 
        loader: 'url-loader?limit=10000&mimetype=application/font-woff' 
      },
      { 
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, 
        loader: 'file-loader' 
      }
    ]
  },
    postcss: function () {
      return [
        postcssImport, 
        postcssNext
      ]
  },
}
