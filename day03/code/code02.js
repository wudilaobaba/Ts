var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var f = [1, 2];
var s = [3, 4];
var a = __spreadArrays([0], f, s, [5, 6, 7]);
console.log(a);
var o = {
    food: "xx",
    price: "10",
    xxx: "dsad"
};
var search = __assign(__assign({}, o), { food: '12', cc: "cc" }); //food的值会被替换
console.log(search);
