import request from '@/utils/request';


//使用了axios库的函数式调用方式，将请求的相关配置（请求路径、请求方法、请求参数等）以对象的形式传递给axios函数

//axios就会根据配置发送HTTP请求，并返回一个Promise对象。在这里，我们将该Promise对象直接返回，以便其他模块可以使用它来处理请求结果。
//因此，getcode函数实际上是一个异步函数，它返回一个Promise对象，其他模块可以使用Promise的then和catch方法来处理请求结果。
export const getcode=(params)=>{
  return request({
    url:'/getcode',
    method:'post',
    data:params
  })
}


export default {getcode}