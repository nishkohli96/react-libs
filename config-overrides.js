const {
  override,
  addWebpackAlias,
  addPostcssPlugins,
} = require('customize-cra');
const path = require('path');

module.exports = override(
  addWebpackAlias({
    '_Atoms': path.resolve(__dirname, './src/components/atoms'),
    '_Components': path.resolve(__dirname, './src/components'),
    '_Images': path.resolve(__dirname, './src/assets/images'),
    '_Molecules': path.resolve(__dirname, './src/components/molecules'),
    '_Pages': path.resolve(__dirname, './src/pages'),
    '_Store': path.resolve(__dirname, './src/store'),
    '_Styles': path.resolve(__dirname, './src/assets/styles'),
    '_Utils': path.resolve(__dirname, './src/utils'),
  }),
  addPostcssPlugins([require('tailwindcss'), require('autoprefixer')]),
);
