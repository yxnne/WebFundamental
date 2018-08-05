// 执行环境，每个函数都有一个执行环境，
// 执行环境中有一个 变量对象：变量对象保存了环境中定义的所有变量以及函数
// 作用域链：当代码执行时，变量对象的链式结果。作用域链的前端是当前代码所在环境的变量对象。
// 标识符解析是沿着当前的作用域链向上一级一级寻找标识符的过程。
// 

var color = 'blue';

function changeColor(){
	var otherColor = 'red';

	function swapColor(){
		var temp = otherColor;
		otherColor = color;
		color = temp;

		//这里可以访问temp otherColor 以及color
	}

	swapColor();
	// 这里就可以访问otherColor 和 color

}

changeColor();
// 这里只能访问color


// 内部的执行环境可以通过作用域链来访问外部变量


// this 引用的是函数的  调用者，就是函数执行的环境对象
// this 和作用域链没有任何关系

function sayColor(){
	console.log(this.c);
}

var c = 'red';

sayColor();

var obj ={c:'blue'};

obj.sayColor = sayColor;

obj.sayColor();

console.log('this is ,', this)