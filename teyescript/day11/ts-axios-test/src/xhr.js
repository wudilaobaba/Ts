"use strict";
exports.__esModule = true;
exports.ajax = void 0;
function ajax(config) {
    var _a = config.method, method = _a === void 0 ? "get" : _a, url = config.url, data = config.data, params = config.params;
    // let xmlHttpRequest = new XMLHttpRequest();
    console.log(method, url, data, params);
    // xmlHttpRequest.open(method.toUpperCase(),url,true);
    // xmlHttpRequest.send(data);
}
exports.ajax = ajax;
