import {AxiosRequestConfig, AxiosPromise,AxiosResponse} from "./types";

/**
 * 方法返回Promise后，调用方可以通过then来进行顺序执行，并获取到resolve函数中的参数
 * @param config
 */
export default function xhr(config:AxiosRequestConfig):AxiosPromise {
  return new Promise((resolve)=>{
    const {
      data = null,
      url,
      method = "get",
      headers,
      responseTypeAxiosPromise
    } = config;/*等号就是默认值*/
    const request = new XMLHttpRequest();
    if(responseType){
      request.responseType = responseType;
    }
    request.open(method.toUpperCase(),url,true);
    request.onreadystatechange = function handleLoad(){
      if(request.readyState !== 4){ /*4代表正确接收到数据*/
        return;
      }
      /*响应头*/
      const responseHeaders = request.getAllResponseHeaders();
      /*返回的数据*/
      const responseData = responseType!=="text" ? request.response: request.responseText;
      const axiosResponse: AxiosResponse = {
        data:responseData,
        status:request.status,
        statusText:request.statusText,
        headers:responseHeaders,/*响应头*/
        config,
        request
      };
      resolve(axiosResponse)
    };
    Object.keys(headers).forEach((name)=>{
      if(data === null && name.toLocaleLowerCase() === "content-type"){
        /*body体中无数据情况下，干掉header中的content-type属性*/
        delete headers[name];
      }else{
        request.setRequestHeader(name,headers[name]);
      }
    });
    request.send(data);/*body体中的数据*/
  })

}
