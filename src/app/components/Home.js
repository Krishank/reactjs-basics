import React from "react";
import PropTypes from 'prop-types';
import { Button } from './Button.style.js';

export class Home extends React.Component{
  constructor(props){
    super();
    this.state={
      age: props.age,
      year: new Date().getFullYear()
    }
  }
  onMakeOlder(){
    this.setState({
      age: this.state.age + 1,
      year: this.state.year + 1
    });
  }
  onChangeText(){
    this.props.onChangeLink("About");
  }
  onHandleChange(event){
    this.props.onChangeLink(event.target.value);
  }
  render(){
    return(
      <div>
          <Button brandColor="green" >I am a Styled Component</Button>
          <p>In a new Home Component!</p>
          <p>Hello My Name is: {this.props.name} and my age is {this.state.age} in {this.state.year}</p>
          <hr/>
          <button className="btn btn-primary" onClick={()=>this.onMakeOlder()}>My Age is {this.state.age} in {this.state.year}</button>
          <hr/>
         <input type="text" onChange={(event)=> this.onHandleChange(event)} value={this.props.intialLinkName}></input><button className="btn btn-primary" onClick={()=>this.onChangeText()}>Click To Change Header Text</button>
      </div>
    )
  }
}

Home.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number
};
