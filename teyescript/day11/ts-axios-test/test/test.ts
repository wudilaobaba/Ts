interface Xhj {
  name:string;
  age:number;
  sex:string;
}
interface Ipo extends Promise<Xhj>{

}

function xx():Ipo {
  return new Promise((resolve) => {
    resolve({
      name:"whj",
      age:12,
      sex:"nan",
    });
  })
}

xx().then((x)=>{
  console.log(x);
})
