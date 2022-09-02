import { getLockr } from "src/utils/localStr";
import { useNavigate } from "react-router-dom";
import { message } from "antd";
import { Configuration, ConfigurationParameters, ErrorContext, RequestContext, ResponseContext } from "../generated/openapi"
import { useEffect } from "react";
// const defaultConfig = {}

// const apiDefaultConfig = new Configuration()

// 取消请求操作
const allPendingRequestsRecord: (() => void)[] = [];
const pending: {
    [key in string]: () => void
} = {};

export const removeAllPendingRequestsRecord = () => {
    allPendingRequestsRecord.length > 0 && allPendingRequestsRecord.forEach((func) => {
        // 取消请求（调用函数就是取消该请求）
        func();
    });
    // 移除所有记录
    allPendingRequestsRecord.splice(0);
};

// 取消同一个重复的ajax请求
const removePending = (key: string, isRequest: boolean = false) => {
    if (pending[key] && isRequest) {
        pending[key]();
    }
    delete pending[key];
};


export function useRequest(config?: ConfigurationParameters): { configuration: Configuration }  {
    const navigate = useNavigate()
    const { abort, signal } = new AbortController()

    useEffect(() => {


        return () => {

        }
    }, []);
    //默认配置
    const apiDefaultConfig: ConfigurationParameters = { headers: {} };
    apiDefaultConfig.basePath = process.env.REACT_APP_BASE_URL;
    apiDefaultConfig.accessToken = getLockr('jwt');
    // apiDefaultConfig.headers. = 
    if (apiDefaultConfig.accessToken) {
        message.error('验证失效')
        navigate('./login')
    }

    const middleware = [
        {
            pre: async (context: RequestContext) => {
                const { init, url } = context
                // init.signal = new AbortController().signal
                console.log('url:', url)

            },
            onError: async (context: ErrorContext) => {
                const { error, response, } = context
                console.log('error:', error)
                console.log('ErrorResponse:', response)
            },
            post: async (context: ResponseContext) => {
                const { url, response } = context
                console.log('response:', response)
                if (url === 'login') {

                }
            }
        }
    ]

    //合并配置
    const newApiConfig = Object.assign(apiDefaultConfig, config)

    //因为实例都要使用middleware 进行跳转路由所以只能在hooks进行初始化实例
    const configuration = new Configuration(newApiConfig)


    return { configuration }
}
