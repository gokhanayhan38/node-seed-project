
const config = {
    entry: {
        app: "./src/main.js"
    },

    output: {
        path: './dir-to-http-serve',
        filename: "bundle.js"
    },

    module: {
        loaders: [
            {
                test: /\.json$/,
                loader: "json-loader"
            },
            {
                test: /leaflet-measure.+\.js$/,
                loader: "transform/cacheable?brfs"
            }
        ],

        node: {
            fs: "empty"     //needed for leaflet-measure that uses "fs"
        },

        exprContextCritical: false     //needed for node-fetch which uses iconv-loader (which uses dynamic require)
    },

    devServer: {
        port: 8080
    }
};

module.exports = config;
