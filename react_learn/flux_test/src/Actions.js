import * as ActionTypes from './ActionTypes';
import FluxDispatcher from './FluxDispatcher';

export const addOne = (counterCaption) => {
  FluxDispatcher.dispatch({
    type:ActionTypes.ADD,
    counterCaption:counterCaption,
  });
};

export const subOne = (counterCaption) => {
  FluxDispatcher.dispatch({
    type:ActionTypes.SUB,
    counterCaption:counterCaption,
  });
};