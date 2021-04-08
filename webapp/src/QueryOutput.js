import React, { Component } from 'react';
import Box from '@material-ui/core/Box';
import Button from "@material-ui/core/Button";

class QueryOutput extends Component {
  constructor(props) {
    super(props)
    this.state = {msg: "hello"}
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick() {
    fetch('/time').then(res => res.json()).then((data) => {
	  this.setState({msg: data.time })
    })
    console.log(this.state.msg);
  }

  render() {
    return (
      <div>
      <Box>
        <p>{this.state.msg}</p>
      </Box>

      <Box>
        <Button onClick={this.handleClick} variant="contained" color="primary">
          Hello World
        </Button>
      </Box>
      </div>
    );
  }
}

export default QueryOutput
