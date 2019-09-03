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
    const { animal, style } = this.state.results;
    return (
      <div className="Results">
        <main className="Results-Container">
          <div className="Results-Main">
            <ul>
              <li className="Results-List">Your Results~</li>
              <br />
              <li className="Results-List">Your animal is: {animal}</li>
              <br />
              <li className="Results-List">Your conflict style is: {style}</li>
              <br />
            </ul>
          </div>
        </main>
      </div>
    );
  }
}

export default Results;
