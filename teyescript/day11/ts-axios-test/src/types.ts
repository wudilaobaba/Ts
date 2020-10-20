declare type Method = 'get'|'GET'|'delete'|'DELETE'|'head'|'HEAD'|'options'|'OPTIONS'|'post'|'POST'|'put'|'PUT'|'patch'|'PATCH';
export interface RequestData {
  method?:Method;
  url:string;
  data?:any;
  params?:any;
  headers?:any;
  responseType:XMLHttpRequestResponseType/*响应的数据类型 可传json,text,blob等字符串 */
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

