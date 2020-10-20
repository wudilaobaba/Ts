import {isPlainObject} from "./util";

/**
 * 处理请求数据
 */
export function transformRequest(data:any):any {
  if(isPlainObject(data)){
    return JSON.stringify(data);
  }
  return data;
}
