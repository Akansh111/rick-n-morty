const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TSLintPlugin = require('tslint-webpack-plugin');


module.exports = {
    mode: 'none',
    entry: {
        app: path.join(__dirname, 'src', 'index.tsx')
    },
    target: 'web',
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: '/node_modules/',
            }
        ],
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'index.html')
        }),
        new TSLintPlugin({
            files: ['./src/**/*.tsx']
        })
    ]
}







// const HtmlWebPackPlugin = require('html-webpack-plugin');
// module.exports = {
//     context: __dirname,
//     entry: './src/index.tsx',
//     devtool: "source-map",
//     devServer: {
//         historyApiFallback: true
//     },
//     resolve: {
//         // Add '.ts' and '.tsx' as resolvable extensions.
//         extensions: [".ts", ".tsx"]
//     },
//     module: {
//         rules: [
//             {
//                 test: /\.ts(x?)$/,
//                 exclude: /node_modules/,
//                 use: [
//                     {
//                         loader: "ts-loader"
//                     }
//                 ]
//             },
//             {
//                 enforce: "pre",
//                 test: /\.js$/,
//                 loader: "source-map-loader"
//             }
//         ]
//     },
//     plugins: [
//         new HtmlWebPackPlugin({
//             template: 'index.html'
//         })
//     ],
//     externals: {
//         "react": "React",
//         "react-dom": "ReactDOM"
//     }
// };