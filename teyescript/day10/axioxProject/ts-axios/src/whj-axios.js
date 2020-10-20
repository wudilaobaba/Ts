"use strict";
exports.__esModule = true;
var xhr_1 = require("./xhr");
var url_1 = require("./helpers/url");
/**
 * 主方法
 * @param config
 */
function axiox(config) {
    precessConfig(config);
    xhr_1["default"](config);
}
function precessConfig(config) {
    config.url = transFormURL(config);
}
function transFormURL(config) {
    var url = config.url, params = config.params;
    return url_1.buildURL(url, params);
}
exports["default"] = axiox;
