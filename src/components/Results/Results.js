import React, { Component } from "react";
import axios from "axios";
import "./Results.css";

class Results extends Component {
  constructor() {
    super();
    this.state = {
      results: []
    };
  }

  componentDidMount() {
    axios
      .get("/api/results")
      .then(response => {
        console.log(response.data);
        this.setState({ results: response.data });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    const { animal, style, description } = this.state.results;
    return (
      <div className="Results">
        <ul>
          <li>Your Results:</li>
          <li>Your animal is: {animal}</li>
          <li>Your conflict style is: {style}</li>
          <li>
            The {animal} is {description}
          </li>
        </ul>
      </div>
    );
  }
}

export default Results;
