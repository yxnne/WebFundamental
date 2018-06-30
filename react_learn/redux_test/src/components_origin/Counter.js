import React, { Component } from 'react'

export default class Counter extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        number:this.props.initial || 0 
      };
      this.addOne = this.addOne.bind(this);
      this.subOne = this.subOne.bind(this);

    }

    addOne(){

        const newNum = this.state.number + 1;
        // this.setState(preState =>{
        //     return {number: newNum};
        // });
        this.setState({
            number: newNum
        });
        console.log(this.state.number);
        // setTimeout(()=>this.props.update(this.state.number), 1000);
        // 这里的问题，千万不能这么写 : 就是直接传递 this.state.number
        // 为什么呢，因为setState方法是异步的，
        // 也就是说，还真的不一定在你要使用this.state里面的值时，它就已经更新了
        // 这里面不管setState的哪一个方法都是异步的，
        // setTimeout(()=>this.props.update(this.state.number), 1000);可以证明
        // 所以回调传参数不要穿this.state
        // 最好把应该是啥的值计算出来
        this.props.update(newNum);
    }

    subOne(){
        const newNum = this.state.number - 1;
        this.setState({
            number: newNum
        });
        this.props.update(newNum);
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
