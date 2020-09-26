function f<T>(arg:T):T {
  return  arg;
}
let t:number = f<number>(12);
console.log(t);


//泛型函数类型
let ttt:<U>(arg:U)=>U = f;

//泛型接口
interface Grat<T> {
  arg :T,
  name:string
}
let s:Grat<string> = {
  arg:"ss",
  name:"xx"
};


//泛型类
class People<T>{
  private value:T;
  public add:(x:T,y:T)=>T
}
let p = new People<number>();
p.add = (a,b)=>{
  return a+b;
};

//泛型约束
interface Interface {
  length:number
}
function de<T extends Interface>(t:T):T {
  console.log(t.length);
  return t;
}
de<string>("123456789");//T类型必须要有length属性

function xxxx<T, X extends keyof T>(t:T,x:X):T {
  return t;
}
let o = {
  a:"aa",
  b:"bb",
  c:"cc"
};
xxxx(o,"a");
// xxxx(o,"d"); //报错


//类类型在工厂函数中的运用
class Tiger{
  name:string;
  constructor() {
    console.log("老虎")
  }
}
class Bee {
  name:string;
  constructor() {
    console.log("蜜蜂")
  }
}
function create<T>(c:{new():T}):T {
  return new c();
}
create(Bee);//会创建一个Bee的实例
create(Tiger);//会创建一个Tiger的实例
