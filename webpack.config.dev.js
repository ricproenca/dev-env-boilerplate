import path from 'path';
import merge from 'webpack-merge';

import HtmlWebpackPlugin from 'html-webpack-plugin';

import parts from './webpack.config.parts';

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
    ]
  },
  parts.loadJavaScript,
  parts.loadCSS
]);

export default devConfig;
