import { isJSONObj, isUpload, isURLSearchParams } from './utils'

/**
 * 将处理好的headers进行返回
 * @param data 若使用方未传data,则默认为undefined
 * @param headers 若使用方未传headers,则默认为:{} 空对象
 */
export function detailHeaders(data:any,headers:any):any{
  console.log(data,headers,headers === {})
  let CONTENT_TYPE:string = "Content-Type";
  if(!data){
    if(headers === {}){/*data headers都没有传*/
      return headers;
    }else{/*无data 有headers  干掉content-type属性*/
      Object.keys(headers).forEach((item)=>{
        if(item.toLocaleUpperCase() === CONTENT_TYPE.toLocaleUpperCase()){
          delete headers[item];
        }
      })
      return headers;
    }
  }else{
    if(JSON.stringify(headers) === "{}"){/*有data 无headers*/
      if(isJSONObj(data)){ /*json格式*/
        headers[CONTENT_TYPE] = "application/json;charset=utf-8";
      }else if(isURLSearchParams(data)){ /*表单提交*/
        headers[CONTENT_TYPE] = "application/x-www-form-urlencoded;charset=utf-8";
      }else if(typeof data === "string" || typeof data === "number" || typeof data === "boolean"){ /*字符串*/
        headers[CONTENT_TYPE] = "text/plain;charset=utf-800";
      }else if(isUpload(data)){ /*文件上传*/
        headers[CONTENT_TYPE] = "multipart/form-data;";
      }else{
        throw new Error("请检查data的数据类型");
      }
    }
    /*有data 有headers 那就按照用户设置的来*/
    return headers;
  }
}

export function parseHeaders(headers:string):any{
  let parsed = Object.create(null);
  if(!headers){
    return parsed;
  }
  headers.split('\r\n').forEach((line)=>{
    let [key,val] = line.split(":");
    key = key.trim().toLocaleLowerCase();
    if(!key){
      return;
    }
    if(val){
      val = val.trim();
    }
    parsed[key] = val;
  })
  return parsed;
}
