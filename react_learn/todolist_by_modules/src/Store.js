import { createStore, combineReducers } from 'redux';
import { reducer as todoReducer } from './todolist';
import { reducer as filterReducer } from './filter';

/**
 * 合并reducers，构建store
 */
const reducers = combineReducers({
  todos: todoReducer, 
  filter: filterReducer
}); 

export default createStore(reducers);