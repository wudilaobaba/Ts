export interface TestClass {
  get():void;
  post():void;
}

export class Whj implements TestClass{
  public get(): void {
    console.log("GET");
  };
  public post(): void {
    console.log("POST");
  };
}
