function fun(x):string  {
  if(Array.isArray(x)){
    return "数组";
  }else if(typeof x === 'number'){
    return "数字";
  }else{
    return typeof x;
  }
}

console.log(fun([1,2,23]));
console.log(fun(10));
console.log(fun({}));