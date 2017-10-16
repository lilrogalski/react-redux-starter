const webpack = require('webpack')
const path = require('path')
const postcssImport = require('postcss-import')
const postcssNext = require('postcss-cssnext')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const CompressionPlugin = require('compression-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  entry: {
    'index': [
      'babel-polyfill',
      'whatwg-fetch',
      './app/index.js'
    ]
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
    new UglifyJSPlugin({
      uglifyOptions: {
        mangle: {
          safari10: true
        },
        compress: {
          warnings: false,
          drop_console: true
        }
      }
    }),
    new CompressionPlugin({
      asset: '[path].gz[query]',
      algorithm: 'gzip',
      test: /\.js$/,
      threshold: 10240,
      minRatio: 0.8
    }),
    new CopyWebpackPlugin([{
      from: 'images',
      to: 'images'
    }])
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        loaders: ['babel-loader'],
        include: [
          path.join(__dirname, 'app')
        ]
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [{
            loader: 'css-loader',
            options: {
              minimize: true,
              modules: true,
              sourceMap: true,
              localIdentName: '[hash:base64:5]'
            }

          },
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: () => [
                postcssImport,
                postcssNext
              ]
            }
          }]
        })
      },
      {
        test: /\.svg$/,
        use: ['file-loader']
      }
    ]
  }
}
