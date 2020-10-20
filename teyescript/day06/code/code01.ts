//定义一个完整的函数类型
let add:(base:number,yyy:number) => number =  function(x:number,y:number):number {
  return x+y;
};
//或：
let xxx = function(x:number,y:number):number {
  return x+y;
};


//可选参数和默认参数
//restOfName是个数不限的参数
let y = function (a:number=10,b?:number,...restOfName:string[]):number {
  console.log(restOfName);
  return a+b;
};
console.log(y(1,2,"s","o","p"));
