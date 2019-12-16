const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const outputDir = path.join(__dirname, '../../../../target/classes/META-INF/resources/react-component');

module.exports = {
    entry: "./src/index.js",
    output: {
        path: outputDir,
        filename: "app.js"
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.svg$/,
                loader: 'svg-inline-loader'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        })
    ]
};
