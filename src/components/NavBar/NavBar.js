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
                <div className="NavBar-Left">
                    <section className="NavBar-Logo">
                        <h1>weSolv</h1>
                    </section>
                </div>
                <div className="Navbar-Right">
                    <section className="NavBar-Links">
                        <ul>
                            <li>Take Quiz</li>
                            <li>Conflict Styles</li>
                            <li>Conflict Types</li>
                            <button className="Search-Button">
                                
                                <li>Search</li>
                            </button>
                        </ul>
                    </section>
                </div>
            </section>
        );
    }
}

export default NavBar;