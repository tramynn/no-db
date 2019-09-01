import React, { Component } from 'react';
import Card from '../Card/Card';
import Footer from '../Footer/Footer';
import './Quiz.css';

class Quiz extends Component {
    render() {
        return(
            <section className="Quiz">
                <h1 className="Quiz-Title">Conflict Style Quiz</h1>
                <div className="Quiz-Description-Container">
                    <section className="Quiz-Description">Powder cookie apple pie jelly-o tootsie roll apple pie chocolate cake. Jelly gummies gingerbread chocolate cake caramels dessert tart icing. Dragée chocolate bar candy topping. Topping liquorice carrot cake powder powder dragée. Liquorice marshmallow chocolate. Cotton candy gummi bears pie sugar plum chocolate bar toffee. Liquorice muffin gingerbread fruitcake gingerbread ice cream icing jelly-o dragée. Chocolate cake powder cake pastry chocolate bar dessert chocolate bar. Candy canes sweet roll macaroon bonbon sweet roll dragée sugar plum sugar plum caramels. Halvah chocolate brownie. Ice cream jelly beans fruitcake dragée lollipop jelly-o cotton candy tootsie roll marzipan. Chocolate cake donut dessert soufflé liquorice macaroon danish sesame snaps gingerbread. Marshmallow sesame snaps marzipan croissant cheesecake. Toffee chocolate cake brownie.
                    </section>
                </div>
                <Card updateDisplay={this.prop.updateDisplay} />
                <Footer />
            </section>
        );
    }
}

export default Quiz;