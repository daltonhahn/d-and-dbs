import React, { Component } from 'react';
import Box from '@material-ui/core/Box';
import Button from "@material-ui/core/Button";
import ReactMarkdown from 'react-markdown';

var gfm = require('remark-gfm')


function QueryOutput(props) {
	return (
	      <Box>
		<p><b>{props.columns}</b></p>
		<p>{props.data}</p>
	      </Box>
	);
}

export default QueryOutput;
