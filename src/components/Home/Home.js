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
                <h1 className="Home-Title">Welcome</h1>
            </section>
        );
    }
}

export default Home;