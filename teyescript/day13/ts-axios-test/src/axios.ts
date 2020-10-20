import { AxiosPromise, RequestData } from './types'
import {ajax} from './xhr'
import { detailUrl } from './util/url'
import { detailHeaders } from './util/headers'
import { isPlainObject } from './util/utils'
import { detailData, transformReponse } from './util/data'

/**
 * 主方法
 * @param RequestData config 使用方的参数
 * string url必传
 * any data
 * any params
 * any headers
 */
export function axios(config:RequestData):AxiosPromise {
  let {url,data=null,params,headers={}} = config;
  if(!url){
    throw new Error("请求地址【url】参数必传啊啊啊！")
  }
  if(!isPlainObject(headers)){
    throw new Error("headers必须为对象格式->{key:value},且非数组")
  }
  config.url = detailUrl(url,params);
  config.headers = detailHeaders(data,headers);
  config.data = detailData(data);
  return ajax(config).then((res)=>{
    res.data = transformReponse(res.data);// 把res.data转为对象
    return res;
  });
}


