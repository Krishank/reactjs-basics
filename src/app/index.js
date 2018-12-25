import React from 'react';
import { render } from 'react-dom';

import { Header } from "./components/Header";
import { Home } from "./components/Home";

class App extends React.Component {

    render() {
        const user={
          "name": "Anuj Sachan",
          "age": "28",
          "hobbies": ["CS", "Traveling", "Coading", "Singing"]
        }
        return (
            <div className="container">
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <Header/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <Home name={"Krishank Dwivedi"} age={28} userDetails={user}>
                          <p>I am the children passed to Home Component without prop</p>
                        </Home>


                    </div>
                </div>
            </div>
        );
    }
}

render(<App />, window.document.getElementById('app'));
