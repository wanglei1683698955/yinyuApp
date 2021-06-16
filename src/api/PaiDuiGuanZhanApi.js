import service from '@/unit/service.js'
export function PaiDuiGuanZhanApi(url) {
    return new Promise((reslove, reject) => {
        service.request({
            url,
            method: "get",
        }).then(ok => {
            reslove(ok)
        }).catch(orr => {
            reject(orr)
        })
    })
}