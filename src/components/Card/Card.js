import React, { Component } from 'react';
import './Card.css'


class Card extends Component {
    constructor() {
        super();
        this.state = {
        }
    }
    render() {
        return(
            <section className="Card">
                <div className="Card-Container">
                    <form className="Quiz-Form">
                        <label>
                            Question: 
                        </label>

                        <button type="submit" value="Submit">Submit</button>
                    </form>
                </div>
            </section>
        );
    }
}

export default Card;
