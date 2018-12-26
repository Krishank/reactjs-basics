import React from "react"
const data = {
  "details":{
      "name": "Krishank",
  }
}
export class Home extends React.Component{
  render(){
    throw new Error('I crashed!');
    return(
        <p>In a new Home Component!</p>
    )
  }
}
