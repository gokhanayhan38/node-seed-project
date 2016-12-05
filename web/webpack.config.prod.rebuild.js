const path = require("path");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const {DedupePlugin} = require("webpack").optimize;
const WebpackShellPlugin = require("webpack-shell-plugin");

module.exports = {
    entry: ["./main.js"],

    output: {
        path: path.join(__dirname, "dir-to-http-serve"),
        filename: "bundle.js",
        publicPath: "http://localhost:8081/"
    },

    externals: {
        "bootstrap-tour": "Tour",
        "d3": "d3",
        "immutable": "Immutable",
        "leaflet": "L",
        "leaflet-draw": "L.Control.Draw",
        "leaflet.markercluster": "L.MarkerClusterGroup",
        "leaflet-measure": "L.Control.Measure",
        "less": "less",
        "jquery": "$",
        "jquery-mobile": "$.mobile",
        "node-fetch": "fetch",
        "promise": "Promise",
        "react": "React",
        "react-dom": "ReactDOM",
        "react-leaflet": "ReactLeaflet",
        "underscore": "_"
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
            }
        ]
    },

    node: {
        Buffer: false
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

        new DedupePlugin(),

        new WebpackShellPlugin({
            //onBuildStart: ["echo Webpack Start"],
            onBuildEnd: [
                "echo Webpack End",

                `babel ./dir-to-http-serve/bundle.js -o ./dir-to-http-serve/bundle.babel.js --presets=es2015 &&
                uglify -s ./dir-to-http-serve/bundle.babel.js -o ./dir-to-http-serve/bundle.min.js &&
                echo Done!`
            ]
        })
    ]
};
