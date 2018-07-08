import * as actionTypes from './actionType';

// action creator
export const change = () =>({
  type:actionTypes.CHANGE_PRACTISE,
});


const asyncAction = () =>({
  type: actionTypes.ASYNC_TEST,
});
// redux-thunk 的作用就是拦截返回函数的action creator
// 在返回的函数中注入dispatch
export const asyncTest = () => {
  return (dispatch) =>{
    // 测试异步
    setTimeout(() =>{
      dispatch(asyncAction());
    }, 2000 );
  }
};