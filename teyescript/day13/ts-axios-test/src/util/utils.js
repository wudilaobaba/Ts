"use strict";
exports.__esModule = true;
function isObject(val) {
    return val !== null && typeof val === 'object';
}
exports.isObject = isObject;
function isDate(val) {
    return toString.call(val) === '[object Date]';
}
exports.isDate = isDate;
function isPlainObject(val) {
    return Object.prototype.toString.call(val) === "[object Object]";
}
exports.isPlainObject = isPlainObject;
function isJSONObj(val) {
    return Object.prototype.toString.call(val) === "[object Object]" || Object.prototype.toString.call(val) === "[object Array]";
}
exports.isJSONObj = isJSONObj;
function isUpload(val) {
    return Object.prototype.toString.call(val) === "[object FormData]";
}
exports.isUpload = isUpload;
function isURLSearchParams(val) {
    return Object.prototype.toString.call(val) === "[object URLSearchParams]";
}
exports.isURLSearchParams = isURLSearchParams;
/**
 * 将from全部拷贝到to中
 */
function extend(to, from) {
    for (var key in from) {
        to[key] = from[key];
    }
    return to;
}
exports.extend = extend;
