"use strict";
exports.__esModule = true;
function xhr(config) {
    var _a = config.data, data = _a === void 0 ? null : _a, url = config.url, _b = config.method, method = _b === void 0 ? "get" : _b; //等号就是默认值
    var request = new XMLHttpRequest();
    request.open(method.toUpperCase(), url, true);
    request.send(data); //body体中的数据
}
exports["default"] = xhr;
