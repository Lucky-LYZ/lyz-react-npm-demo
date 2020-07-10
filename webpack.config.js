const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const htmlWebpackPlugin = new HtmlWebpackPlugin({
    template: path.join(__dirname, "./example/src/index.html"),
    filename: "./index.html"
});

module.exports = {
    mode: 'development',
    entry: path.join(__dirname, "./example/src/app.js"),
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
    plugins: [htmlWebpackPlugin],
    resolve: {
        extensions: [".js", ".jsx"]
    },
    devServer: {
        port: 3001
    }
};