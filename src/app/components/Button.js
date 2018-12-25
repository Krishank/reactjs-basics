import React from 'react';
import { render } from 'react-dom';
const ThemeContext = React.createContext('light');
export default class ThemeButton extends React.Component {
  render() {
    return (
      <React.Fragment>
        <ThemeContext.Consumer value="dark">
          <button theme={this.props.children}>I am the Button Used Context API from React 16</button>
        </ThemeContext.Consumer>
      </React.Fragment>
    )
  }
}
