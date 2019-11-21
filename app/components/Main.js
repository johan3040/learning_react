import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Loading from './Loading';

const Dogs = React.lazy(() => import('./Dogs'));
const Cats = React.lazy(() => import('./Cats'));
const Joke = React.lazy(() => import('./Joke'));

export default function Main() {
    return (
        <React.Suspense fallback={<Loading />}>
            <Switch>
                <Route exact path="/" component={Dogs} />
                <Route exact path="/cats" component={Cats} />
                <Route path="/joke" component={Joke} />
                <Route render={() => <h1>404</h1>} />
            </Switch>
        </React.Suspense>
    );
}
