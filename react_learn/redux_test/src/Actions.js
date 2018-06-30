import * as Actions from './ActionTypes';

export const add = (counterCaption)=> {
  return {
    type:Actions.ADD,
    counterCaption:counterCaption
  };
};

export const sub = (counterCaption)=> {
  return {
    type:Actions.SUB,
    counterCaption:counterCaption
  };
};