import React, { Component } from 'react';
import Cat1 from '../images/cat1.jpg';
import Cat2 from '../images/cat2.jpg';
import Card from './Card';
import { Link } from 'react-router-dom';

export class Cats extends Component {
    render() {
        return (
            <>
                <div className="cardContainer">
                    <Card name="Laqueefa" img={Cat1} age={3} weight={9} />
                    <Card name="Shaq" img={Cat2} age={2} weight={6} />
                </div>
                <Link to="/joke?term=cat" className="jokeLink">
                    <button className="btn">Get cat joke</button>
                </Link>
            </>
        );
    }
}

export default Cats;
