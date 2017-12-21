const path = require('path');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

module.exports = {
    entry: './src/index.ts',
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                options: {
                    // disable type checker - we will use it in fork plugin
                    transpileOnly: true
                }
            }
        ],
        loaders: [
            { test: /sinon\.js$/, loader: "imports?define=>false,require=>false" }
        ],
        exprContextCritical: false
    },
    plugins: [
        new ForkTsCheckerWebpackPlugin({ tslint: true })
    ],
    resolve: {
        extensions: ['.ts', '.js'],
        alias: {
            sinon: 'sinon/pkg/sinon.js'
        },
        modules: ['src', 'node_modules']
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        library: 'PerfToolbar',
        libraryTarget: 'var'
    }
};