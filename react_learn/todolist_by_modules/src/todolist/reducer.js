import { ADD_TODO, TOGGLE_TODO, REMOVE_TODO } from './actionTypes';

let initState = [];

/**
 * 这里主要是reducer
 * reducer多为一个switch-case, 根据当前的状态值和action，产生新的状态
 * 要注意的是：reducer应该是一个无副作用的纯函数
 * 所以, 返回值中的对象都是新生成的
 * [...展开]，.map(), .filter()都是生成新的对象
 * 另外注意：
 * map方法是要有返回值的，尽管不要也可以，但是最好将新的item返回
 * filter方法也是要返回值的，false表示没有被过滤，true表示要被过滤
 * map和filter将产生新的数组对象
 */
export default (state=initState, action) =>{
  switch(action.type){
    case ADD_TODO:
      return [
        ...state, {id: action.id, text: action.text,  completed: false}
      ];
    case TOGGLE_TODO:
      return state.map(item=>{
        if(item.id === action.id){
          return {...item, completed: !item.completed};
        }else{
          return item;
        }
      });
    case REMOVE_TODO:
      return state.filter(item =>{
        return item.id !== action.id
      });
    default:
      return state;
  }
}
