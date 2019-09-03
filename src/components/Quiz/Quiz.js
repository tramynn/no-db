import React, { Component } from "react";
import Card from "../Card/Card";
import "./Quiz.css";

class Quiz extends Component {
  render() {
    return (
      <section className="Quiz">
        <div className="Quiz-Description-Container">
          <h1 className="Quiz-Title">Conflict Style Quiz</h1>
          <p className="Quiz-Subtitle">
            Brought to you by,
            <br />
            Reginald Adkins (PhD), Elemental Truths
          </p>
          <section className="Quiz-Description">
            <section className="BL">
              <div className="Box-Accent"></div>
              <h1>Be honest.</h1>
              <p>This quiz is designed to help you.</p>
            </section>
            <section className="BM">
              <div className="Box-Accent"></div>
              <h1>
                No right
                <br /> or
                <br />
                wrong answers.
              </h1>
              <p>Try not to leave blank answers.</p>
            </section>
            <section className="BR">
              <div className="Box-Accent"></div>
              <h1>
                Answer
                <br /> from
                <br />1 to 4.
              </h1>
              <p>
                1 - Rarely
                <br />
                2 - Sometimes
                <br />
                3 - Often
                <br />
                4 - Always
                <br />
              </p>
            </section>
          </section>
        </div>
        <Card updateDisplay={this.props.updateDisplay} />
      </section>
    );
  }
}

export default Quiz;
