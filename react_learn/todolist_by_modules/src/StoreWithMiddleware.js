import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk  from "redux-thunk";
import { reducer as todoReducer } from './todolist';
import { reducer as filterReducer } from './filter';
import { reducer as practiseReducer } from './practise';

// Perf是帮助发现react渲染中的性能问题，react16以后就不支持!!!!
// import Perf from 'react-addons-perf';

// const win = window;
// // 只有这样之后，chrome应用商店插件react perf才起作用
// win.Perf = Perf;

const win = window;
// 中间件
const middlewares = [thunk];

if(process.env.NODE_ENV !== 'production'){
  // 该中间件帮助检查reducer是不是一个纯函数
  // 这里为什么使用require引入而不是import？
  // 因为import只能出现在文件的顶部，不能出现在条件语句之中
  middlewares.push(require('redux-immutable-state-invariant').default());

}

const storeEnhancers = compose(
  applyMiddleware(...middlewares),  // applyMiddleware的参数每一个都是一个redux中间件
  (win && win.devToolsExtension) ? win.devToolsExtension() : (f) => f // 在使用reduxDevtools
  // 如果浏览器中安装了reduxDevTool插件，那么window全局变量会有devToolsExtension函数，
  // 所以在这里判断下而已，如果没有插件，返回一个不作为函数
);

// 合并reducers，构建store
const reducers = combineReducers({
  todos: todoReducer, 
  filter: filterReducer,
  practise: practiseReducer
}); 

export default createStore(reducers, {}, storeEnhancers);