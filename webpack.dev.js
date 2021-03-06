const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    devtool: 'inline-source-map',
    devServer: {
        //1、 可指定服务器根目录如：src/root 方便本地查看，前提有该文件夹
        // contentBase: path.join(__dirname, "/src/root"),
        inline: true,
        port: 8080,
        //2、 指定本地电脑的IP作为host,方便同一个局域网手机查看效果，请填写自己本机的IP地址或者localhost
        // host: "172.16.9.142",
        host: "localhost",
        // 使用：switchHosts软件把本地指向某个地址
        // host: "local-test.gamelanglive.com",
        //3、 是否需要跨域去请求接口本地测试
        proxy: {
            "/api": {
                target: "http://localhost:8088",
                changeOrigin: true,
                pathRewrite: {
                    "^/api": ""
                }
            }
        }
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('develop')
            }
        })
    ]
});