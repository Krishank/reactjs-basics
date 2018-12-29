# reactjs-basics

This is a Basic React Project for beginner which is divided in multiple branches to explain different features of react and react16.


#Prerequisites: ES6, Javascript, HTML and CSS

# 01: react-basic-setup:
 Basic setup to start using webpack, babel to start our project

# 02: first-component:
This branch has a very high level setup of how to render your first React Component

```javascript

    import React from "react"
    import { render } from "react-dom"

    class App extends React.Component {
      render(){
        return(
          <h1>Hello React First Component</h1>
        )
      }
    }
    render(<App/>, window.document.getElementById('app'));

```
# 03: multiple-components:
As in react we develop reusable components here we can see how to render multiple component in react App

# 04: events:
Hot to attach and use events in React

# 05: passing-data-bw-componenets-props:
How to pass data to a component for its dynamic behavior

# 06: states
Role of State in React and how to use it.

# 07: data-passing-bw-components
Passing data bw components using props

# 08: two-way-data-binding
As the name suggest it's 2-way data binding but it’s pretty fast


# 09: react-life-cycle
Discuss about react life cycle also fine the images on the root for more theoretical update

# 10: stateless-components
Avoid states in your component make it stateless or pure function remember pure component is a separate topic we will cover.


# 11: react16/Fragment
New React16 feature no longer need to wrap your components in a container

``` html
      <React.Fragment>
          <p>In a new Home Component!</p>
          <p>Hello My Name is: {this.props.name} and my age is {this.state.age} in {this.state.year}</p>
          <hr/>
          <button className="btn btn-primary" onClick={()=>this.onMakeOlder()}>My Age is {this.state.age} in {this.state.year}</button>
          <hr/>
         <input type="text" onChange={(event)=> this.onHandleChange(event)} value={this.props.intialLinkName}></input><button className="btn btn-primary" onClick={()=>this.onChangeText()}>Click To Change Header Text</button>
      </React.Fragment>

```        

# 11: react16/ErrorBoundary
A new powerful feature of React16 to have a ErrorBoundary for your components so you can catch debug and show a proper error when error occurs

``` html

    <ErrorBoundary>
                    <Home/>
    </ErrorBoundary>

```

# 12: react16/contextAPI:
As in React we pass data via props to components suppose if we have a component in nth level this will be a big pain to pass that data to all component as a prop even if they are not using it no issue now we can use contextAPI comes with React16.

# 13: react-memo-component

This is also a new feature of react as all the stateless component or stateless function will render if there parent re render we can Avoid that with pure component but now we also have memo component which are much faster than stateless components please read the React16 documentation for more info.

``` javascript
  import React from "react";

  export const Header = React.memo(function Header(props) {
    return (
        <nav className="navbar navbar-default">
            <div className="container">
                <div className="navbar-header">
                    <ul className="nav navbar-nav">
                        <li><a href={props.link}>{props.linkText}</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    );


```
