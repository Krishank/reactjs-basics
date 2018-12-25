import React from "react";
import PropTypes from 'prop-types';

export class Home extends React.Component{
  render(){
    return(
      <div>
          <p>In a new Home Component!</p>
          <p>Hello My Name is: {this.props.name} and my age is {this.props.age}</p>
          <p>Please find the Details of my Friend</p>
          <p>His Name is: {this.props.userDetails.name} and age is {this.props.userDetails.age}</p>
          <p>His Hobbies are</p>
          <ul>
            {this.props.userDetails.hobbies.map((hoobies, index)=> <li key={index}>{hoobies}</li>)}
          </ul>
          {this.props.children}
      </div>
    )
  }
}

Home.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  userDetails: PropTypes.object,
  children: PropTypes.element.isRequired
};
