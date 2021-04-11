import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from "@material-ui/core/Button";
import {render} from 'react-dom';
import QueryOutput from './QueryOutput';
import SimpleTabs from './SimpleTabs';

class App extends Component {
  constructor(props){
	  super(props)
	  this.state = {query: "Dungeons and Databases"}
  }

  sendQuery = () => {
    this.setState({query:""});
  };

  render() {
  return (
    <div className="App">
    	<SimpleTabs queryString={this.props.data} />
	  <header className="App-header">
	    <QueryOutput  data={this.state.query} />
	  </header>
    </div>
  );
}
}

export default App;
