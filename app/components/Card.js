import React, { Component } from 'react';
import Tooltip from './Tooltip';
import { ThemeConsumer } from './../contexts/theme';

function Card(props) {
    return (
        <ThemeConsumer>
            {({ theme, toggleTheme }) => (
                <div className={`card card-${theme}`}>
                    <h2>{props.name}</h2>
                    <img src={props.img}></img>
                    <ul>
                        <Tooltip text="This is the age">
                            <li>Age: {props.age}</li>
                        </Tooltip>
                        <Tooltip text="This is the weight">
                            <li>Weight: {props.weight}</li>
                        </Tooltip>
                        <li>
                            Description: <br />
                            Very happy doggo
                        </li>
                    </ul>
                </div>
            )}
        </ThemeConsumer>
    );
}

export default Card;
