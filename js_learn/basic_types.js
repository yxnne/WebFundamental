// js 用五种基本类型，分别是：
// undefined, null, Boolean, Number, String,
// 一种复杂类型 Object

// 1. undefined
// 使用 var 定义变量没有赋值时候就是自动取得值undefined
var a;
console.log('a is:', a);

let b;
console.log('b is:', b);

/*
// const定义的时候必须初始化，否则报错
const c;
console.log('c is:', c);
*/

// 2. Null
// 空指针

// 3. Boolean
// 这里涉及一个其他类型转换的问题
// 字符串转换Boolean：空字符串转换成false,其他的是true
const str2boolean = ''  ? '':'空字符串转换成false';
console.log(str2boolean);
// 0 和 NaN 转换成false， 其他都是true
console.log(0  ? '':'0转成false');
console.log(NaN  ? '':'NaN转成false');
console.log(10001  ? '非0转成true':'');