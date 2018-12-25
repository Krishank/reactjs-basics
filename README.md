# reactjs-basics

#react16/Fragment this branch will explain how to use Fragment to avoid wrapping sibling component in a container this is a new React 16 Feature

<div>
    <p>In a new Home Component!</p>
    <p>Hello My Name is: {this.props.name} and my age is {this.state.age} in {this.state.year}</p>
    <hr/>
    <button className="btn btn-primary" onClick={()=>this.onMakeOlder()}>My Age is {this.state.age} in {this.state.year}</button>
    <hr/>
   <input type="text" onChange={(event)=> this.onHandleChange(event)} value={this.props.intialLinkName}></input><button className="btn btn-primary" onClick={()=>this.onChangeText()}>Click To Change Header Text</button>
</div>

if we see the above code there is no use of container div we should remove this

More Read: https://reactjs.org/docs/fragments.html

#Webpack
#Webpack-Dev-Server (For Running localhost)
#ES6
#Babel
#reactjs
#reactDom
