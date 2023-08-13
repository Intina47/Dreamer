const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: './server.js',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].bundle.js',
        clean: true
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            // for scss files load the style loader and css modules then add to webpack config file as
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
              },
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                use: [
                    {
                    loader: 'file-loader',
                    },
                ],
            }
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'style.css',
        }),
        new HtmlWebpackPlugin({
          template: './public/index.html',
          filename: 'index.html',
        }),
        new CopyWebpackPlugin({
            patterns: [
                { from: './public/assets', to: 'assets' }
            ]
        }),
      ],
    devServer: {
        historyApiFallback: true,
        contentBase: path.resolve(__dirname, 'dist'),
        hot: true,
        port: 3000,
        open: true
    },
    resolve: {
        fallback: {
          "crypto": false,
          "fs": false,
          "stream": false,
          "zlib": false,
          "http": false,
          "net": false,
          "querystring": false,
          "url": false,
          "path": false,
          "buffer": false,
          "os": false,
          "assert": false,
          "string_decoder":false ,
          "async_hooks": false,


        }
      },
    mode: 'production',
    optimization: {
      splitChunks: {
        chunks: 'all'
      }
    },
};