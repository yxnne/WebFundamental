class User{
    name:string;
    age:number;

    constructor(name:string, age:number){
        this.name = name;
        this.age = age;
    }
}

interface SayObj{
    name:string,
    age:number,
}

function sayHello(toWhom:SayObj){
    return 'Hello, ' + toWhom.name + '!';
}

const tsMan:SayObj = {
    name:'ts man',
    age:29
};

console.log('using interface', sayHello(tsMan));
console.log('using class', 
    sayHello( new User('yxnne', 29) )
);