import React from "react";
import PropTypes from 'prop-types';

export class Home extends React.Component{
  constructor(props){
    super();
    this.age = props.age;
    this.year = new Date().getFullYear();
  }
  onMakeOlder(){
    alert(`My Current age ${this.age} in year ${this.year}`);
    console.log(`My Current age ${this.age} in year ${this.year}`);
    this.age++;
    this.year++;
    alert(`My Age in ${this.year+1} will be ${this.age}`);
    console.log(`My Age in ${this.year+1} will be ${this.age}`);
  }
  render(){
    return(
      <div>
          <p>In a new Home Component!</p>
          <p>Hello My Name is: {this.props.name} and my age is {this.props.age}</p>
          <button className="btn btn-primary" onClick={()=>this.onMakeOlder()}>My Age {this.age} in {this.year}</button>
      </div>
    )
  }
}

Home.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number
};
