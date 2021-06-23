/*
 * @Date: 2021-06-12 17:20:17
 * @information: 
 */
import axios from 'axios'

axios.interceptors.request.use(
  config => {
    console.log('请求配置项->',config)
    return config
  }
)
