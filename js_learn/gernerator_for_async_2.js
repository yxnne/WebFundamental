// 改进：如果res.next()的值是函数，
// 调用该函数，在该函数的回调函数中，执行next自动迭代
// 如果不是函数，自动迭代
// 想到了redux-thunk的原理
function run( taskDef ){
    let task = taskDef();
    let res = task.next();

    function step(){
        if(!res.done){
            // res = task.next(res.value);
            // // 自动迭代的保证
            // step();
            if(typeof res.value === 'function'){
                res.value(function (err, data){
                    if(err){
                        res = task.throw(err);
                        return;
                    }
                    res = task.next(data);
                    step();
                });
            } else {
                res = task.next(res.value);
                step();
            }
        }
    }

    step();
}

// def thunk function
function thunkGen(time){
    return function (callbackWhenDone){
        setTimeout(()=>{
            callbackWhenDone(null, 'shit on time delay ... ' + time);
        }, time);
    }
};

// test 
run(function* (){
    let value = yield 1;
    console.log('value is ', value);

    value = yield value + 3;
    console.log('value now is ', value);
    
    value = yield thunkGen(3000);
    console.log(value);
});
