import { vueAxios } from "."

export const get = (url: string, params?: Record<string, any>) => {
    vueAxios.get(url, {
        params,
    })
}

export const post = (url: string, params: Record<string, any>) => {
    vueAxios.post(url, {
        params
    })
}