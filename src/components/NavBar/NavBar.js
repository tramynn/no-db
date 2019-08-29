import React, { Component } from 'react';
import './NavBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const searchFavicon = <FontAwesomeIcon icon={faSearch} color="white" />


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
                </div>
            </section>
        );
    }
}

export default NavBar;