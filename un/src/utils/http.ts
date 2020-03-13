import axios from 'axios'
import {notification} from 'antd';
import baseConfig from '../config/baseConfig';

const http = axios.create({
  withCredentials: true
})

http.interceptors.request.use((value,tag=undefined) => {

  let bool = value.url == "/api/0/user/queryUserMenuForTree"
  let deviceCommand = value.url == "/api/0/commandHandle/create"
  value = {
    ...value,
    baseURL: bool?(window as any).MENU_URL : (window as any).BASE_URL,
    headers: {
      ...value.headers,
      Authorization: baseConfig.authorizationInfo || 'eyJhbGciOiJIUzI1NiJ9.eyJyZWFsTmFtZSI6IkFkbWluIiwiYmVsb25nVG9JZHMiOiI3OCIsImRlcHRJZCI6MTMwLCJ0ZW5hbnRJZCI6bnVsbCwiZGVwdFBhdGgiOiIxMDQvMTI5LzEzMCIsImlkIjoiMSIsImV4cCI6MjI2NzIyMDQ2MX0.-G3ZsnqjPyOFQRZyBglKgrRH5HgkXExaCphRxBZdhuM'
    }
  }
  return value
}, error => {
  return Promise.reject(error)
})

http.interceptors.response.use(res => {
  if (res.status === 200) {
    if(res.data.status == 0){
      return Promise.resolve(res)
    }else{
      if(res.data.status == 100){
        notification.error({
          message: 'token错误',
          description: '请重新登录'
        })
        window.location.href = (window as any).LOGOUT_URL       
      }else{
        notification.error({
          message: '错误',
          description: res.data.message
        })
      }
    }
   
  }
  return Promise.reject(res)
}, error => {
  if (error.response.status === 500) {
    notification.error({
      message: '系统错误',
      description: error.response.data.message
    })
    return Promise.reject(error)
  }
  return Promise.reject(error)
})

export default http
