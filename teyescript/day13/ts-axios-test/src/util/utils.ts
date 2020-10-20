export function isObject(val:any):val is Object {
  return val !== null && typeof val === 'object';
}
export function isDate(val:any):val is Date {
  return toString.call(val) === '[object Date]';
}
export function isPlainObject(val:any):val is Object {
  return Object.prototype.toString.call(val) === "[object Object]";
}

export function isJSONObj(val:any):val is Object {
  return Object.prototype.toString.call(val) === "[object Object]" || Object.prototype.toString.call(val) === "[object Array]";
}

export function isUpload(val:any):val is FormData {
  return Object.prototype.toString.call(val) === "[object FormData]";
}

export function isURLSearchParams(val:any):val is URLSearchParams{
  return Object.prototype.toString.call(val) === "[object URLSearchParams]";
}

/**
 * 将from全部拷贝到to中
 */
export function extend<T,U>(to:T,from:U):T & U {
  for (const key in from){
    (to as T & U)[key]  = from[key] as any;
  }
  return to as T & U;
}

