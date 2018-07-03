import React, { Component } from 'react';
import { view as Todos } from './todolist';
import { view as Filter }  from './filter'
import { view as Practis } from './practise';

/**
 * 引入模块
 */
class TodoApp extends Component {
  render() {
    return (
      <div >
        <Todos/>
        <Filter/>
        <Practis/>
      </div>
    );
  }
}

export default TodoApp;
