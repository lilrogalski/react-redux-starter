const webpack = require('webpack')
const path = require('path')
const postcssImport = require('postcss-import')
const postcssNext = require('postcss-cssnext')

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
    extensions: ['*', '.js'],
    alias: {
      'videojs-contrib-dash': path.resolve(__dirname, './node_modules/videojs-contrib-dash/src/js/videojs-dash.js'),
      webworkify: 'webworkify-webpack-dropin'
    }
  },
  devtool: 'source-map',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
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
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
              sourceMap: true,
              localIdentName: '[local]___[hash:base64:5]'
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
        test: /\.svg$/,
        use: ['file-loader']
      }
    ]
  }
}
