interface Point {
  readonly x:number; //只读属性
  readonly y:number;
}
let p1:Point = {
  x:10,
  y:20
};
//创建完接变量后，属性值无法修改


//数组创建后禁止修改的定义： 泛型只读数组
let arr:number[] = [1,2,3,4];
let ro:ReadonlyArray<number> = arr;
//类型断言，也就是"类型强转"
arr = ro as number[];




interface Xx {
  name:string;
  age:number;
  [propName: string]: any; //该属性是接口的扩展属性,扩展属性的值可以是任意类型，就这样写死！！！！
}
let qqq:Xx ={
  name:"name",
  age:1,
  sex:[]
};