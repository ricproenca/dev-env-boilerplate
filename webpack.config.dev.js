 import path from 'path';

export default {
  debug: true,                  // enables debug information
  devtool: 'inline-source-map', // compilation speed VS quality
  noInfo: false,                // list of all the files that webpack is bundling
  entry: [                      // entry point for our app
    path.resolve(__dirname, 'src/index')
  ],
  target: 'web',                // way that webpack bundles the code (node, electron, ...)
  output: {                     // where webpack should create our web bundle
    path: path.resolve(__dirname, 'src'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins: [],                  // enhance webpack power (hot-reloading, linting styles, ...)
  module: {
    loaders: [                  // filetypes that we want to handle (SASS, images, JSON, ...)
      {test: /\.js$/, exclude: /node_modules/, loaders: ['babel']},
      {test: /\.css$/, loaders: ['style','css']}
    ]
  }
}
