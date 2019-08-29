import React, { Component } from 'react';
import Card from '../Card/Card';
import './Quiz.css';

class Quiz extends Component {
    constructor() {
        super();
        this.state = {
            questions: [],
            answers: [],
            userConflictStyle: ''
        }
    }
    render () {
        return(
            <section className="Quiz">
                <h1 className="Quiz-Title">Quiz</h1>
                <Card />
            </section>
        );
    }
}

export default Quiz;