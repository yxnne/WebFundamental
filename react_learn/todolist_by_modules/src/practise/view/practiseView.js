import React, { Component } from 'react';
import {Motion, spring} from 'react-motion';

import { change, asyncTest } from '../actions';
import { connect } from 'react-redux';

class practiseView extends Component {
  render() {
    return (
      <div>
        {this.props.isGood ? 
        (
          <p>好</p>
        ):(
          <p>坏</p>
        )}

        <button onClick={this.props.onChange}>换换</button>
        <span>{this.props.asyncNum}</span><button onClick = { this.props.onAsyncTest}>异步</button>
        
        <br />
        <Motion defaultStyle={{x:100}} 
        style={
          {x:spring(0, {stiffness:100, damping:100})}
        } >
          {value=>(<div>{Math.ceil(value.x)}</div>)}
        
        </Motion>


      </div>
    )
  }
}

const mapStateToProps = (state) =>({
  isGood: !state.practise.isGood, 
  asyncNum: state.practise.asyncNum
});

const mapDispatchToProps = (dispatch)=>({
  onChange: ()=>{
    dispatch(change());
  },
  onAsyncTest: ()=>{
    dispatch(asyncTest())
  }
});


export default connect(mapStateToProps, mapDispatchToProps )(practiseView);
