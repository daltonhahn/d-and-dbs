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
	  this.state = {output: "Dungeons and Databases"}
	  var sendQuery = this.sendQuery.bind(this);
  };

  sendQuery(data) {
	  console.log(data);
	  fetch('/character/'.concat(data)).then(res => res.json()).then(data => {
      		this.setState({output: data.string});});
  };

  render() {
	  var sendQuery = this.sendQuery;
  return (
    <div className="App">
    	<SimpleTabs sendQuery={sendQuery.bind(this)} />
	  <header className="App-header">
	    <QueryOutput  data={this.state.output} />
	  </header>
    </div>
  );
}
}

export default App;
