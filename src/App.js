import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
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
        <header className="App-header">
          <Header />
        </header>
        <main>
          <Quiz />
        </main>
      </div>
    );
  }
}

export default App;
