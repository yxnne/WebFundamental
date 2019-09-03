// taskDef是generator生成器函数
// 这里需要实现一个自动让生成其运行的函数
function run( taskDef ){
    let task = taskDef();
    let res = task.next();

    function step(){
        if(!res.done){
            res = task.next(res.value);
            // 自动迭代的保证
            step();
        }
    }

    step();
}

// test 
run(function* (){
    let value = yield 1;
    console.log('value is ', value);

    value = yield value + 3;
    console.log('value now is ', value);
});
