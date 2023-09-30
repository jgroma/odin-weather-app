const path = require('path');

module.exports = {
  //entry: './src/index.js',
  entry: ['./src/style/style.css', '/src/style/reset.css', './src/index.js'],
  //entry: {
  //  index: './src/index.js',
  //  layout: './src/layout.js',
  //},
  output: {
    filename: 'main.js',
    //filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
    ],
  }
};