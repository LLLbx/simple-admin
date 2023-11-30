import { testApi } from "."

export const get = (url: string, params?: URLSearchParams) => {
    testApi.get(url, {
        params
    })
}