import React from 'react';
import './StyleCard.css'

function StyleCard(props) {
    return (
        <div className="StyleCard">
            <div className="StyleCard-Container">
                <div className="StyleCard-Left">
                    <header className="StyleCard-Header">
                        <h1>Conflict Style {props.name}</h1>
                    </header>
                    <main className="StyleCard-Main">
                    </main>
                </div>
                <div className="StyleCard-Right">

                </div>
            </div>
            <footer className="StyleCard-Footer">

            </footer>
        </div>
    );
}

export default StyleCard;