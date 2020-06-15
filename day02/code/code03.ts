function f() {
  var a = 10;
  return function g() {
    var b = a+1;
    return b;
  }
}
var g = f();//f函数执行完，a没有释放，保存到了g函数中
console.log(g());//11





function f1(should) {
  //var x;
  if(should){
    var x = 10; //var会在代码块中声明提前
  }
  return x;
}
console.log(f1(true)); //10
console.log(f1(false)); //undefinded





function f2(matrix) {//matrix是一个二维数组
  var sum = 0;
  for(var i=0;i<matrix.length;i++){
    var currentRow = matrix[i];
    for(var j=0;j<currentRow.length;j++){
      sum+=currentRow[j];
    }
  }
  return sum;
}
var m = [
  [1,2,3],
  [4,5,6]
]
console.log(f2(m));






for(var i=0;i<10;i++){ //js是单线程的，所以是执行完了才延迟执行的
  setTimeout(()=>{
    console.log(i)
  },100*i)
}