import React, { Component } from 'react';
import Cat1 from '../images/cat1.jpg';
import Cat2 from '../images/cat2.jpg';
import Card from './Card';

export class Cats extends Component {
    render() {
        return (
            <>
                <Card name="Laqueefa" img={Cat1} age={3} weight={9} />
                <Card name="Shaq" img={Cat2} age={2} weight={6} />
            </>
        );
    }
}

export default Cats;
