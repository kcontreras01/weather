import React, { Component } from 'react';
import Search from './Components/Search';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">What's My Weather</h1>
        </header>
        <Search />
        <footer>Footer text here</footer>
      </div>
    );
  }
}

export default App;
