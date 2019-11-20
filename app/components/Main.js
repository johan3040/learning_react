import React from 'react';
import Dogs from './Dogs';
import Cats from './Cats';
import { BrowserRouter as Router, Route } from 'react-router-dom';

export default function Main() {
    return (
        <>
            <Route exact path="/" component={Dogs} />
            <Route exact path="/cats" component={Cats} />
        </>
    );
}
