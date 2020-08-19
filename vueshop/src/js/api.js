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
const registerCode=(data) =>post('user/getCode',data)//注册验证码
const register=(data) =>post('user/register',data)//注册
const getIndex=(data) =>post('good/getIndexView',data)//获取首页
const getSwiper = (data) =>post('swiper/index',data)//获取轮播
const getNav = (data) =>post('sort/getList',data)//获取轮播
const getGood = (data) =>post('good/getGoodInfo',data)//获取商品信息
const addBuyCar = (data) =>post('buycar/addList',data)//添加购物车
const getBuyCar = (data) =>post('buycar/getlist',data)//获取购物车
const changeBuyCar = (data) =>post('buycar/changeList',data)//修改购物车
const delBuyCar = (data) =>post('buycar/delList',data)//删除购物车
const giveOrder = (data) =>post('buycar/giveOrder',data)//生成订单
const getOrder = (data) =>post('order/getList',data)//获取订单列表
const getOrderView = (data) =>post('order/getListView',data)//获取订单详情
export {
    login,registerCode,register,getIndex,getSwiper,getGood,addBuyCar,getNav,getBuyCar,changeBuyCar,delBuyCar,
    giveOrder,getOrder,getOrderView
}