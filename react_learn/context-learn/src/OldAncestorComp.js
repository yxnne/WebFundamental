import React, { Component } from 'react'

export default class OldAncestorComp extends Component {
  render() {
    return (
      <div style={{height:80, width:100, background:"#006f81"}}>
        
      </div>
    )
  }
}

class OldFather extends Component{
  render() {
    return (
      <div style={{height:40, width:50, background:"#60f081"}}>
      
      </div>
    )
  }
}
