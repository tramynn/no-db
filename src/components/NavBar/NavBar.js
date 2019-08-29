import React, { Component } from 'react';
import './NavBar.css';

class NavBar extends Component {
    constructor() {
        super();
        this.state = {
        }
    }
    render() {
        return(
            <section className="NavBar">
                <section className="NavBar-logo">
                    <h1>weSolv</h1>
                </section>
                <section className="NavBar-Links">
                    <ul>
                        <li>Take Quiz</li>
                        <li>Conflict Styles</li>
                        <li>Conflict Types</li>
                        <li>Search</li>
                    </ul>
                </section>
            </section>
        );
    }
}

export default NavBar;