const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const devMode = process.env.NODE_ENV !== 'production';

module.exports = {
    mode: devMode ? 'development' : 'production',
    entry: './src/index.js',
    devServer: {
        static: './dist',
    },
    devtool: "source-map",
    optimization: {
        minimizer: [
            new CssMinimizerPlugin(), 
            new TerserPlugin({
                parallel: true,
            }),
        ],
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    plugins: [
        new MiniCssExtractPlugin({filename: 'style.css'}),
        new CopyPlugin({
            patterns: [
                { context: 'src/', from: '**/*.html' },
                { context: 'src/', from: 'imgs/**/*' },
            ],
        }),
    ],
    module: {
        rules: [
            {
                test: /\.s?[ac]ss$/,
                use: [
                    devMode ? 'style-loader' : MiniCssExtractPlugin.loader, 
                    'css-loader', 
                    'sass-loader',
                ],
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: ['file-loader'],
            },
            {
                test: /.(ttf|otf|eot|svg|woff(2)?)$/,
                use: ['file-loader'],
            },
        ],
    },
};