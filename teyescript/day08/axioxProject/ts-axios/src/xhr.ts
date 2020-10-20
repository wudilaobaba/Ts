import {AxiosRequestConfig} from "./types";

export default function xhr(config:AxiosRequestConfig):void {
  const {data = null,url,method = "get"} = config;//等号就是默认值
  const request = new XMLHttpRequest();
  request.open(method.toUpperCase(),url,true);
  request.send(data);//body体中的数据
}
