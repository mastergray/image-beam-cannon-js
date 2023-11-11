const path = require('path');

// Configures webpack for creating PROD build of yngwie.js:
module.exports = {
  mode:"production",
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'image-beam-cannon.js',
    library:{
      name:"ImageBeamCannon",
      type:"umd"
    }
  }
};