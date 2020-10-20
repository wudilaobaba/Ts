import { AxiosPromise, AxiosResponse, RequestData } from './types'
import { parseHeaders } from './util/headers'
import {AxiosError, createError} from "./util/error";
export function ajax(config:RequestData):AxiosPromise{
  return new Promise((resolve,reject)=>{ // 一旦出现异常，则执行reject函数
    let {method="get",url,data,headers={},responseType,timeout} = config;
    let xmlHttpRequest = new XMLHttpRequest();
    if(responseType){
      xmlHttpRequest.responseType = responseType;
    }
    if(timeout){
      xmlHttpRequest.timeout = timeout;
    }
    xmlHttpRequest.open(method.toUpperCase(),url!,true); // 保证url不是空
    xmlHttpRequest.onreadystatechange = ()=>{
      if(xmlHttpRequest.readyState !== 4){/*4代表正确接收到数据*/
        return;
      }
      if(xmlHttpRequest.status === 0){
        return;
      }
      // console.log(xmlHttpRequest);
      /*响应头*/
      let responseHeaders = parseHeaders(xmlHttpRequest.getAllResponseHeaders());
      /*返回的数据*/
      let responseData = responseType!=="text" ? xmlHttpRequest.response: xmlHttpRequest.responseText;
      let axiosResponse:AxiosResponse = {
        data:responseData,
        status:xmlHttpRequest.status,
        statusText:xmlHttpRequest.statusText,
        headers:responseHeaders,/*响应头*/
        config,
        request:xmlHttpRequest
      };

      // console.log("axiosResponse",axiosResponse);
      handleResponse(axiosResponse);
    };
    xmlHttpRequest.ontimeout = ()=>{
      let err:AxiosError = createError(`超时${timeout}毫秒...`,config,"ECONNABORTED",xmlHttpRequest);
      reject(err);
    };
    xmlHttpRequest.onerror = ()=>{
      reject(createError("Network Error",config,null,xmlHttpRequest));
    };
    Object.keys(headers).forEach((item)=>{
      xmlHttpRequest.setRequestHeader(item,headers[item]);
    });
    xmlHttpRequest.send(data);

    function handleResponse(response:AxiosResponse):void {
      if(response.status >= 200 && response.status<300){
        resolve(response);// 成功
      }else{
        reject(createError(`状态码：${response.status}，错误`,config,null,xmlHttpRequest,response));
        // reject(new Error(`状态码：${response.status}，错误`))
      }
    }
  })
}
