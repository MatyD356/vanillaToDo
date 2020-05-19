const path = require('path');

module.exports = {
    mode: 'production',
    entry: ['./src/index.js', 'style.scss'],
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
        ]
    }
};