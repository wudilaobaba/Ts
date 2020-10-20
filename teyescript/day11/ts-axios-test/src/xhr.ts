import { AxiosPromise, AxiosResponse, RequestData } from './types'
import { parseHeaders } from './util/headers'
export function ajax(config:RequestData):AxiosPromise{
  return new Promise((resolve)=>{
    let {method="get",url,data,headers,responseType} = config;
    let xmlHttpRequest = new XMLHttpRequest();
    if(responseType){
      xmlHttpRequest.responseType = responseType;
    }
    xmlHttpRequest.open(method.toUpperCase(),url,true);
    xmlHttpRequest.onreadystatechange = ()=>{

      if(xmlHttpRequest.readyState !== 4){/*4代表正确接收到数据*/
        return;
      }
      console.log(xmlHttpRequest)
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
      }
      console.log("axiosResponse",axiosResponse)
      resolve(axiosResponse);
    }
    Object.keys(headers).forEach((item)=>{
      xmlHttpRequest.setRequestHeader(item,headers[item]);
    })
    xmlHttpRequest.send(data);
  })
}
