var path = require('path'),
    webpack = require('webpack');

module.exports = {
    entry: './example/main.tsx',
    output: {
        path: path.resolve(__dirname, './dist'),
        publicPath: '/dist/',
        filename: 'build.js'
    },
    module: {
        loaders: [
            { test: /\.tsx?$/, exclude: /node_modules/, loader: "awesome-typescript-loader" },
            { test: /\.css$/, loaders: ['style', 'css'] }
        ]
    },
    resolve: {
        extensions: ["", ".ts", ".tsx", ".js"]
    },
    devServer: {
        contentBase: "./example",
        historyApiFallback: true,
        noInfo: true
    },
    devtool: '#eval-source-map'
}

if (process.env.NODE_ENV === 'production') {
    module.exports.devtool = '#source-map'
    module.exports.plugins = (module.exports.plugins || []).concat([
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    ])
}
