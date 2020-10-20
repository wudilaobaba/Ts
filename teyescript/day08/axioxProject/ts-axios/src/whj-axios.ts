import {AxiosRequestConfig} from "./types";
import xhr from "./xhr"
import {buildURL} from "./helpers/url";

/**
 * 主方法
 * @param config
 */
function axios(config:AxiosRequestConfig):void{
  precessConfig(config);
  xhr(config);
}

function precessConfig(config:AxiosRequestConfig):void {
  config.url = transFormURL(config);
}

function transFormURL(config:AxiosRequestConfig):string{
  const {url,params} = config;
  return buildURL(url,params);
}
export default axios;
