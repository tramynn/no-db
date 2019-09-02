import React, { Component } from 'react';
import axios from 'axios';
import './Answers.css';

class Answers extends Component {
    constructor(props) {
        super(props);
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

        this.restartQuiz = this.restartQuiz.bind(this);
    }

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
        axios
            .put(`/api/quiz/${e.target.name}`, {
                answer: +e.target.value
            })
            .catch(err => {
                console.log(err);
            })
    }

    handleSubmit = (e) => {
        e.preventDefault();
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
                this.props.updateDisplay("Results");
            })
            .catch(err => {
                console.log(err);
            });
    }

    restartQuiz() {
        axios
            .delete("/api/quiz")
            .then(response => {
                this.setState({
                    userAnswers: response.data,
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
                })
            })
            .catch(err => {
                console.log(err);
            });
    }

    componentDidUpdate() {
        axios
            .get("/api/quiz")
            .catch(err => {
                console.log(err);
            });
    }

    render() {
        return(
            <section className="Answers">
                <form className="Quiz-Answers" onSubmit={this.handleSubmit}>
                    <input 
                        name="answer1"
                        onChange={this.handleChange}
                        placeholder="answer 1"
                        value={this.state.answer1}
                    />
                    <input
                        name="answer2"
                        onChange={this.handleChange}
                        placeholder="answer 2"
                        value={this.state.answer2}
                    />
                    <input 
                        name="answer3"
                        onChange={this.handleChange}
                        placeholder="answer 3"
                        value={this.state.answer3}
                    />
                    <input 
                        name="answer4"
                        onChange={this.handleChange}
                        placeholder="answer 4"
                        value={this.state.answer4}
                    />
                    <input 
                        name="answer5"
                        onChange={this.handleChange}
                        placeholder="answer 5"
                        value={this.state.answer5}
                    />
                    <input 
                        name="answer6"
                        onChange={this.handleChange}
                        placeholder="answer 6"
                        value={this.state.answer6}
                    />
                    <input 
                        name="answer7"
                        onChange={this.handleChange}
                        placeholder="answer 7"
                        value={this.state.answer7}
                    />
                    <input 
                        name="answer8"
                        onChange={this.handleChange}
                        placeholder="answer 8"
                        value={this.state.answer8}
                    />
                    <input
                        name="answer9"
                        onChange={this.handleChange}
                        placeholder="answer 9"
                        value={this.state.answer9}
                    />
                    <input 
                        name="answer10"
                        onChange={this.handleChange}
                        placeholder="answer 10"
                        value={this.state.answer10}
                    />
                    <input 
                        name="answer11"
                        onChange={this.handleChange}
                        placeholder="answer 11"
                        value={this.state.answer11}
                    />
                    <input 
                        name="answer12"
                        onChange={this.handleChange}
                        placeholder="answer 12"
                        value={this.state.answer12}
                    />
                    <input 
                        name="answer13"
                        onChange={this.handleChange}
                        placeholder="answer 13"
                        value={this.state.answer13}
                    />
                    <input 
                        name="answer14"
                        onChange={this.handleChange}
                        placeholder="answer 14"
                        value={this.state.answer14}
                    />
                    <input 
                        name="answer15"
                        onChange={this.handleChange}
                        placeholder="answer 15"
                        value={this.state.answer15}
                    />
                    <button type="submit">Submit</button>
                </form>
                <button onClick={this.restartQuiz}>Restart</button>
            </section>
        );
    }
}

export default Answers;