import { get } from "@/axios/request";

const getTest = () => {
    return get('/yiyan/index.php ')
}

export {
    getTest
}