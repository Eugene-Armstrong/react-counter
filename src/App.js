import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import Counter from '../src/Counter'
import CounterGroup from '../src/CounterGroup'
class App extends Component {
  render() {
    // var buttonLists = [], n = 5, i;
    // for (i = 0; i < n; i = i + 1) {
    //   buttonLists.push(<div><Counter /></div>);
    // }
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        {/* {buttonLists} */}
        <CounterGroup size="5" />
      </div>
    );
  }
}

// class Counter extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { count: 0};
//   }
//   add = () => {
//     this.setState({ 
//       count: this.state.count + 1 
//     });
//   }
//   remove = () => {
//     this.setState({ 
//       count: this.state.count - 1 
//     });
//   }
//   render() {
//     return (
//       <div>
//         <button onClick={this.add}> + </button>&nbsp;&nbsp;
//         <button onClick={this.remove}> - </button>&nbsp;&nbsp;
//         <span>{this.state.count}</span><br/><br/>
//       </div>
//     )
//   }
// }

export default App;
