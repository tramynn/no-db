import React from 'react';
import './StyleCard.css'

function StyleCard(props) {

    return (
        <div className="StyleCard">
            <div className="StyleCard-Container">
                <div className="StyleCard-Left">
                    <header className="StyleCard-Header">
                        <h1 className="StyleCard-Title">The {props.animal}</h1>
                        <h2 className="StyleCard-Subtitle">Conflict Style: {props.name}</h2>
                    </header>
                    <img src={props.image} alt={props.alt} />
                    <main className="StyleCard-Main">
                        <p className="StyleCard-Info">{props.info}</p>
                    </main>
                </div>
            </div>
        </div>
    );
}

export default StyleCard;