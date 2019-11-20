import React, { Component } from 'react';
import { ThemeConsumer } from './../contexts/theme';
import { NavLink } from 'react-router-dom';

const activeStyle = {
    color: '#f00'
};

export class Nav extends Component {
    render() {
        return (
            <ThemeConsumer>
                {({ theme, toggleTheme }) => (
                    <nav className={theme === 'light' ? 'light' : 'dark'}>
                        <ul className="links">
                            <li>
                                <NavLink to="/" activeStyle={activeStyle} exact>
                                    Dogs
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/cats"
                                    activeStyle={activeStyle}
                                    exact
                                >
                                    Cats
                                </NavLink>
                            </li>
                        </ul>
                        <div className="themebox" onClick={toggleTheme}>
                            {theme === 'light' ? '🔦' : '🌞'}
                        </div>
                    </nav>
                )}
            </ThemeConsumer>
        );
    }
}

export default Nav;
