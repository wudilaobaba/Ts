//枚举类型
enum Color {
  Red = 1,
  Green = 2,
  Blue = 3
}
let c: Color = Color.Green;
console.log(c) //2
let colorName: String = Color[2];
console.log(colorName)//Green



//any类型  不知道类型的时候或不需要强类型的时候，就用any类型, 跳过类型检查
let notSure:any = 4;
notSure = "222";
notSure = false;
let list:any[] = [1,true,"2"];


//void类型，通常用在函数的返回值中，意思是没有返回值
function warUser():void{
  console.log("Thie sdsda");
}


//undefined类型 和 null类型
let u:undefined = undefined;
let n:null = null;
let x:null = undefined;
let num:number = 2;
num = null;//如果严格检查的话，是会报错的 tsc code02.ts --strictNullChecks


// never类型  可以赋值给任何类型
function error(message:string):never{//一般抛出异常的函数中使用never类型
  throw new Error(message);
}
function fail(){
  return error ("111111");
}
// fail();


function wuxian():never{
  while (true) {

  }
}



//object类型  object不可以使用基本类型代替
declare function create(o:object|null):void;
create({prop:1});
create(null);
// create(1);
// create(true);
// create("true");
create(undefined);


//类型强转 方式1
let str: any="1234";
let all:number = (<string>str).length;
console.log(all);
//类型强转 方式2
let all2:number = (str as string).length;
console.log(all2);
