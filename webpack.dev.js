const path = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

module.exports = () => {
  return {
    mode: 'development',
    devtool: 'cheap-source-map',
    devServer: {
      static: {
        directory: path.join(__dirname, 'build')
      },
      historyApiFallback: true,
      open: true,
      hot: true,
      port: 3006
    },
    module: {
      rules: [
        {
          test: /\.(js)$/,
          use: ['babel-loader'],
          exclude: /node_modules/
        },
        {
          test: /\.(tsx|ts)$/,
          use: ['ts-loader'],
          exclude: /node_modules/
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif|ico)$/,
          exclude: /node_modules/,
          use: ['file-loader']
        },
        {
          test: /\.css$/i,
          exclude: /node_modules/,
          use: ['style-loader', 'css-loader']
        },
        {
          test: /\.(woff|woff2|eot|ttf)$/,
          exclude: /node_modules/,
          use: ['url-loader']
        }
      ]
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js']
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, 'public', 'index.html'),
        favicon: './public/favicon.ico',
        filename: 'index.html'
      }),
      new webpack.DefinePlugin({
        'process.env.API_URL': JSON.stringify('DEV')
      })
    ]
  }
}
