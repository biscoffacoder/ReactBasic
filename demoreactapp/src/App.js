import React, { Component } from 'react';
import './App.css';
import ListMain from './ListComponents/ListMain';
import logo from './logo.svg';
import Person from './Person/Person';
import UserInput from './User/UserInput';

class App extends Component {
  render() {
    let renderObj = (<div></div>)
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">How fast is the change</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <ListMain/>
      </div>
    );
  }
}

export default App;
