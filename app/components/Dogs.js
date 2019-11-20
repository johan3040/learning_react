import React, { Component } from 'react';
import Card from './Card';
import Dog1 from '../images/dog1.jpg';
import Dog2 from '../images/dog2.jpg';

export class Dogs extends Component {
    render() {
        return (
            <>
                <Card name="Charlie" img={Dog1} age={3} weight={45} />
                <Card name="Ally" img={Dog2} age={2} weight={20} />
            </>
        );
    }
}

export default Dogs;
