// vue.config.js
const path = require('path');

module.exports = {
    // 选项...
    devServer: {
        open: true, // 启动服务后是否打开浏览器
        proxy: {
            '/api': {
                // target: 'http://192.168.1.209:10751/', // Development开发模式
                // target: 'http://192.168.1.238:10751/', // Test测试模式
                target: 'http://192.168.1.218:10751/', // Production生产环境
                changeOrigin: true,
                autoRewrite: true,
                cookieDomainRewrite: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    },
    configureWebpack: {
        resolve: {
            // alias: {
            //     css: path.join(__dirname, 'src/assets/less'),
            // },
        },
        plugins: [
            // new MyAwesomeWebpackPlugin()
            //......
        ]
    }
}
