import { createStore, combineReducers } from 'redux';
import { reducer as todoReducer } from './todolist';
import { reducer as filterReducer } from './filter';


/**
 * 合并reducers，构建store
 * 
 * 
 * 注意：
 * 本项目不用这个store了
 * 
 */
const reducers = combineReducers({
  todos: todoReducer, 
  filter: filterReducer,
  // practise: practiseReducer
}); 


export default createStore(reducers);