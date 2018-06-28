import CounterStore from './CounterStore';
import { EventEmitter } from "events";
import FluxDispatcher from '../FluxDispatcher';
import * as ActionTypes from '../ActionTypes'

const CHANGE_EVENT = 'changed';

// 计算和的方法
function computeSummary(dataObj){
  let sum = 0;
  for(const k in dataObj){
    if(dataObj.hasOwnProperty(k)){
      sum += dataObj[k];
    }
  }
  return sum;
}

const SummaryStore = Object.assign({}, EventEmitter.prototype, {
  getSummary: function() {
    return computeSummary(CounterStore.getCounterValues());
  },

  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },

  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }

});

SummaryStore.dispatchToken = FluxDispatcher.register((action) => {
  if ((action.type === ActionTypes.ADD) ||
      (action.type === ActionTypes.SUB)) {
    FluxDispatcher.waitFor([CounterStore.dispatchToken]);

    SummaryStore.emitChange();
  }
});

export default SummaryStore;