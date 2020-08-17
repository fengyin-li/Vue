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
            this.$message.error('系统出错！');
        })
    })
};
// const get =(url)=> {
//     return new Promise((resolve,reject)=>{
//         http.get(url)
//         .then(res => {
//             resolve(res)
//         }).catch(err => {
//             reject(err)
//         })
//     })
// };
const login=(data) =>post('user/login',data)//登录
const register=(data) =>post('user/register',data)//注册
const getIndex=(data) =>post('good/getIndexView',data)//获取首页
const getSwiper = (data) =>post('swiper/index',data)//获取轮播
const getGood = (data) =>post('good/getGoodInfo',data)//获取商品信息
const addBuyCar = (data) =>post('buycar/addList',data)//获取商品信息
export {
    login,register,getIndex,getSwiper,getGood,addBuyCar
}