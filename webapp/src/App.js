import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from "@material-ui/core/Button";
import ReactMarkdown from 'react-markdown';
import {render} from 'react-dom';
import QueryOutput from './QueryOutput';

var gfm = require('remark-gfm')

class App extends Component {
  constructor(props){
	  super(props)
	  this.state = {msg: "hello"}
	  this.handleClick = this.handleClick.bind(this)
  }
  handleClick() {
	  this.setState({msg: "NEW MESSAGE"})
  }

  render() {
  return (
    <div className="App">
      <header className="App-header">
	  <QueryOutput />
	  <p>{this.state.msg}</p>

        ... NEW TEST no changes in this part ...

        <Button onClick={this.handleClick} variant="contained" color="primary">
    Dummy Button 
  </Button>
      </header>
    </div>
  );
}
}

export default App;

//<p><ReactMarkdown plugins={[gfm]} source={markString} /></p>
