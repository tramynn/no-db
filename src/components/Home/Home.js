import React, { Component } from 'react';
import './Home.css';

class Home extends Component {
    constructor() {
        super();
        this.state = {
        }
    }
    render() {
        return(
            <section className="Home">
                <main className="Home-Container">
                    <h1 className="Home-Title">Transform your conflicts</h1>
                    <p className="Home-Text">Learn about your conflict style and improve your communication skills.</p>
                    <button className="Take-Quiz-Button" onClick={() => this.props.updateDisplay("Quiz")}>Take Quiz</button>
                </main>
            </section>
        );
    }
}

export default Home;