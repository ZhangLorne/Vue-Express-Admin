let root='/api'
let axios=require('axios')
function apiAxios (method, url, params, success, failure) {
  axios({
    method: method,
    url: url,
    data: method === 'POST' || method === 'PUT' ? params : null,
    params: method === 'GET' || method === 'DELETE' ? params : null,
    baseURL: root,
    withCredentials: false
  })
    .then(function (res) {
      if (res.status === 200) {
        if (success) {
          success(res.data)
        }
      } else {
        if (failure) {
          failure(res.data)
        } else {
        }
      }
    })
    // .catch(function (err) {
    //   let res = err.response
    //   if (err) {
    //     window.alert('api error, HTTP code: ' + res.status)
    //   }
    // })
}
var port='http://localhost:3000';
export default {
  //请求方式
  get: (url, params, success, failure)=> {
    return apiAxios('GET', url, params, success, failure)
  },
  post: (url, params, success, failure)=>{
    return apiAxios('POST', url, params, success, failure)
  },
  put: (url, params, success, failure)=>{
    return apiAxios('PUT', url, params, success, failure)
  },
  delete:(url, params, success, failure)=>{
    return apiAxios('DELETE', url, params, success, failure)
  },
  //具体请求
  findUser:function (params,success) {
    this.post(port+'/user/find',params,success)
  },
  saveUser:function (params,success) {
    this.post(port+'/user/save',params,success)
  },
  removeUser:function (params,success) {
    this.post(port+'/user/remove',params,success)
  },
  login:function (params,success) {
    this.post(port+'/user/login',params,success)
  },
  saveDaily:function (params,success) {
    this.post(port+'/daily/save',params,success)
  }
}
