import React, { Component } from 'react'
import Counter from './Counter';

export default class ControlPanel extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
      c1: 10,
      c2: 20,
      c3: 0,
    }
    this.updateSum = this.updateSum.bind(this);
  }

  updateSum( key, value){
    this.setState({
      [key]: value
    });
  }

  render() {
    return (
      <div>
        <Counter initial={10} update={(v)=>this.updateSum('c1', v)}/>
        <Counter initial={20} update={(v)=>this.updateSum('c2', v)}/>
        <Counter update={(v)=>this.updateSum('c3', v)}/>
        <p>
          The Sum is { this.state.c1 + this.state.c2 + this.state.c3 }
        </p>
      </div>
    )
  }
}

