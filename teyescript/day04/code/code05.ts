interface Code05 {
  current :Date;
  setTime(d:Date):void;
}
class Whj implements Code05{
  current: Date;
  constructor(h:number,m:number) {
  }

  setTime(): void {
  }
}






interface ClockInterface {
  tick();
}
interface ClockConstructor {
  new (hour:number,min:number):ClockInterface;
}
function createClock(ctor:ClockConstructor,hour:number,min:number):ClockInterface {
  return new ctor(hour,min);
}
class DClock implements ClockInterface{
  constructor(h:number,m:number) {

  }
  tick() {
    console.log("123")
  }

}

class CClock implements ClockInterface{
  constructor(h:number,m:number) {

  }

  tick() {
    console.log("123456")
  }
}

let d:ClockInterface = createClock(DClock,12,12);
let t:ClockInterface = createClock(CClock,12,12);