import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import SimpleHOC from './hoc/simple_hoc'
import GetRefHOC from './hoc/getRef_hoc'
import SimpleFuncChildComp from './func_child_comp/simpleComp';
import TimeBack from './func_child_comp/TimeBack';

const Test1 = ({user, text}) => (
  user?(
    <p> SimpleHOC not Work, {user}</p>
  ):(
    <p> SimpleHOC  Worked, {text} </p>
  )
);    

// 无状态组件测试
const Test2 = ()=>(
  <h1>React组件</h1>
);

class Test3 extends Component {
  render() {
    return (
      <div>
        <h2>in Hoc</h2>
      </div>
    )
  }
}


// 使用高阶组件
const Wrapping = SimpleHOC(Test1);

const WrappingRefReactComp = GetRefHOC(Test3); //无状态组件不能有refs
//const WrappingRefDOMComp = GetRefHOC(Test3);

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <hr/>
        {/* 测试最简单的高阶组件 */}
        <Wrapping user='yxnne' text='test simple hoc'/>

        {/* 测试获得子组件ref的高阶组件 */}
        <hr/>
        <WrappingRefReactComp/>

        {/* 测试函数为子组件的高级组件 */}

        <SimpleFuncChildComp>
          {
            (fatherGiven)=>(<h1>fahther give you {fatherGiven}</h1>)
          }
        </SimpleFuncChildComp>

        <TimeBack startCount={20}>
          {
            (num)=>(<div>num is {num}</div>)
          }
        </TimeBack>

        <TimeBack startCount={100}>
          {
            (num)=>(<h5>Now is {num}</h5>)
          }
        </TimeBack>
        
      </div>
    );
  }
}

export default App;
