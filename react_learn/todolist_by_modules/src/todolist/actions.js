import { ADD_TODO, TOGGLE_TODO, REMOVE_TODO } from './actionTypes';


// 简陋的ID生成规则
let nextTodoId = 0;

// action creators
export const addTodo = (text) =>({
  type:ADD_TODO,
  completed:false,
  id:nextTodoId ++,
  text:text
}); 

export const toggleTodo = (todoid) =>({
  type:TOGGLE_TODO,
  id:todoid,

}); 

export const removeTodo = (todoid) =>({
  type:REMOVE_TODO,
  id:todoid,
}); 