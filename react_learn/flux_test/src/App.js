import React, { Component } from 'react';
import ControlPanel from './components_with_flux/ControlPanel';
import logo from './logo.svg';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          This Will Test The Flux
        </p>

        <ControlPanel />
        
      </div>
    );
  }
}

export default App;
