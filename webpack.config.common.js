const merge = require('webpack-merge');
const webpack = require('webpack');
const parts = require('./webpack.parts');

const bootstrapEntryPoints = require('./webpack.bootstrap');

const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const commonConfig = merge([
  {
    // The entry point for the bundle. Entries have to resolve to files!
    // If a directory contains *index.js*, it resolves to that.
    entry: {
      app: [bootstrapEntryPoints.dev, parts.paths.src],
      vendor: ['jquery', 'moment']
    },
    // Set of options instructing webpack on how and where it should output
    // the bundles, assets and anything else you bundle or load with webpack.
    output: {
      path: parts.paths.dist,
      filename: '[name].js'
    },
    // Use plugins to add functionality typically related to bundles in webpack.
    plugins: [
      // Webpack generate all your favicons and icons for you
      // new FaviconsWebpackPlugin('./src/assets/images/logo-avius.png'),

      // Simplifies creation of HTML files to serve your webpack bundles.
      // Useful for webpack bundles that include a hash in the filename which changes every compilation.
      new HtmlWebpackPlugin({ title: 'Avius' }),

      // Needed for Bootstrap
      new webpack.ProvidePlugin({ $: 'jquery', jQuery: 'jquery' }),

      // Extract vendor related code to a bundle of its own.
      // Allows multiple splits through it.
      new webpack.optimize.CommonsChunkPlugin({
        name: 'vendor',
        minChunks: ({ resource }) =>
          resource &&
          resource.indexOf('node_modules') >= 0 &&
          resource.match(/\.js$/)
      }),

      // TODO: Extract manifest comment
      new webpack.optimize.CommonsChunkPlugin({
        name: 'manifest',
        minChunks: Infinity
      })
    ],
    module: {
      // filetypes that we want to handle (SASS, images, JSON, ...)
      loaders: [
        // JS LOADER:
        // Connecting Babel with webpack through babel-loader
        {
          test: /\.js$/,
          loader: 'babel-loader',
          include: parts.paths.src,
          options: {
            cacheDirectory: true // Enable caching for improved performance during development.
          }
        },
        // FONTS LOADER
        // Supports Multiple Formats using file-loader, not url-loader
        // It's a trade-off as you get extra requests, but it's the right move.
        {
          test: /\.(eot|ttf|woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
          use: {
            loader: 'file-loader',
            options: {
              name: './fonts/[name].[hash:8].[ext]',
              publicPath: '/' // override the default per loader definition
            }
          }
        }
      ]
    }
  }
]);

export default commonConfig;
