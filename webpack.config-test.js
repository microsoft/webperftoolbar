const path = require('path');
const webpack = require('webpack');

module.exports = {
    target: 'node',
    entry: "mocha\!./test/toolbar.spec.ts",
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.ts?$/,
                use: 'ts-loader',
                exclude: '/node_modules/'
            }
        ],
        exprContextCritical: false
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    output: {
        filename: 'testBundle.js',
        path: path.resolve(__dirname, 'dist')
    }
}