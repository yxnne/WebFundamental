interface SayObj{
    name:string,
    job:string,
    age:number,
}

function sayHello(toWhom:SayObj){
    return 'Hello, ' + toWhom.name + '!';
}

const tsMan = {
    name:'ts man',
    job:'coder',
    age:29
};

console.log(sayHello(tsMan));