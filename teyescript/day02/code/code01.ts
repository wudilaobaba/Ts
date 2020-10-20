let isDone: boolean = true;

let a:number = 20; //十进制
let b:number = 0x14; //十六进制
let c:number = 0b10100;//二进制
let d:number = 0o24;//八进制

let xx:string = 'bob';
xx = "Smith";
let name1: string = 'Yee'
let age: number = 30;
let s = `
  Hello,${name1}
  ${age}
`;
console.log(s);


let list1: number[] = [1,2,3];
let list2: Array<number> = [1,2,4];


//元组  越界会报错
let x: [string,number] = ['h',1]; //定义的是两个元素的数组，每个元素的类型清晰可见
console.log(x[0]);
