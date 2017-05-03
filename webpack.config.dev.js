import path from 'path';
import merge from 'webpack-merge';

import HtmlWebpackPlugin from 'html-webpack-plugin';

import commonConfig from './webpack.config.common';

const devConfig = merge([
  {
    devtool: 'cheap-module-source-map', // compilation speed VS quality
    target: 'web', // way that webpack bundles the code (node, electron, ...)
    output: {
      devtoolModuleFilenameTemplate: 'webpack:///[absolute-resource-path]'
    },
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
