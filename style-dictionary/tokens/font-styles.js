/* eslint-disable @typescript-eslint/no-var-requires */
const colorToken = require('./color');

module.exports = {
  font: {
    somecolor: { value: colorToken.color.text.value },
    fullStyle: {
      value: {
        color: colorToken.color.base.primary.value,
        fontSize: '18px',
        margin: 10,
        fontFamily: 'Poppins-Regular'
      }
    },
    size: { '1_125': { value: '1.125rem' } }
  }
};
