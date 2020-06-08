interface Person{
  firstName: string
  lastName: string
}

class User {
  fullName: string
  firstName: string
  lastName: string
  constructor(firstName: string, lastName: string){
    this.firstName = firstName;
    this.lastName = lastName;
    this.fullName = this.firstName+" "+this.lastName;
  }
}


function greeter(person: Person){
  return 'Hello ' + person.firstName+" "+person.lastName;
}










//接口的使用
let user: Person = {
  firstName:"Mike",
  lastName:"Jhon"
};
console.log(greeter(user))



//类的使用
let user2: User = new User("firstName","lastName");
console.log(user2.fullName)
