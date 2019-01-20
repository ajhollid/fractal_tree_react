const path = require( 'path' );
const webpack = require( 'webpack' );
const CopyWebpackPlugin = require( 'copy-webpack-plugin' );
const HtmlWebpackPlugin = require( 'html-webpack-plugin' );

const DIST = path.resolve( __dirname, './dist' );

module.exports = {

  resolve: {
    alias: {
      jquery: path.join( __dirname, './jquery-stub.js' ),
    },
  },
  entry: [
    './src/components/Index.jsx',
  ],
  output: {
    path: DIST,
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        include: path.join( __dirname, 'src' ),
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },

      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin( {
      filename: 'index.html',
      template: 'index.html',
    } ),
    new CopyWebpackPlugin( [
      { from: './src/assets', to: './assets' },
      { from: './src/favicon.ico', to: './favicon.ico' },
      { from: 'index.html' },
    ] ),
  ],
};
