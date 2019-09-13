import axios from "axios"
axios.defaults.baseURL = 'http://127.0.0.1:8888/api/private/v1/'
    // 登录请求
export const login_api = val => {
    return axios.post('login', val)
}