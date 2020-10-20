"use strict";
exports.__esModule = true;
var toString = Object.prototype.toString;
/**
 * 判断val是不是日前类型
 * @param val
 */
function isDate(val) {
    return toString.call(val) === '[object Date]'; //判断是不是Date类型
}
exports.isDate = isDate;
/**
 * 判断是否是对象
 * @param val
 */
function isObject(val) {
    return val !== null && typeof val === 'object';
}
exports.isObject = isObject;
/**
 * 判断是不是JSON格式的对象
 */
function isPlainObject(val) {
    return toString.call(val) === "[object Object]";
}
exports.isPlainObject = isPlainObject;
