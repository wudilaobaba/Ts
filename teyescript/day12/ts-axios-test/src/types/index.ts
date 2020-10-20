declare type Method = 'get'|'GET'|'delete'|'DELETE'|'head'|'HEAD'|'options'|'OPTIONS'|'post'|'POST'|'put'|'PUT'|'patch'|'PATCH';
export interface RequestData {
  method?:Method;
  url:string;
  data?:any;
  params?:any;
  headers?:any;
  responseType?:XMLHttpRequestResponseType;/*响应的数据类型 可传json,text,blob等字符串 */
  timeout?:number; // 该时间内，如果后端没有返回数据，则前端会做相应的处理 不传或传0都是不超时  单位为毫秒
}

export interface AxiosResponse {
  data:any,
  status:number,
  statusText:string,
  headers:any,/*响应头*/
  config:RequestData,
  request:any
}

export interface AxiosPromise extends Promise<AxiosResponse>{

}

// export interface AxiosError extends Error{ // Error是ts的内置接口
//   isAxiosError:boolean;
//   config:RequestData;
//   code?:string | null;
//   request?:any;
//   response?:AxiosResponse;
// }
