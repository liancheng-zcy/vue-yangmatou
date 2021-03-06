// **** 对vue脚手架的扩充 ****
const path = require('path')

module.exports = {
  chainWebpack: config => {
    config.resolve.alias
    .set('components', path.resolve(__dirname, './src/components'))
    .set('assets',path.resolve(__dirname,'./src/assets/'))
    .set('pages',path.resolve(__dirname,'./src/pages'))
    .set('utils',path.resolve(__dirname,'./src/utils'))
    .set('store',path.resolve(__dirname,'./src/store'))
    .set('node_modules',path.resolve(__dirname,'./node_modules'))
    
  },
  devServer: {
    proxy: {
      '/ajax': {
        target: 'https://m.ymatou.com',
        pathRewrite: {"^/ajax" : ""},
        secure: false, 
        changeOrigin: true,
      },
    }
  }
}