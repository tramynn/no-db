import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home/Home';
import ConflictStyles from './components/ConflictStyles/ConflictStyles';
import ConflictTypes from './components/ConflictTypes/ConflictTypes';  
import Quiz from './components/Quiz/Quiz';

class App extends Component {
  constructor() {
    super();
    this.state = {
      display: "Home"
    }

    this.updateDisplay = this.updateDisplay.bind(this);
  }

  updateDisplay(name) {
    this.setState({display: name})
  }

  render() {
    return (
      <div className="Dark-Overlay">
        <div className="App">
            <Header updateDisplay={this.updateDisplay} />
              {this.state.display === "Home" ? <Home updateDisplay={this.updateDisplay} /> : null}
              {this.state.display === "Quiz" ? <Quiz /> : null}
              {this.state.section === "ConflictStyles" ? <ConflictStyles /> : null}
              {this.state.section === "ConflictTypes" ? <ConflictTypes /> : null}
        </div>
      </div>
    );
  }
}

export default App;
