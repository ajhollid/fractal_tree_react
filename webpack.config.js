const path = require( 'path' );
const webpack = require( 'webpack' );
const CleanWebpackPlugin = require( 'clean-webpack-plugin' );
const CopyWebpackPlugin = require( 'copy-webpack-plugin' );
const HtmlWebpackPlugin = require( 'html-webpack-plugin' );
const BundleAnalyzerPlugin = require( 'webpack-bundle-analyzer' ).BundleAnalyzerPlugin;

const DIST = path.resolve( __dirname, './dist' );

module.exports = {
  mode: 'development',
  devtool: 'eval',
  resolve: {
    alias: {
      jquery: path.join( __dirname, './jquery-stub.js' ),
    },
  },
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    './src/Index.jsx',
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
    // new BundleAnalyzerPlugin(),
    new CleanWebpackPlugin( DIST ),
    new HtmlWebpackPlugin( {
      filename: 'index.html',
      template: 'index.html',
    } ),
    new CopyWebpackPlugin( [
      { from: './src/assets', to: './assets' },
      { from: 'index.html' },
    ] ),
  ],
};
