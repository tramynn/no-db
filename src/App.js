import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Quiz from './components/Quiz/Quiz';

class App extends Component {
  constructor() {
    super();
    this.state = {
    }
  }
  render() {
    return (
      <div className="App">
          <Header />
      </div>
    );
  }
}

export default App;
