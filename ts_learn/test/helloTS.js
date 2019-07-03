var User = /** @class */ (function () {
    function User(name, age) {
        this.name = name;
        this.age = age;
    }
    return User;
}());
function sayHello(toWhom) {
    return 'Hello, ' + toWhom.name + '!';
}
var tsMan = {
    name: 'ts man',
    age: 29
};
console.log('using interface', sayHello(tsMan));
console.log('using class', sayHello(new User('yxnne', 29)));
