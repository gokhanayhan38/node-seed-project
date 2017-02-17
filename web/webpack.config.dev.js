const path = require("path");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const {DedupePlugin} = require("webpack").optimize;

module.exports = {
    entry: ["./main.tsx"],

    output: {
        path: path.join(__dirname, "dir-to-http-serve"),
        filename: "bundle.js",
        publicPath: "http://localhost:8081/"
    },

    resolve: {
        extensions: ["", ".webpack.js", ".ts", ".tsx", ".js"]
    },

    module: {
        loaders: [
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ["react"]
                }
            },
            {
                test: /\.tsx?$/,
                loader: "awesome-typescript-loader"
            }
        ],
        preLoaders: [
            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            { test: /\.js$/, loader: "source-map-loader" }
        ]
    },

    plugins: [
        new CleanWebpackPlugin(["dir-to-http-serve"], {
            root: __dirname,
            verbose: true
        }),

        new CopyWebpackPlugin([
            {from: "index.html"},
            {from: "css", to: "css"},
            {from: "js", to: "js"},
            {from: "images", to: "images"},
            {from: "lib", to: "lib"},
            {from: "config", to: "config"}
        ]),

        new DedupePlugin()
    ],

    devServer: {
        contentBase: "./dir-to-http-serve",
        inline: true,
        port: 8081
    }
};
