module.exports = {
    // publicPath: process.env.NODE_ENV === 'production'
    // ? '/production-sub-path/'
    // : './',
    publicPath : './',
    devServer:{
        proxy:{
            '/api':{
                target:'http://192.168.0.107:3000/',
                changOrigin: true,
                pathRewrite: {
                    '^/api': ''   
                }
            }
        }
    }
}