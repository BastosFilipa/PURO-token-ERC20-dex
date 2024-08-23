const path = require('path');

module.exports = {
  entry: './src/index.js', // Replace with the path to your main JS file
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/, // Apply to all .js files
        exclude: /node_modules/, // Exclude node_modules except for web3.js
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.js$/,
        include: /node_modules\/web3/, // Ensure Babel processes web3.js
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx'] // Support importing .js and .jsx files without specifying the extension
  }
};
