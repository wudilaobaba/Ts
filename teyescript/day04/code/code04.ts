interface Fun {
  (source: string,sub:string):boolean;
}

let b:Fun;
b=function(a:string,b:string){
  return false;
};
b("","");


//数字索引
interface stringArray {
  [index:number]:string;
}
let myArr: stringArray;
myArr = ["11","22","33"];
let str:string = myArr[0];

//字符串索引
interface Xxx {
  [index:string]:number; //有了这个，那么其他所有属性都必须是string类型
  len:number;
  // size:string;
}


//只读索引
interface ReadOnlyStringArray {
  readonly [index:number]:string;
}
let yy:ReadOnlyStringArray = ['xx','a'];
// yy[0] = "d"; 赋值会报错

