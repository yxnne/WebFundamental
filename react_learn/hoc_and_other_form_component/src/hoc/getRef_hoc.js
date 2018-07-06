import React, { Component } from 'react'

/**
 * 获得被包裹组件的ref引用
 * 
 * 关于ref
 * 1. 在组件中传递一个ref属性可以获得ref引用，这个属性的值需要一个函数，
 * 当组件被挂载之后，会调用ref的值的那个函数，组件的引用作为参数传给此函数；
 * 
 * 2. ref值获得React组件引用和去获得DOM元素的引用所得到的东西是不同的：
 * React组件的 ref是一个组件的obj
 * Dom的ref是这个DOM元素，和你getElemntById得到的东西是一样的
 * 
 * 3. 无状态React组件（函数式）,没有ref
 */
export default (WrappetComp) =>{
  
  return class GetRefHOC extends Component {
    constructor(props){
      super(props);
      this.linkRef = this.linkRef.bind(this);
      this.handleGet = this.handleGet.bind(this);
      this.getDomRef = this.getDomRef.bind(this);
    }

    linkRef(rootRef){
      this._rootRef = rootRef;
    }

    getDomRef(domRef){
      this._domRef = domRef;
    }

    handleGet(){
      if(this._rootRef){
        console.log('_rootRef', this._rootRef)
      }
      if(this._domRef){
        console.log('_domRef', this._domRef);
      }
    }

    render() {
      return (
        <div>
          <button onClick={this.handleGet}>Test print getting ref</button>
          <br/>
          <WrappetComp  ref={this.linkRef}/>
          <p ref={this.getDomRef}>这个存在的意义是测试得到Dom元素的Ref</p>
          <p id="p123">随便</p>
        </div>
        
      )
    }
  }
};


