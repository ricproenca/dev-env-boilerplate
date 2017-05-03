import webpack from 'webpack';
import merge from 'webpack-merge';
import parts from './webpack.parts';
import glob from 'glob';

import commonConfig from './webpack.config.common';

import GitRevisionPlugin from 'git-revision-webpack-plugin';
import BabiliPlugin from 'babili-webpack-plugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import PurifyCSSPlugin from 'purifycss-webpack';

const prodConfig = merge([
  {
    devtool: 'source-map',
    output: {
      chunkFilename: './js/[name].[chunkhash:8].js',
      filename: './js/[name].[chunkhash:8].js'
    },
    performance: {
      hints: 'warning', // 'error' or false are valid too
      maxEntrypointSize: 100000, // in bytes
      maxAssetSize: 450000 // in bytes
    },
    plugins: [
      // Helper to create stable module ids
      new webpack.HashedModuleIdsPlugin(),

      // Generates a small comment at the beginning of the generated files.
      new webpack.BannerPlugin({
        banner: new GitRevisionPlugin().version()
      }),

      // UglifyJS doesn't support ES6 syntax yet making it problematic if Babel and babel-preset-env are used while targeting specific browsers.
      // So, the best choice is using babili.
      new BabiliPlugin(),

      // CSS EXTRACT plugin:
      new ExtractTextPlugin('./css/[name].[contenthash:8].css'),

      // Remove unused selectors from your CSS.
      // You should use it with the extract-text-webpack-plugin.
      new PurifyCSSPlugin({
        paths: glob.sync(`${parts.paths.src}/**/*.js`, { nodir: true })
      })
    ],
    module: {
      loaders: [
        // CSS EXTRACT:
        // CSS bundles generation using ExtractTextPlugin.
        // It can aggregate multiple CSS files into one.
        // The plugin then picks up the result aggregated by the loader and emits a separate file.
        {
          test: /\.css$/,
          use: ExtractTextPlugin.extract({
            use: [
              'css-loader',
              {
                loader: 'postcss-loader',
                options: {
                  // Working with Autoprefixer is simple:
                  // just forget about vendor prefixes and write normal CSS according to the latest W3C specs.
                  plugins: () => [require('autoprefixer')] // TODO: check if we can do the import
                }
              }
            ],
            fallback: 'style-loader'
          })
        },

        // IMAGES EXTRACT
        // Stores separate images to files.
        // Perfect for production.
        {
          test: /\.(png|jpg|svg|gif)$/,
          use: {
            loader: 'file-loader',
            options: { name: './images/[name].[hash:8].[ext]' }
          }
        }
      ]
    }
  }
]);

export default merge(prodConfig, commonConfig);
