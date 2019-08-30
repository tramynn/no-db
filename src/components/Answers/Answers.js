import React, { Component } from 'react';
import './Answers.css';

class Answers extends Component {
    constructor() {
        super();
        this.state = {
            userAnswers: []
        }
    }


    render() {
        return(
            <section className="Answers">
                <form className="Quiz-Answers">
                    <input 
                        placeholder="answer 1"
                    />
                    <input 
                        placeholder="answer 1"
                    />
                    <input 
                        placeholder="answer 1"
                    />
                    <input 
                        placeholder="answer 1"
                    />
                    <input 
                        placeholder="answer 1"
                    />
                    <input 
                        placeholder="answer 1"
                    />
                    <input 
                        placeholder="answer 1"
                    />
                    <input 
                        placeholder="answer 1"
                    />
                    <input 
                        placeholder="answer 1"
                    />
                    <input 
                        placeholder="answer 1"
                    />
                    <input 
                        placeholder="answer 1"
                    />
                    <input 
                        placeholder="answer 1"
                    />
                    <input 
                        placeholder="answer 1"
                    />
                    <input 
                        placeholder="answer 1"
                    />
                    <input 
                        placeholder="answer 1"
                    />
                    <button>Submit</button>
                </form>
            </section>
        );
    }
}

export default Answers;