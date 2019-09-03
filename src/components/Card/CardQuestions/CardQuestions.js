import React, { Component } from "react";
import "./CardQuestions.css";

class CardQuestions extends Component {
  render() {
    let questionDisplay = this.props.quizQuestions.map((question, index) => {
      return (
        <div className="Questions" key={index}>
          <ul className="Questions-Container">
            <li>
              {question.id}. {question.question}
            </li>
          </ul>
        </div>
      );
    });
    return <section className="Question-Display">{questionDisplay}</section>;
  }
}

export default CardQuestions;
