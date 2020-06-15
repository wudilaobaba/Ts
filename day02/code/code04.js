function f(input) {
    var a = 100;
    if (input) {
        var b = a + 1;
        return b;
    }
    // return b;  //let是有块级作用域的，当前大括号中找不到只会向上级大括号中查找
}
try {
    throw "Oh no";
}
catch (e) {
    console.log("Catch it");
}
// console.log(e)   //let是有块级作用域的，当前大括号中找不到只会向上级大括号中查找
// a++; 报错，let不会声明提前
var a = 1;
a++;
// function f1(x) {
//   let x;
//   let x;//在一个块内，let不可以重复声明同一个变两
//   if(true){
//     let x;
//   }
// }
function f2(con, x) {
    if (con) {
        var x_1 = 100;
        return x_1;
    }
    return x;
}
console.log(f2(true, 1)); //100
console.log(f2(false, 1)); //1
function f3(matrix) {
    var sum = 0; //两层都是i,不会有冲突，因为有块级作用域，内层变量不会干扰到外层
    for (var i = 0; i < matrix.length; i++) {
        var currentRow = matrix[i];
        for (var i_1 = 0; i_1 < currentRow.length; i_1++) { //但是不建议这样写，还是改为j
            sum += currentRow[i_1];
        }
    }
    return sum;
}
var m = [
    [1, 2, 3],
    [4, 5, 6]
];
console.log(f3(m));
var _loop_1 = function (i) {
    setTimeout(function () {
        console.log(i);
    }, 100 * i);
};
for (var i = 0; i < 10; i++) {
    _loop_1(i);
}
