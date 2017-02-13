const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

  devtool: 'inline-source-map',
  context: path.resolve(__dirname),

  entry: {
    bundle: ['./src/index.jsx'],
  },

  output: {
    path: path.resolve(__dirname, 'build'),
    publicPath: `/`,
    filename: '[name].js',
  },

  resolve: {
    modules: [path.resolve(__dirname, './src'), 'node_modules'],
    extensions: ['.json', '.js', '.jsx'],
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: [/node_modules/],
        options: {
          presets: ['latest', 'stage-0', 'react'],
        },
      },
      {
        test:  /\.json$/,
        loader: 'json-loader'
      },
      {
        test: /(\.css|\.scss)$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader?sourceMap'
          },
          'sass-loader?sourceMap',
        ],
      },
      {
        test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
        use: 'url?limit=10000&mimetype=application/font-woff',
      },
      {
        test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
        use: 'url?limit=10000&mimetype=application/font-woff',
      },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        use: 'url?limit=10000&mimetype=application/octet-stream',
      },
      {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        use: 'file',
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        use: 'url?limit=10000&mimetype=image/svg+xml',
      },
    ],
  },
  plugins: [
    // hot reload
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: 'src/index.ejs'
    })
  ],
};
