const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: {
    index: './src/index.js'
  },
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: './',
    filename: 'js/[name].js'
  },
  module: {
    rules: [
      {
        test: /\.hbs$/,
        use: [
          { loader: 'html-loader' },
          {
            loader: path.resolve('../'),
            options: {
              layouts: path.resolve('./src/html/layouts/**/*.hbs'),
              partials: path.resolve('./src/html/partials/**/*.hbs'),
              define: {
                __TEST__: 'test'
              }
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve('./src/html/pages/index.hbs'),
      filename: 'index.html'
    })
  ]
}
