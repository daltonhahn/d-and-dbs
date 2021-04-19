import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from "@material-ui/core/Button";
import {render} from 'react-dom';
import QueryOutput from './QueryOutput';
import Welcome from './Welcome';
import Filters from './Filters';
import SimpleTabs from './SimpleTabs';
import CssBaseline from '@material-ui/core/CssBaseline'

class App extends Component {
  constructor(props){
	  super(props)
	  this.state = { 
		  welcome_displayed: "flex",
		  //filter_displayed: "none",
		  data: [],
		  columns:[],
	  }
	  var sendQuery = this.sendQuery.bind(this);
	  var sendUpdate = this.sendUpdate.bind(this);
  };

  updateWelcome() {
	  this.setState({welcome_displayed: 'none',});
  };
  //updateFilters() {
//	  this.setState({filter_displayed: 'flex',});
 // };


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
		}).then(res => res.json()).then(data => { this.setState({data: data.records, columns: data.columns});
  });
	  this.updateWelcome();
	  //this.updateFilters(this.state.columns);
  };

  sendUpdate(data) {
	   fetch('/update', {
		method: 'POST',
		headers: {
		  'Accept': 'application/json',
		  'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			data
		})
		});
	  console.log(data);
	  this.updateWelcome();
  };


  render() {
	  var sendQuery = this.sendQuery;
	  var sendUpdate = this.sendUpdate;

  return (
    <div className="App">
    	<SimpleTabs sendUpdate={sendUpdate.bind(this)} sendQuery={sendQuery.bind(this)} />
	  <header className="App-header">
	    <Welcome className="App" welcome_displayed={this.state.welcome_displayed} />
	    <QueryOutput className="App" columns={this.state.columns} data={this.state.data} />
	  </header>
    </div>
  );
}
}

export default App;
	    //<Filters className="App" columns={this.state.columns} filter_displayed={this.state.filter_displayed} />
