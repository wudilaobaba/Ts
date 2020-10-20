import {AxiosPromise, AxiosRequestConfig} from "./types";
import xhr from "./xhr"
import {buildURL} from "./helpers/url";
import {transformRequest} from "./helpers/data"
import {processHeaders} from "./helpers/headers"

/**
 * 主方法
 * @param config
 */
function axios(config:AxiosRequestConfig):AxiosPromise{
  precessConfig(config);
  return xhr(config);
}

function precessConfig(config:AxiosRequestConfig):void {
  config.url = transFormURL(config);
  config.headers = transFormRequestHeaders(config);/*一定要先判断header*/
  config.data = transFormRequestData(config);
  console.log(config);
}

function transFormURL(config:AxiosRequestConfig):string{
  const {url,params} = config;
  /**
   * 上面一句相当于：
   * let url = config.url
   * let params = config.params;
   */
  return buildURL(url,params);
}

function transFormRequestData(config:AxiosRequestConfig):any{
  const {data} = config;
  return transformRequest(data);
}

function transFormRequestHeaders(config:AxiosRequestConfig):any{
  let {headers = {},data} =  config; /*如果外部不传headers，默认为空对象*/
  headers = headers === null?{}:headers;/*控制header传null的时候，强制转为{}*/
  return processHeaders(headers,data);
}


export default axios;
