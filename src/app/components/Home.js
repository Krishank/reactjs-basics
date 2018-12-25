import React from "react";

import ThemedButton from './themed-button';

export class Home extends React.Component{
  render(){
    return(
      <React.Fragment>
          <p>In a Home Component!</p>
          <ThemedButton>My Default Theme was Light i got reset in index.js via context</ThemedButton>
      </React.Fragment>
    )
  }
}
