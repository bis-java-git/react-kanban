const path = require('path')

module.exports = {

  module: {
   rules: [
         {
           test: /\.(css)$/i,
           use: ['style-loader', 'css-loader'],
        },
         {
          test: /\.(js|jsx)$/i,
          exclude: /node_modules/,
          loader: "babel-loader"
        },
    ],
  },
  entry: './src/index.jsx',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
}