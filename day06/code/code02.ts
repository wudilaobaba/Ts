class Card{
  suit: string;
  card: number;
  constructor(suit: string,card: number) {
    this.card = card;
    this.suit = suit;
  }
  public result():void{
    console.log(this.suit+this.card);
  }
}
interface Whj {
  suits:string[],
  cards:number[],
  xx():()=>Card;//返回的是函数类型，最终返回Card类型
}

let w:Whj = {
  suits:['黑桃','红桃','草花','方块'],
  cards:Array(52),
  xx(){
    return (): Card=>{ //箭头函数可以保留this
      let picked:number = 50;
      let hua:number = 1;
      let card:Card = new Card(this.suits[hua],picked%13);
      card.result();
      return card;
    }
  }
};
w.xx()();










//对象的理解，不要加object类型
let a = {
  tom:"x",
  age:48,
  give():number{
    return 12;
  }
};
//完整版
let {tom:aa,age:bb,give:cc}:{tom:string,age:number,give:any} = a;
console.log(cc());


