const path = require('path');

module.exports = {
    entry: './src/index.ts',
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: [{
                    loader: 'ts-loader',
                    options: {
                        configFile: 'tsconfig.json',
                        logLevel: 'info'
                    }
                }]
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