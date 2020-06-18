interface Code06 {
  (name:string):void;
  age:number;
  sex:string;
  reset():void;
}
let y = {} as Code06;
y.age = 12;
y.sex = "girl";
y.reset();
y("xxx");
console.log(y);



let x = (function (name:string) {
  console.log(name);
}) as Code06;
x.age = 45;
x.sex = "man";
x.reset();
x("xxxx");


let z = {} as Code06;
z.reset();
z("s");
