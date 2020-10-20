import {AxiosRequestConfig} from "./types";

export default function xhr(config:AxiosRequestConfig):void {
  const {data = null,url,method = "get",headers} = config;/*等号就是默认值*/
  const request = new XMLHttpRequest();
  request.open(method.toUpperCase(),url,true);
  Object.keys(headers).forEach((name)=>{
    if(data === null && name.toLocaleLowerCase() === "content-type"){
      /*body体中无数据情况下，干掉header中的content-type属性*/
      delete headers[name];
    }else{
      request.setRequestHeader(name,headers[name]);
    }
  });

  request.send(data);/*body体中的数据*/
}
