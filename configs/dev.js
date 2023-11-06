const path = require('path');

// Configures webpack for testing yngwie.js:
module.exports = {
  mode:"development",
  entry: './index.js',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './test',
  },
  output: {
    path: path.resolve(__dirname, '../test'),
    filename: 'image-beam-cannon.js',
    library: 'ImageBeamCannon',
    libraryTarget: 'umd',
  }
};