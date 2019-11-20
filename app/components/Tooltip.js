import React, { Component } from 'react';
import withHover from './withHover';

function Tooltip({ children, text, hovering }) {
    return (
        <div className="tooltipContainer">
            {hovering && <div className="tooltip">{text}</div>}
            {children}
        </div>
    );
}

export default withHover(Tooltip);
