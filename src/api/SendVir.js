import service from '@/unit/service.js'
export function SendVir(url,params){
    return new Promise((reslove,reject)=>{
        service.request({
            url,
            mounted:"get",
            params
        }).then(ok=>{
            reslove(ok)
        }).catch(orr=>{
            reject(orr)
        })
    })
}