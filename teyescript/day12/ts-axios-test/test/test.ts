interface Xhj {
  name:string;
  age:number;
  sex:string;
}
interface Ipo extends Promise<Xhj>{

}

function xx():Ipo {
  return new Promise((resolve,reject) => {
    let a = false;
    handler(a);

    function handler(type:boolean):void{
      if(!type){
        resolve({
          name:"whj",
          age:12,
          sex:"nan",
        });
        return;
      }
      reject(new Error("WRONG"));
    }
  })
}

xx().then((x)=>{
  console.log(x);
}).catch((e)=>{
  console.log(e)
});
