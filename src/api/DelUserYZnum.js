import service from '@/unit/service.js'
export function DelUserYZnum(url,params){
    return new Promise((reslove,reject)=>{
        service.request({
            url,
            method:"get",
            params
        }).then(ok=>{
            reslove(ok)
        }).catch(orr=>{
            reject(orr)
        })
    })
}