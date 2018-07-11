const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// 4、提取第三方JS庫
const VENDOR = [
    "react",
    "react-dom"
];

module.exports = {
    entry: {
        app: './src/entry.js',
        //1.1
        vendor: VENDOR
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        // filename: 'app_[chunkhash].js'
        // 加上/js就会输出到js文件夹下面
        filename: 'js/[name]_[chunkhash].js'
    },
    resolve: {
        //自动扩展文件后缀名，意味着我们require模块可以省略不写后缀名
        extensions: ['.js', '.jsx'],
        alias: {
            "components": path.resolve(__dirname, 'src/components'),
            "api": path.resolve(__dirname, 'src/api')
        }
    },
    module: {
        rules: [
            //1.1 解析压缩css,css-loader，
            {
                test: /\.css$/,
                use: [
                    { loader: "style-loader" },
                    { loader: "css-loader" },
                ]
                // 6.2 想抽离出来得
                // use: ExtractTextPlugin.extract({
                //     fallback: 'style-loader',
                //     // use: 'css-loader',
                //     use: [{
                //             loader: 'css-loader'
                //         },
                //         {
                //             loader: 'postcss-loader',
                //             options: {
                //                 sourceMap: true
                //             }
                //         }
                //     ]
                // })
            },
            // { //1.2.SASS的.scss 文件使用 style-loader、css-loader 和 sass-loader 来编译处理
            //     //mac 下太难安装node-sass
            //     test: /\.scss$/,
            //     // 6.2 想抽离出来得
            //     use: ExtractTextPlugin.extract({
            //         fallback: 'style-loader',
            //         use: [
            //             "css-loader",
            //             {
            //                 loader: 'postcss-loader',
            //                 options: {
            //                     sourceMap: true
            //                 }
            //             },
            //             "sass-loader"
            //         ]
            //     })
            // },
            // 1.3 引入less-loader,编译less
            {
                test: /\.less$/,
                exclude: [/node_modules/],
                // use: ExtractTextPlugin.extract({
                // fallback: "style-loader",
                use: [
                    { loader: "style-loader" },
                    { loader: "css-loader", options: { modules: true }},
                    // {
                    // loader: 'postcss-loader',
                    // options: {
                    //     sourceMap: true,
                    //     module: true,
                    //     import: true,
                    //     localIdentName: '[path][name]__[local]--[hash:base64:5]'
                    // }
                    // },
                    {
                        loader: "less-loader"
                      
                    }
                ]
                // })
            },
            //2 处理图片,图片路径需是相对路径才能看到效果
            {
                test: /\.(jpg|png|gif|svg)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 10000,
                        // 默认打包到dist下的img文件夹
                        name: 'img/[name].[hash:7].[ext]'
                    }
                }
            },
            // 1.4 使用stylus-loader 编译 .stylus为CSS
            {
                test: /\.styl$/,
                use: [
                    { loader: "style-loader" },
                    { loader: "css-loader" },
                    { loader: "stylus-loader" }
                ]
                // use:ExtractTextPlugin.extract({
                //     fallback:"style-loader",
                //     use:[
                //         "css-loader",
                //         // "postcss-loader",
                //         { loader: 'postcss-loader', options: { sourceMap: true } },
                //         "stylus-loader"
                //     ]
                // })
            },
            //3 编译es6和编译jsx
            {
                test: /(\.jsx|\.js)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            //4 处理字体
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 10000,
                        // fonts/打包到dist下的fonts文件夹
                        name: 'fonts/[name].[hash:7].[ext]'
                    }
                }
            }

        ]
    },
    plugins: [
        //5、提取css到单独的文件夹
        // new ExtractTextPlugin({
        //     //加上/css就会输出到css文件夹下面
        //     filename: 'css/app_[hash].css',
        //     // filename:'app_[chunkhash].css',
        //     disable: false,
        //     allChunks: true
        // }),
        new HtmlWebpackPlugin({
            title: 'React App',
            abc: '自定义输出',
            filename: 'index.html',
            template: 'webpack.temp.ejs'
        }),
    ]
};