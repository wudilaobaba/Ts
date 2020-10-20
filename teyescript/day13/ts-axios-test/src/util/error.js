"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var AxiosError = /** @class */ (function (_super) {
    __extends(AxiosError, _super);
    function AxiosError(message, config, code, request, response) {
        var _this = _super.call(this, message) || this;
        _this.config = config;
        _this.code = code;
        _this.request = request;
        _this.response = response;
        _this.isAxiosError = true;
        // 解决ts的一个坑，class继承了内置接口后，实例后无法调用实例方法
        // 解决方式：在构造函数中的super下面加上以下语句：
        Object.setPrototypeOf(_this, AxiosError.prototype);
        return _this;
    }
    AxiosError.prototype.getIsAxiosError = function () {
        return this.isAxiosError;
    };
    AxiosError.prototype.getConfig = function () {
        return this.config;
    };
    AxiosError.prototype.getCode = function () {
        return this.code;
    };
    AxiosError.prototype.getRequest = function () {
        return this.request;
    };
    AxiosError.prototype.getResponse = function () {
        return this.response;
    };
    return AxiosError;
}(Error));
exports.AxiosError = AxiosError;
function createError(message, config, code, request, response) {
    return new AxiosError(message, config, code, request, response);
}
exports.createError = createError;
