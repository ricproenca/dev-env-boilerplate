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
    // way that webpack bundles the code (node, electron, ...)
    target: 'web',
    output: {
      // where webpack should create our web bundle
      path: path.resolve(__dirname, 'src'),
      publicPath: '/',
      filename: '[name].js'
    },
    // enhance webpack power (hot-reloading, linting styles, ...)
    plugins: [
      // dynamic html with reference to bundle
      new HtmlWebpackPlugin({ template: 'src/index.html', inject: true })
    ]
  },
  parts.loadJavaScript,
  parts.loadCSS,
  parts.loadFonts.bind(this, {
    options: {
      name: './fonts/[name].[hash:8].[ext]',
      publicPath: '../' // override the default per loader definition
    }
  })
]);

export default devConfig;
