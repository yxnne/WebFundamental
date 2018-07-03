import React from 'react';
import { connect } from 'react-redux';
import {toggleTodo, removeTodo} from '../actions.js';

const TodoItem = ({onToggleTodo, onRemoveTodo, completed, text}) => {
  const checkedProp = completed ? {checked: true} : {};
  return (
    <li
      className="todo-item"
      style={{
        textDecoration: completed ? 'line-through' : 'none'
      }}
    >
      <input className="toggle" type="checkbox" {...checkedProp} readOnly onClick={onToggleTodo} />
      <label className="text">{text}</label>
      <button className="remove" onClick={onRemoveTodo}>×</button>
    </li>
  )
}

const mapDispatchToProps = (dispatch, ownProps)=>{
  const { id } = ownProps;
  return {
    onToggleTodo: () => {
      dispatch(toggleTodo(id));
    },
    onRemoveTodo: () => {
      dispatch(removeTodo(id));
    }
  };
};

export default connect(null, mapDispatchToProps)(TodoItem);