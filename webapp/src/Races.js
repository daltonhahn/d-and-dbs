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

class RaceLookup extends Component {
	constructor(props) {
		super(props);
		this.state = {
			id: '',
			name: '',
		};
	};

  handleNameChange = (event) => {
	  event.preventDefault();
          this.setState({
                  name: event.target.value,
          }, () => this.props.getRaceQuery(this.state));
  };

  handleIDChange = (event) => {
	  event.preventDefault();
          this.setState({
                  id: event.target.value,
          }, () => this.props.getRaceQuery(this.state));
  };

  render () {
	const { classes } = this.props;
	  return(
		  <Box display="flex" justifyContent="center">
          <Box  p={1}>
          <br></br>
            <form className={classes.root} noValidate autoComplete="off">
              <Input placeholder="Race ID" inputProps={{ 'aria-label': 'description' }} value={this.state.id} onChange={this.handleIDChange}/>
            </form>
          </Box>
    <Box p={3}>
      <FormControl className={this.props.classes.formControl}>
        <InputLabel id="demo-simple-select-label"></InputLabel>
        <Select
          name="nameselect"
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={this.state.name}
          onChange={this.handleNameChange}
        >
          <MenuItem value={''}></MenuItem>
          <MenuItem value={"Dwarf"}>Dwarf</MenuItem>
          <MenuItem value={"Elf"}>Elf</MenuItem>
          <MenuItem value={"Halfling"}>Halfling</MenuItem>
          <MenuItem value={"Human"}>Human</MenuItem>
          <MenuItem value={"Dragonborn"}>Dragonborn</MenuItem>
          <MenuItem value={"Gnome"}>Gnome</MenuItem>
          <MenuItem value={"Half-Elf"}>Half-Elf</MenuItem>
          <MenuItem value={"Half-Orc"}>Half-Orc</MenuItem>
          <MenuItem value={"Tiefling"}>Tiefling</MenuItem>
        </Select>
        <FormHelperText>Race Name</FormHelperText>
      </FormControl>
          </Box>    
  		  </Box>
	  );
	  }
}  export default withStyles( useStyles ) (RaceLookup);
