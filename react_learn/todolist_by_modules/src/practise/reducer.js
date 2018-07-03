import * as actionTypes from './actionType';

let initState = {
  isGood:false,
};

export const reducer = (state=initState, action) => {
  switch(action.type){
    case actionTypes.CHANGE_PRACTISE:
      return {...state, isGood:!state.isGood};
    default:
      return state;
  }
};