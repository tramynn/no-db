import React, { Component } from 'react';
import './Card.css'
import axios from 'axios';
import CardQuestions from './CardQuestions/CardQuestions';


class Card extends Component {
    constructor() {
        super();
        this.state = {
            quizQuestions: [],
            userConflictStyle: ''
        }
    }

    componentDidMount() {
        axios
            .get("/api/quiz")
            .then(response => {
                this.setState({ quizQuestions: response.data })
            })
            .catch(err => {
                console.log(err);
            });
    }

    render() {
        const { quizQuestions } = this.state;
        return(
            <section className="Card">
                <div className="Card-Container">
                    <form className="Quiz-Form">
                        <div>
                            <CardQuestions quizQuestions={quizQuestions} />
                        </div>
                        <div>
                            <input placeholder="Enter number 1-4"/>
                        </div>
                        <button type="submit" value="Submit">Submit</button>
                    </form>
                </div>
            </section>
        );
    }
}

export default Card;
