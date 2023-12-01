import axios from "axios";
import { requestInterceptor, responseInterceptor } from "./interceptors";

export const vueAxios =  axios.create({
    baseURL: '/api',
    timeout: 5000,
    withCredentials: true,
})

// export const testApi = axios.create({
//     baseURL: 'https://v.api.aa1.cn/api/',
// })

// testApi.interceptors.request.use(requestInterceptor, (error) => {
//     console.warn(error)
// })

// testApi.interceptors.response.use(responseInterceptor, (error) => {
//     console.warn(error)
// })

vueAxios.interceptors.request.use(requestInterceptor, (error) => {
    return Promise.reject(error)
})

vueAxios.interceptors.response.use(responseInterceptor, (error) => {
    return Promise.reject(error)
})