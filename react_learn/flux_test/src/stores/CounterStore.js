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

CounterStore.dispatchToken = FluxDispatcher.register((action)=>{
  if(action.type === ActionTypes.ADD){
    counterValues[action.counterCaption] ++ ;
    CounterStore.emitChange();
  }else if(action.type === ActionTypes.SUB){
    counterValues[action.counterCaption] -- ;
    CounterStore.emitChange();
  }
});


export default CounterStore;