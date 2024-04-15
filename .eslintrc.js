module.exports = {
  extends: [
    'react-app/jest',
    '@nish1896/eslint-config/js',
    '@nish1896/eslint-config/react'   
  ],
  rules: {
    'react/jsx-filename-extension': 'off',
    'react/prop-types': 'off'
  }
};
