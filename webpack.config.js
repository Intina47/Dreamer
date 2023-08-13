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
    plugins: [
        new HtmlWebpackPlugin({
          template: './public/index.html',
          filename: 'public/index.html',
        }),
        new CopyWebpackPlugin({
            //copy assets and css
            patterns: [
                { from: './public/css', to: 'css' },
                { from: './public/assets', to: 'assets' }
            ],
        }),
      ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                use: [
                    {
                    loader: 'file-loader',
                    },
                ],
            },
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
            },
            
        ],
    },
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