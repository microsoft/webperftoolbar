const path = require('path');

module.exports = {
    entry: './src/toolbar.ts',
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: '/node_modules/'
            },
        ],
        loaders: [
            { test: /sinon\.js$/, loader: "imports?define=>false,require=>false"}
        ],
        exprContextCritical: false
    },
    resolve: {
        extensions: ['.ts', '.js'],
        alias: {
            sinon: 'sinon/pkg/sinon.js'
        }
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        library: 'Toolbar',
        libraryTarget: 'var'
    }
};