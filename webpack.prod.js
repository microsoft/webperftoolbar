const merge = require('webpack-merge');
const UglifyJsWebpackPlugin = require('uglifyjs-webpack-plugin');
const common = require('./webpack.common');
const package = require('./package.json');

module.exports = merge(common, {
    plugins: [
        new UglifyJsWebpackPlugin({
            uglifyOptions: {
                output: {
                    preamble: "/* https://github.com/Microsoft/WebPerfToolbar v" + package.version + " */",
                    // Don't let uglify remove important comments
                    comments: /copyright|license|preserve|\/\*\!/gi,
                },
            },
        })
    ]
});