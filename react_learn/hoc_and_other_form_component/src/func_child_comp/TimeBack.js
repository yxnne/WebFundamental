import React, { Component } from 'react'

export default class TimeBack extends Component {
  constructor(props){
    super(props);
    this.state = {
      count: this.props.startCount
    };
  }

  componentDidMount(){
    this.timer = setInterval(()=>{

      if(this.state.count > 0){
        const newCount = this.state.count - 1; 
        this.setState({
          count:newCount
        });
      } else {
        window.clearInterval(this.timer);
      }
    }, 1000);
  }

  componentWillUnmount(){
    if(this.timer){
      window.clearInterval(this.timer);
    }
    
  }

  render() {
    return this.props.children(this.state.count);
  }
}
