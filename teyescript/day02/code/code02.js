//枚举类型
var Color;
(function (Color) {
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Green"] = 2] = "Green";
    Color[Color["Blue"] = 3] = "Blue";
})(Color || (Color = {}));
var c = Color.Green;
console.log(c); //2
var colorName = Color[2];
console.log(colorName); //Green
//any类型  不知道类型的时候或不需要强类型的时候，就用any类型, 跳过类型检查
var notSure = 4;
notSure = "222";
notSure = false;
var list = [1, true, "2"];
//void类型，通常用在函数的返回值中，意思是没有返回值
function warUser() {
    console.log("Thie sdsda");
}
//undefined类型 和 null类型
var u = undefined;
var n = null;
var x = undefined;
var num = 2;
num = null; //如果严格检查的话，是会报错的 tsc code02.ts --strictNullChecks
// never类型  可以赋值给任何类型
function error(message) {
    throw new Error(message);
}
function fail() {
    return error("111111");
}
// fail();
function wuxian() {
    while (true) {
    }
}
create({ prop: 1 });
create(null);
// create(1);
// create(true);
// create("true");
create(undefined);
//类型强转 方式1
var str = "1234";
var all = str.length;
console.log(all);
//类型强转 方式2
var all2 = str.length;
console.log(all2);
