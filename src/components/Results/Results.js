import React, { Component } from 'react';
import axios from 'axios';
import './Results.css';

class Results extends Component {
    constructor() {
        super();
        this.state = {
            result: {}
        }
    }

    getResult = () => {
        axios
            .get("/api/result")
            .then(response => {
                this.setState({ result: response.data });
            })
            .catch(err => {
                console.log(err);
            })
    }

    render() {
        const { animal, style, description } = this.state.result;
        return(
            <div className="Results">
                <ul>
                    <li>Your Results:</li>
                    <li>Your animal is: {animal}</li>
                    <li>Your conflict style is: {style}</li>
                    <li>The {animal} {description}</li>
                </ul>
            </div>
        );
    }
}

export default Results;