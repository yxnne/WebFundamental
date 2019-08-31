// 迭代器的 es5 概念实现
function createIterator(array){
  let currentPointer = 0;
  return {
    next: function(){
      let isDone = array.length <= currentPointer;
      let value = isDone ? undefined : array[currentPointer];
      currentPointer++;
      return {
        done:isDone,
        value,
      }
    }
  }
}

const testArray = [1, 2, 3];
const iterator = createIterator(testArray);

// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next()); // 这里遍历完成了
// console.log(iterator.next()); // 这里遍历完成了
// console.log(iterator.next()); // 这里遍历完成了

function* genIterator (){
  yield 1;
  yield 2;
  yield 3;
}

const iterator2 = genIterator();
// console.log(iterator2.next());
// console.log(iterator2.next());
// console.log(iterator2.next());
// console.log(iterator2.next());
// console.log(iterator2.next());

function* genIteratorForMappingArray(array){
  for(let i = 0; i < array.length; i++ ){
    yield array[i];
  }
}
const iterator3 = genIteratorForMappingArray([1, 2, 3, 4 ]);
// console.log(iterator3.next());
// console.log(iterator3.next());
// console.log(iterator3.next());
// console.log(iterator3.next());
// console.log(iterator3.next());

let me = {
  friends: ['yx', 'zf', 'fs', 'll'],
  getIterator: function* () {
    for (let i = 0; i < this.friends.length; i++) {
      yield this.friends[i]
    }
  }
};
const friendsIterator = me.getIterator();

// console.log(friendsIterator.next());
// console.log(friendsIterator.next());
// console.log(friendsIterator.next());
// console.log(friendsIterator.next());
// console.log(friendsIterator.next());

// 自定义迭代器属性
const myIterableObj = {
  items:[],
  [Symbol.iterator]: function *(){
    for(let i = 0; i < this.items.length; i++ ){
      yield this.items[i];
    }
  }
};
myIterableObj.items.push('hi');
myIterableObj.items.push('lark');

console.log('for of start...')
for( one of myIterableObj ){
  console.log(one)
}

// 访问可迭代属性
let testArr = [1, 2, 3];
const iteratorOfTestArr = testArr[Symbol.iterator]();
console.log(iteratorOfTestArr.next());
console.log(iteratorOfTestArr.next());
console.log(iteratorOfTestArr.next());
console.log(iteratorOfTestArr.next());








