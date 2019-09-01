import React, { Component } from 'react';
import axios from 'react';
import './Answers.css';

class Answers extends Component {
    constructor() {
        super();
        this.state = {
            userAnswers: [],
            answer1: "",
            answer2: "",
            answer3: "",
            answer4: "",
            answer5: "",
            answer6: "",
            answer7: "",
            answer8: "",
            answer9: "",
            answer10: "",
            answer11: "",
            answer12: "",
            answer13: "",
            answer14: "",
            answer15: ""
        }
    }

    handleChange = (e) => {
        this.setState({[e.target.placeholder]: e.target.value})
    }

    handleSubmit = () => {
        axios
            .post("/api/quiz", {
                answer1: this.state.answer1,
                answer2: this.state.answer2,
                answer3: this.state.answer3,
                answer4: this.state.answer4,
                answer5: this.state.answer5,
                answer6: this.state.answer6,
                answer7: this.state.answer7,
                answer8: this.state.answer8,
                answer9: this.state.answer9,
                answer10: this.state.answer10,
                answer11: this.state.answer11,
                answer12: this.state.answer12,
                answer13: this.state.answer13,
                answer14: this.state.answer14,
                answer15: this.state.answer15
            })
            .then(response => {
                this.setState({userAnswers: response.data});
            })
            .catch(err => {
                console.log(err);
            });
    }

    // resetAnswers = () => {
    //     axios
    //         .delete("/api/quiz")
    //         .then(response => {
    //             this.setState({ userAnswers: });
    //         })
    //         .catch(err => {
    //             console.log(err);
    //         });
    // }

    render() {
        return(
            <section className="Answers">
                <form className="Quiz-Answers">
                    <input 
                        onChange={this.handleChange}
                        placeholder="answer 1"
                    />
                    <input 
                        onChange={this.handleChange}
                        placeholder="answer 2"
                    />
                    <input 
                        onChange={this.handleChange}
                        placeholder="answer 3"
                    />
                    <input 
                        onChange={this.handleChange}
                        placeholder="answer 4"
                    />
                    <input 
                        onChange={this.handleChange}
                        placeholder="answer 5"
                    />
                    <input 
                        onChange={this.handleChange}
                        placeholder="answer 6"
                    />
                    <input 
                        onChange={this.handleChange}
                        placeholder="answer 7"
                    />
                    <input 
                        onChange={this.handleChange}
                        placeholder="answer 8"
                    />
                    <input
                        onChange={this.handleChange}
                        placeholder="answer 9"
                    />
                    <input 
                        onChange={this.handleChange}
                        placeholder="answer 10"
                    />
                    <input 
                        onChange={this.handleChange}
                        placeholder="answer 11"
                    />
                    <input 
                        onChange={this.handleChange}
                        placeholder="answer 12"
                    />
                    <input 
                        onChange={this.handleChange}
                        placeholder="answer 13"
                    />
                    <input 
                        onChange={this.handleChange}
                        placeholder="answer 14"
                    />
                    <input 
                        onChange={this.handleChange}
                        placeholder="answer 15"
                    />
                    <button onClick={() => this.state.userAnswers}>Submit</button>
                </form>
            </section>
        );
    }
}

export default Answers;