const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');

const rootPath = path.resolve(__dirname, '../')


module.exports = {
    // mode: 'development',
    // devServer: {
    //     static: './dist',
    // },
    // devtool: 'inline-source-map',
    entry: './src/index.js',
    output: {
        // contenthash: 根据内容生成hash, 内容不变则hash不变.内容改了则hash也会改.
        filename: '[name].[contenthash].js',
        path: path.resolve(rootPath, 'dist'),
        clean: true,
    },
    performance: {
        hints: 'warning',
        // 入口起点的最大体积
        maxEntrypointSize: 50000000,
        // 生成文件的最大体积
        maxAssetSize: 30000000,
        // 只给出 js 文件的性能提示
        assetFilter: function (assetFilename) {
          return assetFilename.endsWith('.js')
        }
      },
    resolve: { // 解析
        // 在import导入文件时,import { page } from './view/page';
        // 如果未表明后缀, 则按下列默认后缀解析.
        extensions: ['.vue', '.ts', '.js', '.json'],
        alias: { // 化名, 又名. 同义名
            Assets: path.resolve(rootPath, 'src/assets'),
            Store: path.resolve(rootPath, 'src/store'),
            Json: path.resolve(rootPath, 'src/json'),
            "@": path.resolve(rootPath, 'src/')
        }
    },
    module: {
        rules: [
            // {
            //     enforce: 'pre',
            //     test: /\.(js|vue)$/,
            //     loader: 'eslint-loader',
            //     exclude: /node_modules/,
            // },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.css$/,
                // 针对css文件,
                // postcss-loader: css文件的预处理器, 将css文件中的样式解析成抽象语法树的结构
                // css-loader解析css文件生成js对象.保存数据, 
                //style-loader将解析好的css创建一个style标签加载到html上.
                use: ['style-loader', 'css-loader', 'postcss-loader'],
            },
            {
                test: /\.(sass|scss)$/,
                use: [
                    'vue-style-loader',
                    'css-loader',
                    'postcss-loader',
                    'sass-loader',
                ]
            },
            {
                test: /\.(png|jpg|gif)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.svg/,
                type: 'asset/inline',
            },
            {
                test: /\.m?js$/,
                // loader的配置用loader / use 都行.
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                },
                include: path.resolve(rootPath, 'src'),
            },
            {
                test: /\.ts$/,
                loader: 'ts-loader',
                exclude: /node_modules/,
                options: {
                    appendTsSuffixTo: [/\.vue$/],
                }
            }

        ]
    },
    plugins: [
        new HtmlWebpackPlugin({ title: 'webpack-test', template: path.join(rootPath, 'src/index.html') }),
        new VueLoaderPlugin()
    ],
    optimization: {
        runtimeChunk: 'single',
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: 'all',
                },
            },
        },
    },

}