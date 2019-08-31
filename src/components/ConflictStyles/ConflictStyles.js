import React, { Component } from 'react';
import StyleCard from './StyleCard/StyleCard';
import StylesNav from './StylesNav/StylesNav';
import './ConflictStyles.css';

class ConflictStyles extends Component {
    constructor() {
        super();
        this.state = {
            section: "Collaborating"
        }

        this.updateSection = this.updateSection.bind(this);
    }

    updateSection(style) {
        this.setState({section: style});
    }

    render() {

    
        return(
            <div className="ConflictStyles-Container">
                <section className="ConflictStyles-Left">
                    <section className="ConflictStyles-Header">
                        Conflict<br />Styles.
                    </section>
                </section>
                <section className="ConflictStyles-Right">
                    <nav className="Styles-Header">
                        <StylesNav updateSection={this.updateSection} />
                    </nav>
                    <section className="Styles-Container">
                        {this.state.section === "Collaborating" ? <StyleCard name="Collaborating" /> : null}
                        {this.state.section === "Competing" ? <StyleCard name="Competing" /> : null}
                        {this.state.section === "Avoiding" ? <StyleCard name="Avoiding" /> : null}
                        {this.state.section === "Accommodating" ? <StyleCard name="Accommodating" /> : null}
                        {this.state.section === "Compromising" ? <StyleCard name="Compromising" /> : null }
                    </section>
                </section>
            </div>
        );
    }
}

export default ConflictStyles;