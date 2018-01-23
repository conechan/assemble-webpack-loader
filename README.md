# assemble-webpack-loader

> Webpack loader for [Assemble](https://github.com/assemble/assemble).

## Install

```bash
yarn add assemble-webpack-loader -D
```

## Usage

```js
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  module: {
    rules: [
      {
        test: /\.hbs$/,
        use: [
          {
            loader: 'assemble-webpack-loader',
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
```

## Example

Please see [example](./example).
