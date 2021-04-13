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

class WeapLookup extends Component {
	constructor(props) {
		super(props);
		this.state = {
			type: '',
			id: '',
			name: '',
			dmg: '',
			query: '%weapons&id=&type=&dmg=&name=',
		};
	};

  handleTypeChange = (event) => {
	  event.preventDefault();
          this.setState({
                  type: event.target.value,
                  query: "".concat("%weapons&id=",this.state.id,"&type=",event.target.value,"&dmg=",this.state.dmg,"&name=",this.state.name),
          }, this.props.getWeaponQuery("".concat("%weapons&id=",this.state.id,"&type=",event.target.value,"&dmg=",this.state.dmg,"&name=",this.state.name)));
  };

  handleIDChange = (event) => {
	  event.preventDefault();
          this.setState({
                  id: event.target.value,
                  query: "".concat("%weapons&id=",event.target.value,"&type=",this.state.type,"&dmg=",this.state.dmg,"&name=",this.state.name),
          }, this.props.getWeaponQuery("".concat("%weapons&id=",event.target.value,"&type=",this.state.type,"&dmg=",this.state.dmg,"&name=",this.state.name)));
  };

  handleNameChange = (event) => {
	  event.preventDefault();
          this.setState({
                  name: event.target.value,
                  query: "".concat("%weapons&id=",this.state.id,"&type=",this.state.type,"&dmg=",this.state.dmg,"&name=",event.target.value),
          }, this.props.getWeaponQuery("".concat("%weapons&id=",this.state.id,"&type=",this.state.type,"&dmg=",this.state.dmg,"&name=",event.target.value)));
  };

  handleDmgChange = (event) => {
	  event.preventDefault();
          this.setState({
                  dmg: event.target.value,
                  query: "".concat("%weapons&id=",this.state.id,"&type=",this.state.type,"&dmg=",event.target.value,"&name=",this.state.name),
          }, this.props.getWeaponQuery("".concat("%weapons&id=",this.state.id,"&type=",this.state.type,"&dmg=",event.target.value,"&name=",this.state.name)));
  };

  render () {
	const { classes } = this.props;
	  return(
		  <Box display="flex" justifyContent="center">
          <Box  p={1}>
          <br></br>
            <form className={classes.root} noValidate autoComplete="off">
              <Input placeholder="Weapon ID" inputProps={{ 'aria-label': 'description' }} value={this.state.id} onChange={this.handleIDChange}/>
            </form>
          </Box>
    <Box p={3}>
      <FormControl className={this.props.classes.formControl}>
        <InputLabel id="demo-simple-select-label"></InputLabel>
        <Select
          name="lvlselect"
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={this.state.type}
          onChange={this.handleTypeChange}
        >
          <MenuItem value={''}></MenuItem>
          <MenuItem value={"Simple Melee"}>Simple Melee</MenuItem>
          <MenuItem value={"Simple Ranged"}>Simple Ranged</MenuItem>
          <MenuItem value={"Martial Melee"}>Martial Melee</MenuItem>
          <MenuItem value={"Martial Ranged"}>Martial Ranged</MenuItem>
        </Select>
        <FormHelperText>Weapon Type</FormHelperText>
      </FormControl>
          </Box>    
      <Box p={3}>
      <FormControl className={this.props.classes.formControl}>
        <InputLabel id="demo-simple-select-label"></InputLabel>
        <Select
          name="dmgselect"
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={this.state.dmg}
          onChange={this.handleDmgChange}
        >
          <MenuItem value={''}></MenuItem>
          <MenuItem value={"0"}>0</MenuItem>
          <MenuItem value={"1"}>1</MenuItem>
          <MenuItem value={"1d4"}>1d4</MenuItem>
          <MenuItem value={"1d6"}>1d6</MenuItem>
          <MenuItem value={"1d8"}>1d8</MenuItem>
          <MenuItem value={"1d10"}>1d10</MenuItem>
          <MenuItem value={"1d12"}>1d12</MenuItem>
          <MenuItem value={"2d6"}>2d6</MenuItem>
        </Select>
        <FormHelperText>Weapon Damage</FormHelperText>
      </FormControl>
          </Box>
          <Box p={1}>
          <br></br>
            <form className={this.props.classes.root} noValidate autoComplete="off">
              <Input placeholder="Weapon Name" inputProps={{ 'aria-label': 'description' }} value={this.state.name} onChange={this.handleNameChange} />
            </form>
          </Box>
		  </Box>
	  );
	  }
}  export default withStyles( useStyles ) (WeapLookup);
