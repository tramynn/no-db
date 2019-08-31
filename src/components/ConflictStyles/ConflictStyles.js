import React, { Component } from 'react';
import StyleCard from './StyleCard/StyleCard';
import './ConflictStyles.css';

class ConflictStyles extends Component {
    render() {
        return(
            <div className="ConflictStyles-Container">
                <section className="ConflictStyles-Left">
                    <section className="ConflictStyles-Header">
                        <ul>
                            <li>Conflict</li>
                            <li>Types</li>
                        </ul>
                    </section>
                </section>
                <section className="ConflictStyles-Right">
                    <section className="Styles-Container">
                        <StyleCard name="Collaborating" />
                        <StyleCard name="Competing" />
                        <StyleCard name="Avoiding" />
                        <StyleCard name="Accommodating" />
                        <StyleCard name="Compromising" />
                    </section>
                </section>
            </div>
        );
    }
}

export default ConflictStyles;