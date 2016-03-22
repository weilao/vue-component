var path = require('path');
var autoprefixer = require('autoprefixer');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var cssExtractor = ExtractTextPlugin.extract("css?sourceMap!postcss");
var lessExtractor = ExtractTextPlugin.extract("css?sourceMap!postcss!less?sourceMap");

module.exports = {
    devtool: '#eval',
    entry: {
        'index': './examples/index.js'
    },
    output: {
        path: path.resolve(__dirname, './examples/dist'),
        publicPath: '/examples/dist/',
        filename: "[name]-bundle.js"
    },
    resolve: {
        modulesDirectories: ['.', 'node_modules']
    },
    module: {
        loaders: [{
            test: /\.vue$/,
            loader: 'vue'
        }, {
            test: /\.css$/,
            loader: cssExtractor
        }, {
            test: /\.less$/,
            loader: lessExtractor
        }, {
            test: /\.(png|jpg|gif|svg)$/,
            loader: 'url',
            query: {
                limit: 10000,
                name: '[name].[ext]?[hash]'
            }
        }]
    },
    postcss: [autoprefixer({browsers: ['last 2 versions', 'Android 2.3']})],
    plugins: [
        //new webpack.optimize.UglifyJsPlugin(),
        //new ExtractTextPlugin("examples/[name].css")
    ]
};
