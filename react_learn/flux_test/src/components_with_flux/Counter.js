import React, { Component } from 'react'
import CounterStore from '../stores/CounterStore'
import * as Actions from '../Actions'

export default class Counter extends Component {
    constructor(props) {
      super(props)
    
      //使用Store来初始化值
      this.state = {
        number:CounterStore.getCounterValues()[props.name]
      };
      this.addOne = this.addOne.bind(this);
      this.subOne = this.subOne.bind(this);
      this.onChange = this.onChange.bind(this);

    }

    addOne(){

        // const newNum = this.state.number + 1;

        // this.setState({
        //     number: newNum
        // });
        // console.log(this.state.number);
        // this.props.update(newNum);
        Actions.addOne(this.props.name);
    }

    subOne(){
        Actions.subOne(this.props.name);
    }

    // 当flux中数据变化的时候
    // 映射到view层
    // 那么要自动映射的话，需要注册该函数
    onChange(){
        const newNum = CounterStore.getCounterValues()[this.props.name];
        this.setState({ number: newNum });
    }

    // 在CounterStore中注册onchange
    componentDidMount(){
        CounterStore.addChangeListener(this.onChange);
    }

    // 在CounterStore中注销onchange
    componentWillUnmount(){
        CounterStore.removeChangeListener(this.onChange);
    }

    render() {
        return (
        <div>
            <button onClick={this.addOne}>+</button>
                {this.state.number}
            <button onClick={this.subOne}>-</button>
        </div>
        )
    }
    
}
