const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: './src/app.js',
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'bundle.js'
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
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
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
        new HtmlWebpackPlugin({
          template: './public/index.html',
          filename: 'index.html',
        }),
        new CopyWebpackPlugin({
            patterns: [
                { from: './public/assets', to: 'assets' }
            ]
        })

      ],
    devServer: {
        historyApiFallback: true,
        contentBase: path.resolve(__dirname, 'dist'),
        hot: true,
        port: 3000,
        open: true
    }
};