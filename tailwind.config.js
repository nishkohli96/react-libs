module.exports = {
    // purge: {
    //     enabled: true,
    //     content: ['./src/**/*.js', './public/**/*.html'],
    // },
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                navyb: '#006699',
                lavendar: '#FB2CBE',
                vlblue: '#ABCDED',
            },
            screens: {
                xs: '300px',
                mobile: { min: '380px', max: '550px' },
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
