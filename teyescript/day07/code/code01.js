function f(arg) {
    return arg;
}
var t = f(12);
console.log(t);
//泛型函数类型
var ttt = f;
var s = {
    arg: "ss",
    name: "xx"
};
//泛型类
var People = /** @class */ (function () {
    function People() {
    }
    return People;
}());
var p = new People();
p.add = function (a, b) {
    return a + b;
};
function de(t) {
    console.log(t.length);
    return t;
}
de("123456789"); //T类型必须要有length属性
function xxxx(t, x) {
    return t;
}
var o = {
    a: "aa",
    b: "bb",
    c: "cc"
};
xxxx(o, "a");
// xxxx(o,"d"); //报错
//类类型在工厂函数中的运用
var Tiger = /** @class */ (function () {
    function Tiger() {
        console.log("老虎");
    }
    return Tiger;
}());
var Bee = /** @class */ (function () {
    function Bee() {
        console.log("蜜蜂");
    }
    return Bee;
}());
function create(c) {
    return new c();
}
create(Bee);
create(Tiger);
