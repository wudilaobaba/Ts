var User = /** @class */ (function () {
    function User(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.fullName = this.firstName + " " + this.lastName;
    }
    return User;
}());
function greeter(person) {
    return 'Hello ' + person.firstName + " " + person.lastName;
}
//接口的使用
var user = {
    firstName: "Mike",
    lastName: "Jhon"
};
console.log(greeter(user));
//类的使用
var user2 = new User("firstName", "lastName");
console.log(user2.fullName);
