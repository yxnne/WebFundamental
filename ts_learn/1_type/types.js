// 基础类型
// 布尔类型
var isFinished = false;
// 数字类型
var decNbr = 10; // 十进制
var hexNbr = 0xFF; //十六进制
var octNbr = 7; //八进制
var binNbr = 7; //二进制
// string类型
var str = '123abc';
var tmpStr = "Have you done? " + isFinished;
// 数组类型
var list = [1, 2, 3];
var list2 = [4, 5, 6];
// 元组Tuple
var tuple = ['12cc', 123, false];
// this is not right~~~
// tuple = ['12cc', 123, 456 ];
// 访问元组， 使用下标
var tupleEle = tuple[0];
console.log('tuple 0 is, ', tupleEle);
// 枚举
var People;
(function (People) {
    People[People["Man"] = 0] = "Man";
    People[People["Woman"] = 1] = "Woman";
    People[People["Other"] = 2] = "Other";
})(People || (People = {}));
// any 不能确定类型时
var notSure = "x";
notSure = 3;
// any in array
var arrAny = [23, "menngYiCuan"];
// void
function tryFunc(param) {
    console.log(param, 'is the param');
}
// null and undefin也是一种类型，当然可以定义变量是这些类型
// 但是有啥意思？
var u = undefined;
var n = null;
// never, 一般用于函数，永远不返回
// 返回never的函数必须存在无法达到的终点
function error(message) {
    throw new Error(message);
}
// 推断的返回值类型为never
function fail() {
    return error("Something failed");
}
// 返回never的函数必须存在无法达到的终点
function infiniteLoop() {
    while (true) {
    }
}
