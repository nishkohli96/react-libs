const {
    override,
    addWebpackAlias,
    addPostcssPlugins,
} = require('customize-cra');
const path = require('path');

module.exports = override(
    addWebpackAlias({
        ['@Atoms']: path.resolve(__dirname, './src/components/atoms'),
        ['@Components']: path.resolve(__dirname, './src/components'),
        ['@Images']: path.resolve(__dirname, './src/assets/images'),
        ['@Pages']: path.resolve(__dirname, './src/pages'),
        ['@Styles']: path.resolve(__dirname, './src/assets/styles'),
        ['@Utils']: path.resolve(__dirname, './src/utils'),
    }),
    addPostcssPlugins([require('tailwindcss'), require('autoprefixer')])
);
