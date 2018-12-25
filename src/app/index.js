import React from 'react';
import { render } from 'react-dom';

import { Header } from "./components/Header";
import { Home } from "./components/Home";

class App extends React.Component {
    constructor(props){
      super();
      this.state={
        homeLinkText: "Home"
      }
    }
    onHeaderTextChange(newName){
      console.log("newName", newName);
      this.setState({
        homeLinkText: newName
      })
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <Header linkText={this.state.homeLinkText} link="#" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <Home
                          name={"Krishank Dwivedi"}
                          age={28}
                          onChangeLink={(newName)=> this.onHeaderTextChange(newName)}
                             />
                    </div>
                </div>
            </div>
        );
    }
}

render(<App />, window.document.getElementById('app'));
