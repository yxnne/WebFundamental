import { EventEmitter } from "events";
import FluxDispatcher from '../FluxDispatcher';
import * as ActionTypes from '../ActionTypes';

const CHANGE_EVENT = 'changed';

const counterValues = {
  c1: 10,
  c2: 20,
  c3: 0,
};

// 扩展EventEmitter 变成 CounterStore
// CounterStore现在就要注册时间相应事件等功能
const CounterStore = Object.assign({}, EventEmitter.prototype, {
  // 对外暴露的get方法
  getCounterValues:function(){
    return counterValues;
  },
  emitChange:function(){
    this.emit(CHANGE_EVENT);
  },
  addChangeListener:function(callback){
    this.on(CHANGE_EVENT, callback);
  },
  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }
});

// 这个方法是将处理action的逻辑注册起来
// 这个所谓的dispatchToken是一个标识，多用于控制多个store间的顺序操作
CounterStore.dispatchToken = FluxDispatcher.register((action)=>{
  if(action.type === ActionTypes.ADD){
    counterValues[action.counterCaption] ++ ;
    // 广播事件
    // 这样的话，因为CounterStore中注册了这个事件，那么广播之后
    // CounterStore就能收到这个事件，从而回调由callback，
    // 比如callback是view层改变自己state的方法
    CounterStore.emitChange();
  }else if(action.type === ActionTypes.SUB){
    counterValues[action.counterCaption] -- ;
    CounterStore.emitChange();
  }
});


export default CounterStore;