import * as actions from '../actions';
import * as actionTypes from '../actionTypes';

// describe 描述了一个测试套件
describe('todolist/actions', () => {
  describe('addTodo', () => {
    const addTodo = actions.addTodo

    // it 是一个测试用例
    // 产生一个action
    it('should create an action to add todo', () => {
      const text = 'first todo';
      const action = addTodo(text);

      // expect和toBe就是断言
      //expect(表达式).toBe(值)
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
