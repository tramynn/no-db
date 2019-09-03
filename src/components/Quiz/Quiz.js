import React, { Component } from "react";
import Card from "../Card/Card";
import "./Quiz.css";

class Quiz extends Component {
  render() {
    return (
      <section className="Quiz">
        <div className="Quiz-Description-Container">
          <h1 className="Quiz-Title">Conflict Style Quiz</h1>
          <section className="Quiz-Description">
            <section className=""></section>
            <section className=""></section>
            <section className=""></section>
          </section>
        </div>
        <Card updateDisplay={this.props.updateDisplay} />
      </section>
    );
  }
}

export default Quiz;
