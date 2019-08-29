import React, { Component } from 'react';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const searchFavicon = <FontAwesomeIcon icon={faSearch} color="white" />

class Header extends Component {
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
                            <li onClick={ () =>this.props.updateDisplay("Home")}>Home</li>
                            <li onClick={ () =>this.props.updateDisplay("Quiz")}>Take Quiz</li>
                            <li onClick={ () =>this.props.updateDisplay("ConflictStyles")}>Conflict Styles</li>
                            <li  onClick={ () =>this.props.updateDisplay("ConflictTypes")}>Conflict Types</li>
                            <li>
                                <form className="Search-Input" >
                                    <input type="text" placeholder="Search.." />
                                    <button className="Search-Button">
                                    {searchFavicon}
                                    </button>
                                </form>
                            </li>
                        </ul>
                    </section>
                </div>
            </section>
        );
    }
}

export default Header;