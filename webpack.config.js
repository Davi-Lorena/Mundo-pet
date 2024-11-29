const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const copyWebpackPlugin = require('copy-webpack-plugin')


module.exports = {
target: "web",
mode: "development",

    entry: path.resolve(__dirname, "src", "main.js"),
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist"),
    },

    devServer: {
        static: {
            directory: path.join(__dirname, "dist")
        },
        port: 3000,
        open: true,
        liveReload: true,
    },

plugins: [
    new HTMLWebpackPlugin({
    template: path.resolve(__dirname, "index.html"),
}),

new copyWebpackPlugin({
    patterns: [ 
     {    
        from: path.resolve(__dirname, "src", "assets"),
        to: path.resolve(__dirname, "dist", "src", "assets")
     },
    ]
})

],

}