"use strict";
exports.__esModule = true;
var headers_1 = require("./util/headers");
var error_1 = require("./util/error");
function ajax(config) {
    return new Promise(function (resolve, reject) {
        var _a = config.method, method = _a === void 0 ? "get" : _a, url = config.url, data = config.data, headers = config.headers, responseType = config.responseType, timeout = config.timeout;
        var xmlHttpRequest = new XMLHttpRequest();
        if (responseType) {
            xmlHttpRequest.responseType = responseType;
        }
        if (timeout) {
            xmlHttpRequest.timeout = timeout;
        }
        xmlHttpRequest.open(method.toUpperCase(), url, true); // 保证url不是空
        xmlHttpRequest.onreadystatechange = function () {
            if (xmlHttpRequest.readyState !== 4) { /*4代表正确接收到数据*/
                return;
            }
            if (xmlHttpRequest.status === 0) {
                return;
            }
            // console.log(xmlHttpRequest);
            /*响应头*/
            var responseHeaders = headers_1.parseHeaders(xmlHttpRequest.getAllResponseHeaders());
            /*返回的数据*/
            var responseData = responseType !== "text" ? xmlHttpRequest.response : xmlHttpRequest.responseText;
            var axiosResponse = {
                data: responseData,
                status: xmlHttpRequest.status,
                statusText: xmlHttpRequest.statusText,
                headers: responseHeaders,
                config: config,
                request: xmlHttpRequest
            };
            // console.log("axiosResponse",axiosResponse);
            handleResponse(axiosResponse);
        };
        xmlHttpRequest.ontimeout = function () {
            var err = error_1.createError("\u8D85\u65F6" + timeout + "\u6BEB\u79D2...", config, "ECONNABORTED", xmlHttpRequest);
            reject(err);
        };
        xmlHttpRequest.onerror = function () {
            reject(error_1.createError("Network Error", config, null, xmlHttpRequest));
        };
        Object.keys(headers).forEach(function (item) {
            xmlHttpRequest.setRequestHeader(item, headers[item]);
        });
        xmlHttpRequest.send(data);
        function handleResponse(response) {
            if (response.status >= 200 && response.status < 300) {
                resolve(response); // 成功
            }
            else {
                reject(error_1.createError("\u72B6\u6001\u7801\uFF1A" + response.status + "\uFF0C\u9519\u8BEF", config, null, xmlHttpRequest, response));
                // reject(new Error(`状态码：${response.status}，错误`))
            }
        }
    });
}
exports.ajax = ajax;
