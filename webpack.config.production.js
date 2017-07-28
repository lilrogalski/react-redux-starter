const webpack = require('webpack')
const path = require('path')
const autoprefixer = require('autoprefixer')
const postCssNext = require('postcss-cssnext')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  entry: {
    'index': [
      'babel-polyfill',
      './app/index.js',
    ],
  },
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  resolve: {
    extensions: ['', '.js']
  },
  plugins: [
    new ExtractTextPlugin('styles.css'),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        drop_console: true
      }
    })
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        include: path.join(__dirname, 'app')
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract(
          'style-loader',
          'css-loader?modules=true&localIdentName=[name]__[local]___[hash:base64:5]',
          'postcss-loader'
        )
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
        loader: 'file-loader?name=fonts/[name].[ext]' 
      }
    ]
  },
    postcss: function () {
      return [autoprefixer, postCssNext]
  },
}
