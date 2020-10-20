import {isDate,isPlainObject} from "./util";
function encode(val:string):string{
  return encodeURIComponent(val)//以下字符不转为URI编码
    .replace(/%40/g,'@')
    .replace(/%3A/ig,':')
    .replace(/%24/g,'$')
    .replace(/%2C/ig,',')
    .replace(/%20/g,'+')
    .replace(/%5B/ig,'[')
    .replace(/%5D/ig,']')
}

/**
 * 处理GET请求时，解析路由参数：
 * @param url
 * @param params 是对象类型(包含null和undefind),
 * 如果有成员为数组类型，那么该该数组中的元素只能是基本类型
 * params中，除了数组类型，其他的成员都只会转为URL原字符串
 */
export function buildURL(url:string,params?:any) :string{
  if (!params || !isPlainObject(params)){
    return url;
  }

  const parts:string[] = [];
  //以下路由参数的处理根据后端要求进行！！！！！！！
  Object.keys(params).forEach((key)=>{
    const val:any = params[key];
    if(val === null || typeof val === 'undefined'){
      return;
    }
    let values = [];
    if(Array.isArray(val)){
      values = val;
      // key+='[]';
    }else{
      //非数组：
      values = [val];
    }
    values.forEach((val)=>{
      if (isDate(val)){
        val = val.toISOString()
      }else if(isPlainObject(val)){
        val = JSON.stringify(val);
      }
      parts.push(`${encode(key)}=${encode(val)}`)
    })
  });



  let serializedParams = parts.join('&');
  if(serializedParams){
    const markIndex = url.indexOf("#");
    if(markIndex !== -1){
      url = url.slice(0,markIndex);
    }
    url+=(url.indexOf("?") === -1?'?':'&')+serializedParams;
  }
  return url;
}
