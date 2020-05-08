import http from './http'
// const fetch =(url,data)=> {//get类型axios--param1:接口地址;param2:接口参数
//     return new Promise((resolve,reject)=>{
//         http.get(url,JSON.stringify(data)||{})
//         .then(res => {
//             resolve(res.data)
//         }).catch(err => {
//             reject(err)
//         })
//     })
// };
const post =(url,data)=> {
    return new Promise((resolve,reject)=>{
        http.post(url,JSON.stringify(data))
        .then(res => {
            resolve(res.data)
        }).catch(err => {
            reject(err)
        })
    })
};
const getIndexFloor=(data) =>post('Img/GetFloorInfo',data)//首页楼层
export {
    getIndexFloor
}