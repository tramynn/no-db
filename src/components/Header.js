import React, { Component } from 'react';
import './Header.css';
import Home from './Home/Home';
import Quiz from './Quiz/Quiz';
import ConflictStyles from './ConflictStyles/ConflictStyles';
import ConflictTypes from './ConflictTypes/ConflictTypes';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const searchFavicon = <FontAwesomeIcon icon={faSearch} color="white" />

class Header extends Component {
    constructor() {
        super();
        this.state = {
            section: "Home"
        }
    }
    render() {
        return(
            <section className="NavBar">
                <div className="NavBar-Left">
                    <section className="NavBar-Logo">
                        <h1>reSolv</h1>
                    </section>
                </div>
                <div className="Navbar-Right">
                    <section className="NavBar-Links">
                        <ul>
                            <li onClick={ () =>this.setState({ section: "Home" })}>Home</li>
                            <li onClick={ () =>this.setState({ section: "Take Quiz" })}>Take Quiz</li>
                            <li onClick={ () =>this.setState({ section: "ConflictStyles" })}>Conflict Styles</li>
                            <li  onClick={ () =>this.setState({ section: "ConflictTypes" })}>Conflict Types</li>
                            <li>
                                <form className="Search-Input" >
                                    <input type="text" placeholder="Search.." />
                                    <button>
                                    {searchFavicon}
                                    </button>
                                </form>
                            </li>
                        </ul>
                    </section>
                    {this.state.section === "Home" ? <Home /> : null}
                    {this.state.section === "Take Quiz" ? <Quiz /> : null}
                    {this.state.section === "ConflictStyles" ? <ConflictStyles /> : null}
                    {this.state.section === "ConflictTypes" ? <ConflictTypes /> : null}
                </div>
            </section>
        );
    }
}

export default Header;