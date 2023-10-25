// 对axios进行分装
// 利用axios请求和请求拦截器功能
// 请求头中携带公共的参数
// 简化服务器返回的参数,处理http网络错误
import axios from 'axios';
import {ElMessage} from "element-plus";
// 利用create创键一个实例,设置基础路劲和超时时间设置
export const request = axios.create({
    baseURL: '/api',// 请求的基础路径设值
    timeout: 5000,//设置超时时间为5秒
})

// 请求拦截器
request.interceptors.request.use((config) => {
    // config:拦截器回调注入的对象
    // 可以通过请求头携带公共参数
    return config;
})

// 响应拦截器
request.interceptors.response.use((response) => {
    // 成功的回调,一般会进行简化数据
    return response.data;
}, error => {
    // 处理http请求中的错误
    let status = error.response.status;
    console.log(status);
    switch (status) {
        case 404:
            ElMessage({
                type: 'error',
                message: error.message
            })
            break;
    }
    return Promise.reject(new Error(error.message))
})