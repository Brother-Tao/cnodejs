// import { message } from 'antd'
import axios from 'axios' // 使用前要先安装依赖：npm install axios

// 创建axios实例
const request = axios.create({
  baseURL: 'https://cnodejs.org/api/v1',
  withCredentials: false, // 跨域请求时是否需要访问凭证
  timeout: 5000, // 请求超时时间
  headers: {
    // 可以放一下公用的请求头信息
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

// 请求拦截器
request.interceptors.request.use(
  (config) => config,
  (error) => Promise.reject(error)
)

// 响应拦截器
request.interceptors.response.use(
  (response) => response.data,
  (error) => Promise.reject(error)
)

export default request
