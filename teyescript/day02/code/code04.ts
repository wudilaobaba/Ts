function f(input:boolean) {
  let a = 100;
  if(input){
    let b = a+1;
    return b;
  }
  // return b;  //let是有块级作用域的，当前大括号中找不到只会向上级大括号中查找
}


try{
  throw "Oh no";
}catch (e) {
  console.log("Catch it");
}
// console.log(e)   //let是有块级作用域的，当前大括号中找不到只会向上级大括号中查找


// a++; 报错，let不会声明提前
let a = 1;
a++






// function f1(x) {
//   let x;
//   let x;//在一个块内，let不可以重复声明同一个变两
//   if(true){
//     let x;
//   }
// }

function f2(con,x) {
  if(con){
    let x = 100;
    return x;
  }
  return x;
}
console.log(f2(true,1));//100
console.log(f2(false,1));//1



function f3(matrix:number[][]) {//matrix是一个二维数组
  let sum = 0; //两层都是i,不会有冲突，因为有块级作用域，内层变量不会干扰到外层
  for(let i=0;i<matrix.length;i++){
    let currentRow = matrix[i];
    for(let i=0;i<currentRow.length;i++){//但是不建议这样写，还是改为j
      sum+=currentRow[i];
    }
  }
  return sum;
}
let m = [
  [1,2,3],
  [4,5,6]
]
console.log(f3(m));


//let每次循环迭代都会创建一个新的作用域
for(let i=0;i<10;i++){ //js是单线程的，所以是执行完了才延迟执行的
  setTimeout(()=>{
    console.log(i)
  },100*i)
}





const life = 9;
//const 赋值后不能在重新赋值

const cat = {
  name:"22",
  life:9
}
// cat = { //const 赋值后不能在重新赋值
//   name:"2",
//   life: 2;
// }

//但是这样改可以：
cat.name = "2";
cat.life = 10;