var webpack = require("webpack");
var path = require("path");

module.exports = {
    entry: "./server.js",
    target: "node",
    output: {
        path: "./build",
        filename: "ws-bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.json$/,
                loader: "json"
            }
        ]
    }
}