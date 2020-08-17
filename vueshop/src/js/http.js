import router from '../router/router'
import axios from 'axios';
import { Loading, Message, MessageBox } from 'element-ui'
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';
const http = axios.create({
    baseURL: "/api",// 从环境进程中根据运行环境获取的api的base_url
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json;charset=UTF-8'
    },
    transformRequest: [function (data, headers) {
        if (headers['Content-Type'] === 'application/json;charset=UTF-8') {
            return data;
        } else {
            return JSON.stringify(data);
        }
    }]
})
let loadingInstance; //loading

// 添加请求拦截器
http.interceptors.request.use(function (config) {
    loadingInstance = Loading.service({
        text: '加载中...',
        background: 'rgba(255,255,255,.3)'
    });
    // 开发环境下，如果请求是 post,put,patch,则打印数据体，方便调试
    if (process.env.NODE_ENV === 'development') {
        const { method } = config;
        if (method === 'post' || method === 'put' || method === 'patch') {
            // console.log(config.data);
        }
    }
    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});


// 添加响应拦截器（请求成功后）
http.interceptors.response.use(function (response) {
    loadingInstance.close(); //关闭loading
    //这里是我和后台定的状态码
    if (response.data && (response.data.code == 90002 || response.data.code == 90001 || response.data.code == 90003)) {
        // localStorage.removeItem("jwt_token");
        // Message({
        //     type: 'none',
        //     message: '请重新登录'
        // });
        // this.$nextTick(window.location.href = '../login.html');
        MessageBox.alert('身份信息已过期，请重新登陆', '提示', {
            confirmButtonText: '重新登陆',
            showClose: false,
            type: 'error',
            callback: () => {
                router.replace({
                    path: '/login'
                });
            }
        });
        return Promise.resolve(response)
    }
    if (!response.data.success) {
        // Message({
        //     message: response.data.message,
        // });
        return Promise.resolve(response)
    }
    // 对响应数据做点什么
    return response;
}, function (error) {
    // 对响应错误做点什么
    loadingInstance.close(); //关闭loading
    if (error && error.response) {
        Message({
            message: '网络开小差了,请稍后重试...',
            type: 'error'
        })
        return Promise.reject(error);
    }
});

export default http;