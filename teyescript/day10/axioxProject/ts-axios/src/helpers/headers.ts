import {isPlainObject} from "./util"
function normalLizeHeaderName(headers:any,normalLizeName:string):void {
  if(!headers){
    return;
  }
  Object.keys(headers).forEach((name)=>{/*name:键名*/
    if(name!==normalLizeName && name.toLocaleUpperCase() === normalLizeName.toLocaleUpperCase()){
      headers[normalLizeName] = headers[name];/*将headers的键名设置为-->Content-Type*/
      delete headers[name];
    }
  })
}
export function processHeaders(headers:any,data:any):any {
  const CONTENT_TYPE:string = "Content-Type";
  normalLizeHeaderName(headers,CONTENT_TYPE);
  if(isPlainObject(data)){
    console.log("headers:",headers);
    /*body体数据是json格式 && headers没有CONTENT_TYPE属性 才设置为application/json;charset=utf-8 */
    if(headers && !headers[CONTENT_TYPE]){
      headers[CONTENT_TYPE] = "application/json;charset=utf-8";
    }
  }
  return headers;
}
