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
	  this.state = { 
		  output: "Dungeons and Databases",
		  columns: '',
	  }
	  var sendQuery = this.sendQuery.bind(this);
	  var sendUpdate = this.sendUpdate.bind(this);
  };


  sendQuery(data) {
	   fetch('/query', {
		  method: 'POST',
		  headers: {
		    'Accept': 'application/json',
		    'Content-Type': 'application/json',
		  },
		  body: JSON.stringify({
			  data
		  })
		}).then(res => res.json()).then(data => { this.setState({output: data.records, columns: data.columns});
  });
  };

  sendUpdate(data) {
	  console.log(data);
  };

  render() {
	  var sendQuery = this.sendQuery;
	  var sendUpdate = this.sendUpdate;
  return (
    <div className="App">
    	<SimpleTabs sendUpdate={sendUpdate.bind(this)} sendQuery={sendQuery.bind(this)} />
	  <header className="App-header">
	    <QueryOutput className="App" columns={this.state.columns} data={this.state.output} />
	  </header>
    </div>
  );
}
}

export default App;
