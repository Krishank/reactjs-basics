import React from "react";
import PropTypes from 'prop-types';

export class Home extends React.Component{
  constructor(props){
    super();
    this.state={
      age: props.age,
      year: new Date().getFullYear()
    }
    console.log("Inside constructor");
  }

  componentWillMount() {
    console.log("Component will mount");
  }

  componentDidMount() {
      console.log("Component did mount!");
  }

  componentWillReceiveProps(nextProps) {
      console.log("Component will receive props", nextProps);
  }

  shouldComponentUpdate(nextProps, nextState) {
      console.log("Should Component update", nextProps, nextState);
      // if (nextState.status === 1) {
      //     return false;
      // }
      return true;
  }

  componentWillUpdate(nextProps, nextState) {
      console.log("Component will update", nextProps, nextState);
  }

  componentDidUpdate(prevProps, prevState) {
      console.log("Component did update", prevProps, prevState);
  }

  componentWillUnmount() {
      console.log("Component will unmount");
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
