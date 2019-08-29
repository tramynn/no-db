import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
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
          <NavBar />
        </header>
        <main>
          <Quiz />
        </main>
      </div>
    );
  }
}

export default App;
