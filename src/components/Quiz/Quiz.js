import React, { Component } from "react";
import Card from "../Card/Card";
import Footer from "../Footer/Footer";
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
        {/* <div className="Quiz-Gradient"></div> */}
        <Card updateDisplay={this.props.updateDisplay} />
        <Footer />
      </section>
    );
  }
}

export default Quiz;
