
const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = env => {

    return {
        entry: {
            app:'./src/app.js',
            button:'./src/button/index.js',
            accordion:'./src/accordion/index.js',
        },
        output: {
            path: path.resolve('.', './dist'),
            filename: '[name]/demo.js',
            chunkFilename: '[name]/demo.js',
            publicPath: '/'
        },
        // devServer: {
        //     port: 3000,
        //     contentBase: path.join(__dirname, './dist'),
        //     historyApiFallback: true,
        //     host: '127.0.0.1',
        //     hot: true,
        //     open: true
        // },
        module: {
            rules: [
                {
                    test: /\.js$/,
                    use: "babel-loader"
                },
                {
                    test: /\.less$/,
                    use: [
                        "style-loader", 
                        "css-loader", 
                        "less-loader",
                        "postcss-loader"
                    ]
                },
                {
                    test: /\.css$/,
                    use: [
                        "style-loader", 
                        "css-loader",
                        "postcss-loader"
                    ]
                },
                {
                    test: /\.(png|jpg|jpeg|gif)$/,
                    use: {
                        loader: "url-loader",
                        options: {
                            limit: 1024 * 8
                        }
                    }
                },
                {
                    test: /\.(ttf|eot|woff|woff2|svg)(\?.+)?$/,
                    use: {
                        loader: "url-loader",
                        options: {
                            limit: 10 * 1024
                        }
                    }
                }
            ]
        },
        plugins: [
            // new webpack.HotModuleReplacementPlugin()
            new CopyWebpackPlugin([
                {
                    from: __dirname+'/src/',
                    to: __dirname+'/dist/'
                }
            ])
        ]
    }
}