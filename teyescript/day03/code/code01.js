var a = [1, 2,];
var c = a[0], b = a[1];
console.log(c, b);
function f(_a) {
    var xx = _a[0], yy = _a[1];
    console.log(xx);
    console.log(yy);
}
var zz = [11, 111];
f(zz);
var _a = [1, 2, 3, 4, 5, 6], first = _a[0], xxx = _a.slice(1);
console.log(first, xxx);
var first1 = [1, 2, 3, 4, 5, 6][0];
console.log(first1); // 1
var _b = [1, 2, 3, 4, 5, 6], second = _b[1], forth = _b[4];
console.log(second, forth); //2 5
//对象解构
var ooo = {
    aaa: 'foo',
    bbb: 12,
    ccc: 'bar'
};
// let {aaa,bbb} = ooo;
// console.log(aaa,bbb);
// let {aaa,...sss} = ooo;
// console.log(sss.bbb+sss.ccc.length);
var new1 = ooo.aaa, new2 = ooo.bbb; //将属性重命名
var aaa = ooo.aaa, bbb = ooo.bbb; //定义变量类型
console.log(new1, new2);
function f1(obj) {
    //在这里给b赋默认值
    var a = obj.a, _a = obj.b, b = _a === void 0 ? 1001 : _a;
    console.log(obj, b);
}
f1({ a: "whj" });
//函数的参数解构 - 参数默认值的设置  默认参数的设置
function f2(_a) {
    var _b = _a === void 0 ? { a: "xx" } : _a, a = _b.a, _c = _b.b, b = _c === void 0 ? 0 : _c;
    console.log(a, b);
}
f2({ a: "2" });
f2();
