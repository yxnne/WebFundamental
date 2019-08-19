// 基础类型
// 布尔类型
let isFinished: boolean = false;

// 数字类型
const decNbr: number = 10; // 十进制
const hexNbr: number = 0xFF; //十六进制
const octNbr: number = 0o7;  //八进制
const binNbr: number = 0b111;    //二进制

// string类型
const str: string = '123abc';
const tmpStr: string = `Have you done? ${isFinished}`;

// 数组类型
const list: number[] = [1, 2, 3];
const list2: Array<number> = [4, 5, 6];

// 元组Tuple
let tuple :[string, number, boolean]  = ['12cc', 123, false ];
// this is not right~~~
// tuple = ['12cc', 123, 456 ];
// 访问元组， 使用下标
let tupleEle:any = tuple[0]
console.log('tuple 0 is, ', tupleEle);

// 枚举
enum People{
    Man,
    Woman,
    Other,
} 

// any 不能确定类型时
let notSure: any = "x";
notSure = 3;
// any in array
let arrAny: any[] = [23, "menngYiCuan"];


// void
function tryFunc(param:any):void {
    console.log(param, 'is the param');
}


// null and undefin也是一种类型，当然可以定义变量是这些类型
// 但是有啥意思？
let u: undefined = undefined;
let n: null = null;

// never, 一般用于函数，永远不返回
// 返回never的函数必须存在无法达到的终点
function error(message: string): never {
    throw new Error(message)
  }
  
  // 推断的返回值类型为never
  function fail() {
    return error("Something failed")
  }
  
  // 返回never的函数必须存在无法达到的终点
  function infiniteLoop(): never {
    while (true) {
    }
  }
