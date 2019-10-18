import axios from 'axios';
import Qs from 'qs';
import env from './env.js';

const request = axios.create({
  baseURL: rootCtx,
  withCredentials: false
})

request.interceptors.request.use(
  config => {
   /**post 查询1 */
   if(config.data&&(config.data.hasOwnProperty('methodType')||config.data.hasOwnProperty('limit')||!config.data.hasOwnProperty('model'))){
    if(config.data.hasOwnProperty('methodType')){
      delete config.data.methodType;
    }
    config.headers["Content-Type"] = "application/x-www-form-urlencoded";
    config.data =  Qs.stringify(config.data) ;
    
   }else{
    config.data = JSON.stringify(config.data);
    config.headers["Content-Type"] = "application/json;charset=UTF-8";
   }
    config.headers.clientId = "pc";
    config.headers.Authorization = window.localStorage.getItem("token");
    //let temp_ = window.localStorage.getItem("target");
    //config.headers.target = temp_;
    //config.headers.project = temp_;
    return config;
  },
  error => {
    return Promise.reject(new Error(error).message)
  }
)



request.interceptors.response.use(
  response => {
    return response.data;
  },
  error => {
    console.log('-1-1',new Error(error).message);
    if(new Error(error).message.indexOf('401')!=-1){
      alert("登录令牌失效请求重新获取令牌");
    }else if(new Error(error).message.indexOf('500')!=-1){
      console.log('new Error(error)',error);
      alert("系统异常");
    }
    return Promise.reject(new Error(error).message)
  }
)

export default request