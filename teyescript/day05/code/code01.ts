class D{
  private greting:string;
  constructor(message:string) {
    this.greting = message;
  }
  great(){
    return "Hello " + this.greting;
  }
}

let d:D = new D("World");
console.log(d.great());