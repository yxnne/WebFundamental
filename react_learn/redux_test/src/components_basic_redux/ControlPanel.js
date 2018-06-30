import React, { Component } from 'react'
import Counter from './Counter';
import store from '../Store';

export default class ControlPanel extends Component {

  constructor(props) {
    super(props)
  
    this.state = this.getOwnState();
    //this.updateSum = this.updateSum.bind(this);
    this.onChangeCallback = this.onChangeCallback.bind(this);
  }
  componentDidMount(){
    store.subscribe(this.onChangeCallback);
  }
  componentWillUnmount(){
    store.unsubscribe(this.onChangeCallback);
  }

  onChangeCallback(){
    this.setState(this.getOwnState());
  }

  getOwnState(){
    const state = store.getState();
    let sum = 0;
    for (let key in state ){
      if(state.hasOwnProperty(key)){
        sum += state[key];
      }
    }
    return {sum }
  }


  render() {
    return (
      <div>
        <Counter caption="c1"/>
        <Counter caption="c2"/>
        <Counter caption="c3"/>
        <p>
          The Sum is { this.state.sum }
        </p>
      </div>
    )
  }
}

