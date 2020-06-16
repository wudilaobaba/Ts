let f = [1,2];
let s = [3,4];
let a = [0,...f,...s,5,6,7];
console.log(a);



let o = {
  food:"xx",
  price:"10",
  xxx:"dsad"
};
let search = {...o,food:'12',cc:"cc"};//food写在点点点后面的话值会被替换
console.log(search);