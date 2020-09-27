"use strict";
exports.__esModule = true;
var util_1 = require("./util");
function encode(val) {
    return encodeURIComponent(val) //以下字符不转为URI编码
        .replace(/%40/g, '@')
        .replace(/%3A/ig, ':')
        .replace(/%24/g, '$')
        .replace(/%2C/ig, ',')
        .replace(/%20/g, '+')
        .replace(/%5B/ig, '[')
        .replace(/%5D/ig, ']');
}
function buildURL(url, params) {
    if (!params) {
        return url;
    }
    var parts = [];
    Object.keys(params).forEach(function (key) {
        var val = params[key];
        if (val === null || typeof val === 'undefined') {
            return;
        }
        var values = [];
        if (Array.isArray(val)) {
            values = val;
            key += '[]';
        }
        else {
            //非数组：
            values = [val];
        }
        values.forEach(function (val) {
            if (util_1.isDate(val)) {
                val = val.toISOString();
            }
            else if (util_1.isObject(val)) {
                val = JSON.stringify(val);
            }
            parts.push(encode(key) + "=" + encode(val));
        });
    });
    console.log(parts);
    var serializedParams = parts.join('&');
    if (serializedParams) {
        var markIndex = url.indexOf("#");
        if (markIndex !== -1) {
            url = url.slice(0, markIndex);
        }
        url += (url.indexOf("?") === -1 ? '?' : '&') + serializedParams;
    }
    return url;
}
exports.buildURL = buildURL;
