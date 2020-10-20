interface Fang {
  color:string;
  area:number;
}

interface FangConfig {
  color?:string; //加问号是可选属性
  width?:number; //加问号是可选属性
}

function createFang(config:FangConfig):Fang {
  let newFang:Fang ={
    color:"red",
    area:12,
  };
  if(config.color){
    newFang.color = config.color;
  }
  if(config.width){
    newFang.area = config.width*config.width;
  }
  return newFang;
}

console.log(createFang({
  color:"pink",
  width:200
}));
console.log(createFang({}));