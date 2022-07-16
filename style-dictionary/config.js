module.exports = {
    source: ['./style-dictionary/tokens/**/*.js'],
    platforms: {
        scss: {
            transformGroup: 'scss',
            prefix: 'token',
            buildPath: '../src/style-dictionary-dist/',
            files: [
                {
                    destination: 'index.scss',
                    format: 'scss/variables',
                },
            ],
        },
        js: {
            transformGroup: 'js',
            buildPath: './src/style-dictionary-dist/',
            files: [
                {
                    destination: 'index.js',
                    format: 'javascript/es6',
                },
            ],
        },
    },
};
