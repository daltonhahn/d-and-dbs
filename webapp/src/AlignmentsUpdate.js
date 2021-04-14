import React, { Component,useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { withStyles,makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import TextField from '@material-ui/core/TextField';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  tabGroup: {
    backgroundColor: theme.palette.secondary.light,
  },
}));

class AlignmentUpdate extends Component {
	constructor(props) {
		super(props);
		this.state = {
			id: '',
			name: '',
			query: '%alignments&id=&name=',
		};
	};

  handleIDChange = (event) => {
	  event.preventDefault();
          this.setState({
                  id: event.target.value,
                  query: "".concat("%alignments&id=",event.target.value,"&name=",this.state.name),
          }, this.props.getAlignmentQuery("".concat("%alignments&id=",event.target.value,"&name=",this.state.name)));
  };

  handleNameChange = (event) => {
	  event.preventDefault();
          this.setState({
                  name: event.target.value,
                  query: "".concat("%alignments&id=",this.state.id,"&name=",event.target.value),
	  }, this.props.getAlignmentQuery("".concat("%alignments&id=",this.state.id,"&name=",event.target.value)));
  };

  render () {
	const { classes } = this.props;
	  return(
		  <Box display="flex" justifyContent="center">
          <Box  p={1}>
          <br></br>
            <form className={classes.root} noValidate autoComplete="off">
              <Input placeholder="Alignment ID (Optional) " inputProps={{ 'aria-label': 'description' }} value={this.state.id} onChange={this.handleIDChange}/>
            </form>
          </Box>
          <Box  p={1}>
          <br></br>
            <form className={classes.root} noValidate autoComplete="off">
              <Input placeholder="Alignment Name " inputProps={{ 'aria-label': 'description' }} value={this.state.name} onChange={this.handleNameChange}/>
            </form>
          </Box>
        </Box>
	  );
	  }
}  export default withStyles( useStyles ) (AlignmentUpdate);
