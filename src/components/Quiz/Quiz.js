import React, { Component } from 'react';

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
            <main className="Quiz">
                <header className="Quiz-header">
                    <h2>Quiz</h2>
                </header>
            </main>
        );
    }
}

export default Quiz;