import React, { Component } from 'react'
import Counter from './Counter';
import SummaryStore from '../stores/SumStore';

export default class ControlPanel extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      sum : SummaryStore.getSummary()
    }
    this.onChange = this.onChange.bind(this);
  }
  
  onChange(){
    const newSum = SummaryStore.getSummary();
    this.setState({
      sum:newSum
    });
  }

  componentDidMount(){
    SummaryStore.addChangeListener(this.onChange)
  }
  
  componentWillUnmount(){
    SummaryStore.removeChangeListener(this.onChange)
  }

  render() {
    return (
      <div>
        <Counter name='c1' />
        <Counter name='c2' />
        <Counter name='c3' />
        <p>
          The Sum is { SummaryStore.getSummary() }
        </p>
      </div>
    )
  }
}

