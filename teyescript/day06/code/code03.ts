interface Code03 {
  addClick(onClick:(this:void,e:Event)=>void):void;
}
class Handler{
  type:string;
  onClickBad = (e:Event):void=>{//类中用箭头函数来保存this
    this.type = e.type;
  }
}
let h:Handler = new Handler();

let code03:Code03 = {
  addClick(){

  }
};
code03.addClick(h.onClickBad);