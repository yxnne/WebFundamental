import * as actionTypes from './actionType';

let initState = {
  isGood:false,
  asyncNum: 10
};

export const reducer = (state=initState, action) => {
  switch(action.type){
    case actionTypes.CHANGE_PRACTISE:
      return {...state, isGood:!state.isGood};
    case actionTypes.ASYNC_TEST:
      // 这里不要用state.asyncNum ++
      // 纯函数注意 
      return {...state, asyncNum: state.asyncNum + 1 }
    default:
      return state;
  }
};
