const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: path.join(__dirname, "./example/src/app.js"), // 本地启动服务，测试组件可用性
    output: {
        path: path.join(__dirname, "example/dist"),
        filename: "bundle.js"
    },
    devtool: 'cheap-module-eval-source-map',
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            use: "babel-loader",
            exclude: /node_modules/
        }, {
            test: /\.(css|less)$/,
            use: [
                'style-loader',
                'css-loader'
            ],
            exclude: /node_modules/
        }]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, "./example/src/index.html"),
            filename: "./index.html"
        }),
    ],
    resolve: {
        extensions: [".js", ".jsx"]
    },
    devServer: {
        port: 3001
    }
};