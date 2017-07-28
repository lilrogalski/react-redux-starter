const webpack = require('webpack')
const path = require('path')
const autoprefixer = require('autoprefixer')
const postcssImport = require('postcss-import')
const postcssNext = require('postcss-cssnext')
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
    extensions: ['*', '.js']
  },
  plugins: [
    new ExtractTextPlugin('styles.css'),
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
    rules: [
      {
        test: /\.js$/,
        loaders: ['babel-loader'],
        include: path.join(__dirname, 'app'),
      },
      {
        test: /\.css$/, 
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
              sourceMap: true,
              localIndentName: '[local]___[hash:base64:5]',
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: () => {
                return [
                  postcssImport, 
                  postcssNext
                ]
              }
            }
          }
        ]
      },
      {
        test: /\.yaml$/,
        use: [
          'json-loader',
          'yaml-loader'
        ]
      },
      { 
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, 
        use: ['url-loader?limit=10000&mimetype=application/font-woff']
      },
      { 
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, 
        use: ['file-loader']
      }
    ]
  }
}
