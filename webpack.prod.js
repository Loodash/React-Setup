const path = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

module.exports = () => {
  return {
    mode: 'production',
    performance: {
      hints: false,
      maxEntrypointSize: 512000,
      maxAssetSize: 512000
    },
    output: {
      publicPath: '/',
      path: path.resolve(__dirname, 'build'),
      filename: 'main.js'
    },
    module: {
      rules: [
        {
          test: /\.(jsx|js)$/,
          use: ['babel-loader']
        },
        {
          test: /\.(tsx|ts)$/,
          use: ['ts-loader']
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif|ico)$/,
          use: ['file-loader']
        },
        {
          test: /\.css$/i,
          use: ['style-loader', 'css-loader']
        },
        {
          test: /\.(woff|woff2|eot|ttf)$/,
          use: ['url-loader']
        }
      ]
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js']
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './public/index.html',
        favicon: './public/favicon.ico',
        title: 'React Setup'
      }),
      new webpack.ProvidePlugin({
        process: 'process/browser'
      }),
      new webpack.DefinePlugin({
        'process.env.API_URL': JSON.stringify('PROD')
      })
    ]
  }
}
