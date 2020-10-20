export declare type Method = 'get'|'GET'|'delete'|'DELETE'|'head'|'HEAD'|'options'|'OPTIONS'|'post'|'POST'|'put'|'PUT'|'patch'|'PATCH';
export interface RequestData {
  method?:Method;
  url?:string;
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

export interface Axios{
  // 以上RequestData中的url就不是必选属性了
  request(config:RequestData):AxiosPromise;

  // 不传body体的请求
  get(url:string,config?:RequestData):AxiosPromise; // method: get
  delete(url:string,config?:RequestData):AxiosPromise; // method: delete
  head(url:string,config?:RequestData):AxiosPromise;// method: head
  options(url:string,config?:RequestData):AxiosPromise;// method: options

  // 传body体的请求
  post(url:string,data?:any,config?:RequestData):AxiosPromise;// method: post
  put(url:string,data?:any,config?:RequestData):AxiosPromise;// method: put
  patch(url:string,data?:any,config?:RequestData):AxiosPromise;// method: patch
}

export interface AxiosInstance extends Axios{// 混合类型接口
  (config:RequestData):AxiosPromise;
}

