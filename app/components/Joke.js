import React, { useEffect, useState } from 'react';
import queryString from 'query-string';

export default function Joke(props) {
    const [joke, setJoke] = useState('');

    useEffect(() => {
        const { term } = queryString.parse(props.location.search);
        fetch(`https://icanhazdadjoke.com/search?term=${term}&limit=1`, {
            headers: {
                Accept: 'application/json'
            }
        })
            .then(res => res.json())
            .then(res => setJoke(res.results[0].joke));
    }, []);

    return <div className="joke">{joke}</div>;
}
