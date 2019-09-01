import React, { Component } from 'react';
import './Home.css';
import Footer from '../Footer/Footer';

class Home extends Component {
    render() {
        return(
            <section className="Home">
                <div className="Home-Container">
                    <h1 className="Home-Title">Transform your conflicts</h1>
                    <p className="Home-Text">Learn about your conflict style and improve your communication skills.</p>
                    <button className="Take-Quiz-Button" onClick={() => this.props.updateDisplay("Quiz")}>Take Quiz</button>
                    <div className="Home-Footer">
                        <Footer />
                    </div>
                </div>
            </section>
        );
    }
}

export default Home;