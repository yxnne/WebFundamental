import * as actions from '../actions';
import * as actionTypes from '../actionTypes';

describe('todos/actions', () => {
  describe('addTodo', () => {
    const addTodo = actions.addTodo

    it('should create an action to add todo', () => {
      const text = 'first todo';
      const action = addTodo(text);

      expect(action.text).toBe(text);
      expect(action.completed).toBe(false);
      expect(action.type).toBe(actionTypes.ADD_TODO);
    });

    it('should have different id for different actions', () => {
      const text = 'first todo';
      const action1 = addTodo(text);
      const action2 = addTodo(text);

      expect(action1.id !== action2.id).toBe(true);
    });
  });
});
