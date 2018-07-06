import reducer from '../reducer';
import * as actionTypes from '../actionTypes';
import * as actions from '../actions';

describe('todolist/reducer', () => {
  describe('addTodo', () => {
    it('should add an todo into an empty todolist', () => {
      const action = actions.addTodo('abc');

      const newState = reducer([], action);

      expect(newState.length).toBe(1);
      expect(newState[0].completed).toBe(false);
      expect(newState[0].text).toBe("abc");
    });
  });
});