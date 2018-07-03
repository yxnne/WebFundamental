import React from 'react';
import {connect} from 'react-redux';
//import {bindActionCreators} from 'redux';
import TodoItem from './todoItem.js';
import {toggleTodo, removeTodo} from '../actions.js';
import {FilterTypes} from '../../constants.js';

// 因为这里是无状态组件，直接使用函数式组件声明方法，在参数中直接采用解构赋值的方式给得到props
const TodoList = ({todos, onToggleTodo, onRemoveTodo}) => {
  console.log('todos->', todos);
  return (
    <ul className="todo-list">
    {
      todos.map((item) => (
        <TodoItem
          key={item.id}
          text={item.text}
          completed={item.completed}
          onToggle={() => onToggleTodo(item.id)}
          onRemove={() => onRemoveTodo(item.id)}
        />
        ))
    }
    </ul>
  );
};


const selectVisibleTodos = (todos, filter) => {
  console.log('filter', filter);
  switch (filter) {
    case FilterTypes.ALL:
      return todos;
    case FilterTypes.COMPLETED:
      return todos.filter(item => item.completed);
    case FilterTypes.UNCOMPLETED:
      return todos.filter(item => !item.completed);
    default:
      //throw new Error('unsupported filter');
  }
}
// 将state映射到组件的props中
const mapStateToProps = (state) => {
  console.log("state ->", state);
  return {
    todos: selectVisibleTodos(state.todos, state.filter)
  };
}

// 将store中分发事件的方法映射到组件的props中
const mapDispatchToProps = (dispatch) => {
  return {
    onToggleTodo: (id) => {
      dispatch(toggleTodo(id));
    },
    onRemoveTodo: (id) => {
      dispatch(removeTodo(id));
    }
  };
};

/*
const mapDispatchToProps = (dispatch) => bindActionCreators({
  onToggleTodo: toggleTodo,
  onRemoveTodo: removeTodo
}, dispatch);
*/

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);