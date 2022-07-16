const colorToken = require('./color');

module.exports = {
    font: {
        somecolor: { value: colorToken.color.text.value },
        fullStyle: {
            value: {
                color: colorToken.color.base.primary.value,
                'font-size': '12px',
                margin: 10,
            },
        },
    },
};
