import { Component } from 'react'
import PropTypes from 'prop-types';

class TimeBack extends Component {
  constructor(props){
    super(props);
    this.state = {
      count: this.props.startCount
    };
  }

  shouldComponentUpdate(nextProp, nextState){
    return this.state.count !== nextState.count;
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

TimeBack.PropTypes = {
  children:PropTypes.func.isRequired,
  startCount:PropTypes.number.isRequired
}

export default TimeBack;