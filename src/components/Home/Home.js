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
                    <h1 className="Home-Title">Welcome</h1>
                    <p className="Home-Text">Transform your conflicts</p>
                    <button className="Take-Quiz-Button">Take Quiz</button>
                </main>
            </section>
        );
    }
}

export default Home;