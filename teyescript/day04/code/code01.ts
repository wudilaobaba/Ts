function f(obj:{label:string}):void {
  console.log(obj.label);
}
let x:{label:string,size:string} = {label:"label",size:"size"};
f(x);




interface LabelInterface {
  label:string;
  age:number;
}
function f1(obj:LabelInterface):void {
  console.log(obj.label);
}
let y:LabelInterface = {
  label:"lll",
  age:12
};
f1(y);