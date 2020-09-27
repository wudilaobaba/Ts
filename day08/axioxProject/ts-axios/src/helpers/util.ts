const toString = Object.prototype.toString;

/**
 * 判断val是不是日前类型
 * @param val
 */
export function isDate(val:any):val is Date {//类型保护
  return toString.call(val) === '[object Date]';//判断是不是Date类型
}

/**
 * 判断是否是对象
 * @param val
 */
export function isObject(val:any):val is Object {//类型保护
  return val !== null && typeof val === 'object';
};

