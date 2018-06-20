console.log("This file will be test the promise in es6");
/**
1. 对象的状态不受外界影响。Promise对象代表一个异步操作，有三种状态：
pending（进行中）、fulfilled（已成功）和rejected（已失败）。
只有异步操作的结果，可以决定当前是哪一种状态，任何其他操作都无法改变这个状态。
这也是Promise这个名字的由来，它的英语意思就是“承诺”，表示其他手段无法改变。

2. 一旦状态改变，就不会再变，任何时候都可以得到这个结果。
Promise对象的状态改变，只有两种可能：从pending变为fulfilled和从pending变为rejected。
只要这两种情况发生，状态就凝固了，不会再变了，会一直保持这个结果，这时就称为 resolved（已定型）。
如果改变已经发生了，你再对Promise对象添加回调函数，也会立即得到这个结果。
这与事件（Event）完全不同，事件的特点是，如果你错过了它，再去监听，是得不到结果的。

这里需要主动调用resolve或者reject方法
const promise = new Promise(function(resolve, reject) {
  // ... some code

  if ( 异步操作成功 ){
    resolve(value);
  } else {
    reject(error);
  }
});

*/


// function a(v, b){
// 	console.log('This is v:' + v);
// 	console.log('This is b:' + b);
// }

// setTimeout(a, 1000, 'abc');

function timeout(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, ms, 'done');
  });
}

timeout(100).then((value) => {
  console.log(value);
});

/*
最简单的了解：promise是一个对象，
一个创建时候就会开始执行逻辑的对象，但是具体的执行结果是你
使用者来决定的，
比如说执行结果是成功，使用者就在定义promise的逻辑中调用resolve来转换状态
失败就是调用reject
那么这个所谓的resolve方法或者reject方法被调用之后就会更新promise的状态
当promise的状态改变之后，相应的调用then中的回调逻辑
resolve或者reject会将参数值如实的传递给then方法写的回调作为参数
*/

function testDouble(init){
	return new Promise((resolve, reject)=>{
		resolve(init * 2)
	});
}

testDouble(2).then(v => console.log(v));

// 使用promise封装xhr请求数据的方法
console.log("Try Promise XHR -----------");

const get = function(url){

	const promise = new Promise((resolve, reject) => {
		const handler = function(){
			if(this.readyState !== 4){
				return;
			}

			if (this.status === 200) {
				resolve(this.response);
			} else {
				reject(new Error(this.statusText));
			}

		};

		const client = new XMLHttpRequest();
		client.open('GET', url);
		client.onreadystatechange = handler;
		client.responseType = 'json';
		client.setRequestHeader('Accept', 'application/json');
		client.send();
	});

	return promise;
};

get('https://www.baidu.com').then(data=>{
	console.log(data);
}, err=>{
	console.log(err);
});