import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

import {Link,Router,matchPath} from'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';

const history = createBrowserHistory();

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h2>Welcome to React</h2>
                </div>
                <p className="App-intro">
                    <Router history={history}>
                        <Link to="games">Games</Link>
                    </Router>
                </p>
            </div>
        );
    }
}

export default App;
