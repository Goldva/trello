const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const outputDir = path.join(__dirname, '../../../../target/classes/META-INF/resources/react-component');
const IS_DEV = process.env.NODE_ENV === "development";

module.exports = {
    mode: IS_DEV ? "development" : "production",
    devtool: IS_DEV ? "eval-source-map" : "nosources-source-map",
    watch: IS_DEV,
    devServer: {
        hot:true,
        proxy: {
            "/": {
                target: {
                    host: "localhost",
                    protocol: 'http:',
                    port: 8080,
                },
            },
            ignorePath: true,
            changeOrigin: true,
            secure: false,
        },

    },
    entry: "./src/index.js",
    output: {
        path: outputDir,
        filename: "app.js"
    },
    module: {
        rules: [
            {
                test: /\.(jsx|js)?$/,
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
    }
};
