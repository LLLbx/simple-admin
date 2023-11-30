import axios from "axios";

const vueAxios =  axios.create({
    baseURL: '/api',
    timeout: 5000,
    withCredentials: true,
})

export const testApi = axios.create({
    baseURL: 'https://v.api.aa1.cn/api/',
})

vueAxios.interceptors.request.use((config) => {
    console.log(config);
    
    return config
}, (error) => {
    return Promise.reject(error)
})

vueAxios.interceptors.response.use((res) => {
    return res
}, (error) => {
    return Promise.reject(error)
})