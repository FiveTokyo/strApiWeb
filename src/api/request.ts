import axios, { AxiosError, AxiosRequestConfig, AxiosResponse, Canceler } from 'axios'
import jwt_decode, { JwtPayload } from 'jwt-decode'
import qs from 'qs'
import { getLockr, removeLockr, setLockr } from '../utils/localStr'
import { message } from 'antd'

const baseURL = process.env.REACT_APP_BASE_URL

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

// 取消请求操作
const allPendingRequestsRecord: Canceler[] = [];
const pending: {
    [key in string]: Canceler
} = {};

export const removeAllPendingRequestsRecord = () => {
    allPendingRequestsRecord.length > 0 && allPendingRequestsRecord.forEach((func) => {
        // 取消请求（调用函数就是取消该请求）
        func('路由跳转了取消所有请求');
    });
    // 移除所有记录
    allPendingRequestsRecord.splice(0);
};

// 取消同一个重复的ajax请求
const removePending = (key: string, isRequest: boolean = false) => {
    if (pending[key] && isRequest) {
        pending[key](key + ':取消重复请求');
    }
    delete pending[key];
};

const instance = axios.create({
    baseURL: baseURL,
    timeout: 20000,
    responseType: 'json',
    paramsSerializer: function (params: any) {
        return qs.stringify(params, { arrayFormat: 'comma' })
    },

})

// 添加请求拦截器
instance.interceptors.request.use(
    async (config: AxiosRequestConfig) => {
        let reqData: string = '';
        // 处理如url相同请求参数不同时上一个请求被屏蔽的情况
        if (config.method === 'get') {
            reqData = config.url + config.method + JSON.stringify(config.params);
        } else if (config.method) {
            reqData = config!.url + config!.method + JSON.stringify(config.data);
        }
        // 如果用户连续点击某个按钮会发起多个相同的请求，可以在这里进行拦截请求并取消上一个重复的请求
        removePending(reqData, true);
        let token: string = await getLockr('jwt')
        let decoded: JwtPayload;
        if (token) {
            decoded = jwt_decode(token)
            let exp = decoded.exp as number
            let cur = Math.floor(Date.now() / 1000)
            let d = exp - cur
            if (d < 60 * 60 * 5 && d > 0) {
                await request('updateTokenUrl' + `?token=${token}`, {})
                token = await getLockr('jwt');
            }
        }

        config.headers!.Authorization = `Bearer ${token}`;

        if (config.method === 'post') {
            config.data = {
                ...config.data,

            }
        } else {
            config.params = {
                ...config.params,
            }
        }
        config.cancelToken = new axios.CancelToken((c) => {
            pending[reqData] = c;
            allPendingRequestsRecord.push(c);
        });

        return config
    },
    (err) => {
        return Promise.reject(err)
    }
)

// 添加响应拦截器
instance.interceptors.response.use(
    async (res: AxiosResponse) => {
        if (res.config.url === '') {
            await setLockr('jwt', res.data.jwt);
        }
        return res
    },
    (err: AxiosError) => {
        return Promise.reject(err)
    }
)

// 错误处理
const handleApiError = async (error: AxiosError) => {
    let code = 500
    let data = null

    if (axios.isCancel(error)) {
        return new Promise(() => { });
    }

    if (error.response) {
        data = error.response.data
        code = error.response.status
    }

    if ([401].includes(code)) {
        message.error('登录失效请重新登录')
        window.location.href = '/login'
        removeLockr('jwt')
        return Promise.reject(error)
    } else {
        let msg = '未知错误'
        const errorMsg = error.message || ''

        if (errorMsg.includes('Network Error')) {
            msg =
                '请检查网络' +
                (error.config && error.config.url
                    ? error.config.url
                    : JSON.stringify(error.request))
        } else if (errorMsg.includes('timeout') && errorMsg.includes('exceeded')) {
            msg = '请求超时'
        }

        if (data) {
            // @ts-ignore
            msg = data.msg
        }

        // @ts-ignore
        if (!error.config || !error.config.hideToast) {
            console.log(msg || '系统错误，请稍后重试')
        }

        message.error(msg || '系统错误，请稍后重试')


        return Promise.reject(error)
    }
}

export default async function request<T>(url: string, options: AxiosRequestConfig, _ns?: string) {
    return instance
        .request<T>({
            url,
            ...options,
            responseType: options.responseType || 'json'
        })
        .then((res: AxiosResponse) => {
            // @ts-ignore
            return res.data as T
        })
        .catch((err: AxiosError) => {
            handleApiError(err)
            throw err
        })
}
