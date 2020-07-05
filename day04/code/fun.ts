interface Ace {
  name:string;
  age:number;
  //函数
  doSome01(text:string):number;

  //变量
  doSome02:(text:string)=>number;

  //函数
  doSome03(text:string):()=>()=>()=>number; //doSome03最终返回number,期间有三次返回函数类型

  //变量
  doSome04:(text:string)=>()=>()=>()=>number;//doSome04最终返回number,期间有三次返回函数类型
}

let y:Ace = {
  name:"A",
  age:12,
  // doSome01:function (s:string) {
  //   return 12;
  // },
  doSome01(s:string) {
    return 12;
  },
  // doSome02:function (s:string) {
  //   return 12;
  // },
  doSome02(s:string){
    return 12;
  },
  // doSome03:function () {
  //   return function () {
  //     return function () {
  //       return function () {
  //         return 1;
  //       }
  //     }
  //   }
  // },
  doSome03(s:string){
    return()=>{
      return()=>{
        return ()=>{
          return 12;
        }
      }
    }
  },
  doSome04(s:string){
    return()=>{
      return()=>{
        return ()=>{
          return 12;
        }
      }
    }
  }
};

