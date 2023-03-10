import axios from 'axios'
import config from '../config'
// import { Message } from "bootstrap-vue-next";
// import Message part of bootstrap-vue
// import { Message } from 'bootstrap-vue'
const NETWORK_ERROR = 'Network Error(网络错误)'

// 创建axios实例
const service = axios.create({
    baseURL: config.baseApi, // api的base_url
})

// make response
const getResp = (options) => {
    // console.log(service.defaults.baseURL + options.url)

    if (!service.defaults.baseURL) {
        return service(options)
    }
    else if (options.method === 'get') {
        return axios.get(service.defaults.baseURL + options.url,
            {
        })
    } else if (options.method === 'post') {
        const formData = new FormData()
        for (const key in options.params) {
            // console.log("打印params:" + key + options.params[key])
            formData.append(key, options.params[key])
        }
        // console.log("打印formData:" + formData)
        // formData.append(options.params.key, options.params.value)
        return axios.post(
            service.defaults.baseURL + options.url,
            formData
        )
    } else if (options.method === 'put') {
        const formData = new FormData()
        for (const key in options.params) {
            // console.log("打印params:" + key + options.params[key])
            formData.append(key, options.params[key])
        }
        return axios.put(
            service.defaults.baseURL + options.url,
            formData
        )
    } else if (options.method === 'delete') {
        return axios.delete(service.defaults.baseURL + options.url,
            {
                data: options.data
            })
    } else {
        return "请求错误！不是get, post, put, delete or Mock"
    }
}

// before request hook
service.interceptors.request.use((req) => {
    // jwt-token 认证的时候使用
    return req

}   )

// after response hook
service.interceptors.response.use((res) => {
    // console.log("res")
    // console.log(res)
    const { code, data, msg } = res.data
    if (code === 200) {
        return data
    } else {
        // 网络请求错误
        // Message.error(msg || NETWORK_ERROR)
        return Promise.reject(msg || NETWORK_ERROR)
    }
}    )

// request method
function request(options) {
    // { method: 'get', data: { } }

    // 默认GET方式
    options.method = options.method || 'get'
    if (options.method.toLowerCase() === 'get') {
        options.params = options.data
    }

    // mock
    let isMock = config.mock // 是否开启mock
    if (typeof options.mock !== 'undefined') { // 针对某个接口是否使用mock
        isMock = options.mock
    }
    // if (isMock) {
    //     console.log('Mock request url: ' +  options.url)
    // } else {
    //     console.log('Real Request url: ' +  options.url)
    // }

    // 线上环境不使用mock
    if (config.env === 'prod') {
        service.defaults.baseURL = config.baseApi
    } else {
        service.defaults.baseURL = isMock ? config.mockApi : config.baseApi
    }

    return getResp(options)
    // return service(options)
}

export default request

