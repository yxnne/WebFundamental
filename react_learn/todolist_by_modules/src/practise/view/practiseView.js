import React, { Component } from 'react';

import { change } from '../actions';
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
      </div>
    )
  }
}

const mapStateToProps = (state) =>({
  isGood: !state.practise.isGood
});

const mapDispatchToProps = (dispatch)=>({
  onChange: ()=>{
    dispatch(change());
  }
});


export default connect(mapStateToProps, mapDispatchToProps )(practiseView);
