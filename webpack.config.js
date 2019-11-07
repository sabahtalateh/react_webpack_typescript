const path = require('path')
const webpack = require('webpack')

module.exports = {
    mode: 'development',
    entry: {
        bundle: './src/index.tsx'
    },
    output: {
        filename: '[name].js',
        publicPath: '/assets/',
        path: path.resolve(__dirname, 'dist'),
    },
    resolve: {
        extensions: [ '.tsx', '.ts', '.js' ],
    },
    module: {
        rules: [
            {
                test: /\.ts(x?)$/,
                exclude: /node_modules/,
                use: [ { loader: 'ts-loader' } ]
            },
            {
                enforce: "pre",
                test: /\.js$/,
                loader: "source-map-loader"
            }
        ],
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    // externals: {
    //     "react": "React",
    //     "react-dom": "ReactDOM"
    // },
    devServer: {
        port: 30303,
        writeToDisk: false,
        hot: true,
    },
    devtool: 'source-map',
}