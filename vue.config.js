module.exports={
    devServer:{
        open:true,
        proxy:{
            '/capi':{
                target:'http://api.qingyunke.com',
                changeOrigin:true,
                ws:true,
                pathRewrite:{
                    '^/capi':''
                }
            },
            '/hdapi':{
                target:'http://yinyuyu.cn.utools.club',
                changeOrigin:true,
                ws:true,
                pathRewrite:{
                    '^/hdapi':''
                }
            },
            '/xxxapi': {
                target: 'http://yinyuyu.cn.utools.club',
                changeOrigin: true,
                ws: true,
                pathRewrite: {
                    '^/xxxapi': ''
                }
            },
            '/api': {
                target: 'http://yinyuyu.cn.utools.club',
                changeOrigin: true,
                ws: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    }
}