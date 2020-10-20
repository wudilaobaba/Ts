let a = [1,2,];
let [c,b] = a;
console.log(c,b);



function f([xx,yy]:[number,number]) {
  console.log(xx);
  console.log(yy);
}
let zz:[number,number] = [11,111];
f(zz);


let [first,...xxx]:Array<number> = [1,2,3,4,5,6];
console.log(first,xxx);
let [first1]:Array<number> = [1,2,3,4,5,6];
console.log(first1);// 1
let [,second,,,forth]:Array<number> = [1,2,3,4,5,6];
console.log(second,forth);//2 5




//对象解构
let ooo = {
  aaa:'foo',
  bbb:12,
  ccc:'bar'
};
// let {aaa,bbb} = ooo;
// console.log(aaa,bbb);
// let {aaa,...sss} = ooo;
// console.log(sss.bbb+sss.ccc.length);
let{aaa:new1,bbb:new2} = ooo; //将属性重命名
let {aaa,bbb}:{aaa:string,bbb:number} = ooo;//定义变量类型
console.log(new1,new2);



function f1(obj:{a:string,b?:number}):void { //函数参数的b属性可以传值
  //在这里给b赋默认值
  let {a,b=1001} = obj;
  console.log(obj,b);
}
f1({a:"whj"});



//函数的参数解构 - 参数默认值的设置  默认参数的设置
function f2({a,b=0}={a:"xx"}):void {
  console.log(a,b);
}
f2({a:"2"});
f2();
//因为默认参数是{a:"xx"}，所以如果传参，就必须包含a属性
// f2({});  //报错！！！
