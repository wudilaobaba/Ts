abstract class Anumal{
  name:string;
  constructor(name:string) {
    this.name = name;
  }
  printName():void{
    console.log(this.name);
  }
  abstract printMeeting():void;
}

class Accounting extends Anumal{
  constructor() {
    super("xxxx");
  }
  public static age:number;
  printMeeting(): void {
    console.log(this.name);
  }
  gg(){
    console.log(this.name);
  }
}

let a:Anumal = new Accounting();
a.printMeeting();


let b:typeof Accounting = Accounting;//相当于此时b就是Accounting类了
b.age = 4;
//此时Accounting的实例中的age就变成4了




//类的另类使用
class A{
  x:number;
  y:number;
}
interface Aa extends A{
  z:number;
}
let ss:Aa = {
  x:1,
  y:2,
  z:3
};
