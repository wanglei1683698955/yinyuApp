import axios from "axios"
// 创建axios 赋值给常量service 
const service = axios.create();

// 添加请求拦截器（Interceptors）
service.interceptors.request.use(function (config) {
    // 发送请求之前做写什么
    // console.log(config)
    // 在请求头中携带token
    // 需要大家自己进行一些cookie或者本地存储的数据是否存在的判断
    // 需要大家自己进行一些cookie或者本地存储的数据是否存在的判断
    // 需要大家自己进行一些cookie或者本地存储的数据是否存在的判断
    // 需要大家自己进行一些cookie或者本地存储的数据是否存在的判断
    // config.headers.xxx=window.localStorage.getItem("token")

    return config;
  }, function (error) {
    // 请求错误的时候做些什么
    return Promise.reject(error);
  });

// 添加响应拦截器
service.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    return response;
  }, function (error) {
    // 对响应错误做点什么

    console.log(error.response.status)

    switch (error.response.status) {
        case 404:
                console.error("当前请求url有误")
            break;
        case 500:
                console.error("当前服务器出错")
            break;
    
        default:
            console.error("异常错误")

            break;
    }

    return Promise.reject(error);
  });
  export default service