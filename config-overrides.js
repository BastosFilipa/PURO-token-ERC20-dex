const { override, addBabelPlugins, babelInclude } = require('customize-cra');
const path = require('path');

module.exports = override(
  ...addBabelPlugins(
    "@babel/plugin-proposal-optional-chaining"
  ),
  babelInclude([
    path.resolve('src'), // Include the source directory
    path.resolve('node_modules/web3'), // Include the web3.js library
  ])
);
