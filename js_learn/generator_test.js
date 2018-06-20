console.log("This file will be test the generator in es6");
/**
generator 是一种函数
提供一种暂缓执行的机制：函数内部通过yield表达式设定了阶段性的返回值
调用generator函数对象的next()方法，每次调用将依次得到yield表达式结果
*/

function* helloWorldGenerator() {
  yield 'hello';
  yield 'world';
  return 'ending';
}

var hw = helloWorldGenerator();
console.log(hw.next());
console.log(hw.next());
console.log(hw.next());
console.log(hw.next());

/**
yield表达式本来是没有值的
比如说:
res =  (yield 2) + 5
注意：表达式中使用yield表达式一定要括起来
看上去res应该得到7，但是(yield 2) 这个东西是没有值的
*/

function* test_yield(){
	res = (yield 2) + 5

	return res;
}
const fun1 = test_yield();
const y1 = fun1.next();
console.log("yield is :", y1);
const y2 = fun1.next();
console.log("yield add something is :", y2);

/*
不过,可以通过next中传递参数来指定之前的yield的值，
也就是说，上一个yield表达式会被这个参数值替换掉

比方说，第二次调用next的时候这样调用next(10),
那么这个表达式的(yield 2)这个部分都会被10替换，那么res就是15
*/
const fun2 = test_yield();
const y21 = fun2.next();
console.log("yield is :", y21);
const y22 = fun2.next(10);
console.log("yield add something is :", y22);