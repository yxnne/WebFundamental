import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import SimpleHOC from './hoc/simple_hoc'

const Test = ({user, text}) => (
  user?(
    <p> SimpleHOC not Work, {user}</p>
  ):(
    <p> SimpleHOC  Worked, {text} </p>
  )
);    

const Wrapping = SimpleHOC(Test);

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
        <Wrapping user='yxnne' text='test simple hoc'/>

      </div>
    );
  }
}

export default App;
