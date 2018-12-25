import React from 'react';
import { render } from 'react-dom';

import {ThemeContext, themes} from './components/theme-context';

import { Header } from "./components/Header";
import { Home } from "./components/Home";

class App extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <Header linkText="Home" link="#" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                       <ThemeContext.Provider value={themes.dark}>
                        <Home/>
                       </ThemeContext.Provider>
                    </div>
                </div>
            </div>
        );
    }
}

render(<App />, window.document.getElementById('app'));
