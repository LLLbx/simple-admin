import { AxiosRequestConfig, AxiosResponse } from "axios";

const requestInterceptor = (config: AxiosRequestConfig) => {
    console.log(config);
    
    return config
}

const responseInterceptor = (res: AxiosResponse) => {
    return res
}

export {
    requestInterceptor,
    responseInterceptor
}