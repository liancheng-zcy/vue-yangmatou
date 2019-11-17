// **** 对vue脚手架的扩充 ****
const path = require('path')

module.exports = {
  chainWebpack: config => {
    config.resolve.alias
    .set('components', path.resolve(__dirname, './src/components'))
    .set('assets',path.resolve(__dirname,'./src/assets/'))
    .set('pages',path.resolve(__dirname,'./src/pages'))
    .set('utils',path.resolve(__dirname,'./src/utils'))
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