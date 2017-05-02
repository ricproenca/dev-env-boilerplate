import path from 'path';
import merge from 'webpack-merge';

import HtmlWebpackPlugin from 'html-webpack-plugin';

import parts from './webpack.parts';
import commonConfig from './webpack.config.common';

const devConfig = merge([
  {
    devtool: 'inline-source-map', // compilation speed VS quality
    entry: [
      // entry point for our app
      path.resolve(__dirname, 'src/index')
    ],
    target: 'web', // way that webpack bundles the code (node, electron, ...)
    output: {
      // where webpack should create our web bundle
      path: path.resolve(__dirname, 'src'),
      publicPath: '/',
      filename: '[name].js'
    },
    plugins: [
      // enhance webpack power (hot-reloading, linting styles, ...)
      new HtmlWebpackPlugin({ template: 'src/index.html', inject: true }) // dynamic html with reference to bundle
    ],
    module: {
      // filetypes that we want to handle (SASS, images, JSON, ...)
      loaders: [
        // CSS LOADER:
        // We need to use css-loader and style-loader.
        // css-loader goes through possible @import and url() lookups and treats them as a regular ES6 import.
        // style-loader injects the styling through a style element.
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader']
        },

        // IMAGES LOADER
        // Inline assets by using url-loader.
        // It emits images as base64 strings within your JavaScript bundles.
        // Decreases the number of requests needed while growing the bundle size.
        // Perfect for development.
        {
          test: /\.(png|jpg|svg|gif)$/,
          use: {
            loader: 'url-loader'
          }
        }
      ]
    }
  }
]);

export default merge(devConfig, commonConfig);
