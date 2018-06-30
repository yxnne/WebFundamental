import * as ActionTypes from './ActionTypes';

export default ( state, action ) => {
  const {counterCaption} = action;
  switch(action.type){
    case ActionTypes.ADD:
      return { 
        ...state, [counterCaption]: state[counterCaption] + 1 
      };

    case ActionTypes.SUB:
      return {
        ...state, [counterCaption]: state[counterCaption] - 1
      };

    default:
      return state;
    
  }
};