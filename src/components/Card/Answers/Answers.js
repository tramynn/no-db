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
                        placeholder="answer 2"
                    />
                    <input 
                        placeholder="answer 3"
                    />
                    <input 
                        placeholder="answer 4"
                    />
                    <input 
                        placeholder="answer 5"
                    />
                    <input 
                        placeholder="answer 6"
                    />
                    <input 
                        placeholder="answer 7"
                    />
                    <input 
                        placeholder="answer 8"
                    />
                    <input 
                        placeholder="answer 9"
                    />
                    <input 
                        placeholder="answer 10"
                    />
                    <input 
                        placeholder="answer 11"
                    />
                    <input 
                        placeholder="answer 12"
                    />
                    <input 
                        placeholder="answer 13"
                    />
                    <input 
                        placeholder="answer 14"
                    />
                    <input 
                        placeholder="answer 15"
                    />
                    <button>Submit</button>
                </form>
            </section>
        );
    }
}

export default Answers;