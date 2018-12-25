import React from "react";
import PropTypes from 'prop-types';

export class Home extends React.Component{
  constructor(props){
    super();
    this.state={
      age: props.age,
      year: new Date().getFullYear()
    }
    // this.age = props.age;
    // this.year = new Date().getFullYear();
  }
  onMakeOlder(){
    this.setState({
      age: this.state.age + 1,
      year: this.state.year + 1
    });
  }
  render(){
    return(
      <div>
          <p>In a new Home Component!</p>
          <p>Hello My Name is: {this.props.name} and my age is {this.state.age} in {this.state.year}</p>
          <button className="btn btn-primary" onClick={()=>this.onMakeOlder()}>My Age is {this.state.age} in {this.state.year}</button>
      </div>
    )
  }
}

Home.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number
};
