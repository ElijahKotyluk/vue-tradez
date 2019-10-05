const VueLoaderPlugin = require('vue-loader/lib/plugin');
const path = require('path');

module.exports = {
    entry: ['./src/index.ts'],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.bundle.js'
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /.vue$/,
                exclude: '/node_modules/',
                loader: 'vue-loader'
            },
            {
                test: /\.ts?$/,
                exclude: '/node_modules/',
                loader: 'ts-loader'
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.js', '.vue', '.json']
    },
    plugins: [
        new VueLoaderPlugin()
    ]
}