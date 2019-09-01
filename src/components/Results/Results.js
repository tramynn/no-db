import React, { Component } from 'react';
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
                {animal}
                {style}
                {description}
            </div>
        );
    }
}

export default Results;