import React, { Component } from 'react';
import Box from '@material-ui/core/Box';
import Button from "@material-ui/core/Button";
import ReactMarkdown from 'react-markdown';

var gfm = require('remark-gfm')


function QueryOutput(props) {
	return (
	      <Box>
		<ReactMarkdown plugins={[gfm]} source={props.data} />
	      </Box>
	);
}

export default QueryOutput;
