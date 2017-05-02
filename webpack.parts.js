const path = require('path');
const webpack = require('webpack');

// Set paths for source and build folder
const PATHS = {
  src: path.join(__dirname, 'src'),
  dist: path.join(__dirname, 'dist')
};
exports.paths = PATHS;
