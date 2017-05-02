// Connecting Babel with webpack through babel-loader
exports.loadJavaScript = ({ include, exclude }) => ({
  test: /\.js$/,
  include,
  exclude,
  loader: 'babel-loader',
  options: {
    // Enable caching for improved performance during development.
    cacheDirectory: true
  }
});

// To load CSS, you need to use css-loader and style-loader.
// css-loader goes through possible @import and url() lookups within the matched files
// and treats them as a regular ES6 import.
// style-loader injects the styling through a style element.
exports.loadCSS = ({ include, exclude } = {}) => ({
  test: /\.css$/,
  include,
  exclude,
  use: ['style-loader', 'css-loader']
});

// Inline assets by using url-loader.
// It emits images as base64 strings within your JavaScript bundles.
// Decreases the number of requests needed while growing the bundle size.
// Perfect for development.
exports.loadImages = ({ include, exclude, options } = {}) => ({
  test: /\.(png|jpg|svg|gif)$/,
  include,
  exclude,
  use: {
    loader: 'url-loader',
    options
  }
});

// Supports Multiple Formats using file-loader, not url-loader
// It's a trade-off as you get extra requests, but perhaps it's the right move.
exports.loadFonts = ({ include, exclude, options } = {}) => ({
  // Capture eot, ttf, woff, and woff2
  test: /\.(eot|ttf|woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
  include,
  exclude,
  use: {
    loader: 'file-loader',
    options
  }
});
