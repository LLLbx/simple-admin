import { AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig } from "axios";

const requestInterceptor = (config: InternalAxiosRequestConfig) => {
    console.log(config);
    
    return config
}

const responseInterceptor = (res: AxiosResponse) => {
    console.log(res);
    
    return res
}

export {
    requestInterceptor,
    responseInterceptor
}