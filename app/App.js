import React, { Component } from 'react';
import Nav from './components/Nav';
import Main from './components/Main';
import { ThemeProvider } from './contexts/theme';
import { BrowserRouter as Router, Route } from 'react-router-dom';

export class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            theme: 'light',
            toggleTheme: () => {
                this.setState(({ theme }) => ({
                    theme: theme === 'light' ? 'dark' : 'light'
                }));
            }
        };
    }
    render() {
        return (
            <Router>
                <ThemeProvider value={this.state}>
                    <div
                        className={
                            this.state.theme === 'light' ? 'light' : 'dark'
                        }
                        id="wrapper"
                    >
                        <Nav />
                        <main>
                            <Main />
                        </main>
                    </div>
                </ThemeProvider>
            </Router>
        );
    }
}

export default App;
