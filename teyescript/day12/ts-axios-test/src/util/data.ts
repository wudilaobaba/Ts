import { isJSONObj } from './utils'

export function detailData(data:any):any {
  if(isJSONObj(data)){
    return JSON.stringify(data);
  }
  return data;
}

export function transformReponse(data:any):any {
  if(typeof data === "string"){
    try {
      data = JSON.parse(data);
    }catch (e) {
      // do nothing
    }
    return data;
  }
}
