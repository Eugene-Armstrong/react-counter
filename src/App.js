import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BasicExample from './examples/Basic'
import CounterGroup from '../src/CounterGroup'
class App extends Component {

  render() {
    return (
      <div className="App" style={style}>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
      <BasicExample/>
      <br/><br/>
      <CounterGroup size='5' />
      </div>
    );
  }
}
const style = {
  "textAlign":"center"
};
export default App;
