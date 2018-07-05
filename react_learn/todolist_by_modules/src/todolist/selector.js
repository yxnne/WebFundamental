import { createSelector } from 'reselect'
import { FilterTypes } from '../constants';

// 从state中映射输入
const getFilter = state => state.filter;
const getTodos = state =>  state.todos;

//创建selector
export const selectVisibleTodos = createSelector(
  [getFilter, getTodos], 
  //具体计算的规则
  ( filter, todos ) => {
    switch (filter) {
      case FilterTypes.ALL:
        return todos;
      case FilterTypes.COMPLETED:
        return todos.filter(item => item.completed);
      case FilterTypes.UNCOMPLETED:
        return todos.filter(item => !item.completed);
      default:
        throw new Error('unsupported filter');
    }
  }
); 