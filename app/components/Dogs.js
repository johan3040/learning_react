import React, { Component } from 'react';
import Card from './Card';
import Dog1 from '../images/dog1.jpg';
import Dog2 from '../images/dog2.jpg';
import { Link } from 'react-router-dom';

export class Dogs extends Component {
    render() {
        return (
            <>
                <div className="cardContainer">
                    <Card name="Charlie" img={Dog1} age={3} weight={45} />
                    <Card name="Ally" img={Dog2} age={2} weight={20} />
                </div>
                <Link to="/joke?term=dog" className="jokeLink">
                    <button className="btn">Get dog joke</button>
                </Link>
            </>
        );
    }
}

export default Dogs;
