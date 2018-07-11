import axios from 'axios'
import qs from 'qs'

axios.interceptors.request.use(config => {
    console.log(config)
    const mock = /^(mock\/)(.*)(.json)$/
    const url = config.url;
    if (config.method === 'post' && mock.test(url)) {
        return Object.assign({}, config, {
            method: 'get', headers: {
                'X-Requested-With': 'XMLHttpRequest',
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
            }
        })
    } else {
        return config
    }
}, error => {
    return Promise.reject(error)
})


axios.interceptors.response.use(response => {
    return response
}, error => {
    return Promise.resolve(error.response)
})

function errorState(response) {
    console.log(response)
    //隐藏loading
    // console.log(response)
    // // 如果http状态码正常，则直接返回数据
    // if (response && (response.status === 200 || response.status === 304 || response.status === 400)) {
    //     return response
    //     // 如果不需要除了data之外的数据，可以直接 return response.data
    // } else {
    //     Vue.prototype.$msg.alert.show({
    //         title: '提示',
    //         content: '网络异常'
    //     })
    // }

}

function successState(res) {
    //隐藏loading
    //统一判断后端返回的错误码
    // if (res.data.errCode == '000002') {
    //     Vue.prototype.$msg.alert.show({
    //         title: '提示',
    //         content: res.data.errDesc || '网络异常',
    //         onShow() {
    //         },
    //         onHide() {
    //             console.log('确定')
    //         }
    //     })
    // } else if (res.data.errCode != '000002' && res.data.errCode != '000000') {
    //     Vue.prototype.$msg.alert.show({
    //         title: '提示',
    //         content: res.data.errDesc || '网络异常',
    //         onShow() {

    //         },
    //         onHide() {
    //             console.log('确定')
    //         }
    //     })
    // }
}
const http = (opts, data) => {

    let Public = { //公共参数
        'srAppid': ""
    }

    let httpDefaultOpts = { //http默认配置
        method: opts.method,
        // baseURL,
        url: opts.url,
        timeout: 10000,
        params: Object.assign(Public, data),
        data: qs.stringify(Object.assign(Public, data)),
        headers: opts.method == 'get' ? {
            'X-Requested-With': 'XMLHttpRequest',
            "Accept": "application/json",
            "Content-Type": "application/json; charset=UTF-8"
        } : {
                'X-Requested-With': 'XMLHttpRequest',
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
            }
    }

    if (opts.method == 'get') {
        delete httpDefaultOpts.data
    } else {
        delete httpDefaultOpts.params
    }

    let promise = new Promise(function (resolve, reject) {
        axios(httpDefaultOpts).then(
            (res) => {
                successState(res)
                resolve(res)
            }
        ).catch(
            (response) => {
                errorState(response)
                reject(response)
            }
        )

    })
    return promise
}
const httpServer = {
    get: (url, params, resolve, reject) => {
        http({ method: 'get', url: url }, params).then((data) => resolve(data), (data) => reject(data))
    },

    post: (url, params, resolve, reject) => {
        http({ method: 'post', url: url }, params).then((data) => resolve(data), (data) => reject(data))
    }
}

export default httpServer
