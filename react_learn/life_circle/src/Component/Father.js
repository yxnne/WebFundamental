import React, { Component } from 'react'

/** 探索生命周期 */
export default class Father extends Component {

  constructor(props){
    super(props);
    console.log("Father","constructor");
  }

  
  render() {
    console.log("Father", "render");
    return (
      <div>
        

        
      </div>
    )
  }
}
