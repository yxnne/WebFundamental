import React, { Component } from 'react'

/**
 * 这是一个简单HOC，做了很简单的事情
 * 就是去掉user属性，传递其他的属性
 */
export default (WrappetComp) =>{
  
  return class SimpleHOC extends Component {
    render() {
      const {user, ...otherProps} = this.props;
      return (
        < WrappetComp {...otherProps} />
      )
    }
  }
};


