const path = require('path')
const HTMLWebpack = require('html-webpack-plugin')
const MiniCSSExtract = require('mini-css-extract-plugin')

module.exports = {
    mode: 'development',
    entry: {
        script: path.resolve(__dirname, './src/index.js')
    },
    output: {
        filename: '[name].js',
        clean: true,
        path: path.resolve(__dirname, './public')
    },
    plugins: [
        new HTMLWebpack({
            template: path.resolve(__dirname, './index.html'),
            filename: 'index.html'
        }),
        new MiniCSSExtract({
            filename: 'style.css'
        })
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/i,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@babel/preset-env',
                            '@babel/preset-react'
                        ]
                    }
                }
            },
            {
                test: /\.(sass|scss)$/i,
                use: [
                    MiniCSSExtract.loader,
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    },
    devtool: 'source-map',
    resolve: {
        extensions: [
            '.js', '.jsx'
        ]
    },
    devServer: {
        static: {
            directory: path.resolve(__dirname, './public')
        },
        port: 3000,
        compress: true,
        hot: true
    }
}