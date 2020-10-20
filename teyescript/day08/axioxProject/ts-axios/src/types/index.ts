//类型定义
export type Method = 'get'|'GET'|'delete'|'DELETE'|'head'|'HEAD'|'options'|'OPTIONS'|'post'|'POST'|'put'|'PUT'|'patch'|'PATCH';

export interface AxiosRequestConfig {
  url:string;
  method?:Method;
  data?:any; //body体中的参数
  params?:any; //url上的参数 - 其实params就是一个对象/null/undifiend
}


