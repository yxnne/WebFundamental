import { createStore } from 'redux';
import reducer from './Reducer';

const initState = {
  c1: 10,
  c2: 20,
  c3: 0
}

const store = createStore(reducer, initState);

export default store;