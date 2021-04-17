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

class SpellLookup extends Component {
	constructor(props) {
		super(props);
		this.state = {
			id: '',
			name: '',
			lvl: '',
			school: '',
			classes: {
				checkedBard: false,
				checkedCleric: false,
				checkedDruid: false,
				checkedPaladin: false,
				checkedRanger: false,
				checkedRitualCaster: false,
				checkedSorcerer: false,
				checkedWarlock: false,
				checkedWizard: false,
			},
		};
	};

  handleIDChange = (event) => {
          this.setState({
                  id: event.target.value,
          }, () => this.props.getSpellQuery(this.state));
  };
  handleNameChange = (event) => {
          this.setState({
                  name: event.target.value,
          }, () => this.props.getSpellQuery(this.state));
  };
  handleLvlChange = (event) => {
          this.setState({
                  lvl: event.target.value,
          }, () => this.props.getSpellQuery(this.state));
  };
  handleSchoolChange = (event) => {
          this.setState({
                  school: event.target.value,
          }, () => this.props.getSpellQuery(this.state));
  };

  handleClassesChange = (event) => {
	  let classList = (this.state.classes);
	  switch(event.target.name) {
		  case "checkedBard":
			  if(event.target.checked == true){
				  classList["checkedBard"] = true
				  this.setState({ classes: classList, })
			  }
			  else {
				  classList["checkedBard"] = false
				  this.setState({ classes: classList, })
			  }
			  break;
		  case "checkedCleric":
			  if(event.target.checked == true){
				  classList["checkedCleric"] = true
				  this.setState({ classes: classList, })
			  }
			  else {
				  classList["checkedCleric"] = false
				  this.setState({ classes: classList, })
			  }
			  break;
		  case "checkedDruid":
			  if(event.target.checked == true){
				  classList["checkedDruid"] = true
				  this.setState({ classes: classList, })
			  }
			  else {
				  classList["checkedDruid"] = false
				  this.setState({ classes: classList, })
			  }
			  break;
		  case "checkedPaladin":
			  if(event.target.checked == true){
				  classList["checkedPaladin"] = true
				  this.setState({ classes: classList, })
			  }
			  else {
				  classList["checkedPaladin"] = false
				  this.setState({ classes: classList, })
			  }
			  break;
		  case "checkedRanger":
			  if(event.target.checked == true){
				  classList["checkedRanger"] = true
				  this.setState({ classes: classList, })
			  }
			  else {
				  classList["checkedRanger"] = false
				  this.setState({ classes: classList, })
			  }
			  break;
		  case "checkedRitualCaster":
			  if(event.target.checked == true){
				  classList["checkedRitualCaster"] = true
				  this.setState({ classes: classList, })
			  }
			  else {
				  classList["checkedRitualCaster"] = false
				  this.setState({ classes: classList, })
			  }
			  break;
		  case "checkedSorcerer":
			  if(event.target.checked == true){
				  classList["checkedSorcerer"] = true
				  this.setState({ classes: classList, })
			  }
			  else {
				  classList["checkedSorcerer"] = false
				  this.setState({ classes: classList, })
			  }
			  break;
		  case "checkedWarlock":
			  if(event.target.checked == true){
				  classList["checkedWarlock"] = true
				  this.setState({ classes: classList, })
			  }
			  else {
				  classList["checkedWarlock"] = false
				  this.setState({ classes: classList, })
			  }
			  break;
		  case "checkedWizard":
			  if(event.target.checked == true){
				  classList["checkedWizard"] = true
				  this.setState({ classes: classList, })
			  }
			  else {
				  classList["checkedWizard"] = false
				  this.setState({ classes: classList, })
			  }
			  break;
	  };
	  this.setState({
		  classes: classList,
          }, () => this.props.getSpellQuery(this.state));
  };


  render () {
	const { classes } = this.props;
	  return(
		  <Box display="flex" justifyContent="center">
          <Box  p={1}>
          <br></br>
            <form className={classes.root} noValidate autoComplete="off">
              <Input placeholder="Spell ID" inputProps={{ 'aria-label': 'description' }} value={this.state.id} onChange={this.handleIDChange}/>
            </form>
          </Box>
    <Box p={3}>
      <FormControl className={this.props.classes.formControl}>
        <InputLabel id="demo-simple-select-label"></InputLabel>
        <Select
          name="lvlselect"
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={this.state.lvl}
          onChange={this.handleLvlChange}
        >
          <MenuItem value={''}></MenuItem>
          <MenuItem value={0}>0</MenuItem>
          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={3}>3</MenuItem>
          <MenuItem value={4}>4</MenuItem>
          <MenuItem value={5}>5</MenuItem>
          <MenuItem value={6}>6</MenuItem>
          <MenuItem value={7}>7</MenuItem>
          <MenuItem value={8}>8</MenuItem>
          <MenuItem value={9}>9</MenuItem>
        </Select>
        <FormHelperText>Spell Level</FormHelperText></FormControl>
		  </Box>
		  <Box p={3}>
        <FormControl className={this.props.classes.formControl}>
        <InputLabel id="demo-simple-select-label"></InputLabel>
        <Select
          name="schoolselect"
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={this.state.school}
          onChange={this.handleSchoolChange}
        >
          <MenuItem value={''}></MenuItem>
          <MenuItem value={"Evocation"}>Evocation</MenuItem>
          <MenuItem value={"Conjuration"}>Conjuration</MenuItem>
          <MenuItem value={"Abjuration"}>Abjuration</MenuItem>
          <MenuItem value={"Transmutation"}>Transmutation</MenuItem>
          <MenuItem value={"Enchantment"}>Enchantment</MenuItem>
          <MenuItem value={"Necromancy"}>Necromancy</MenuItem>
          <MenuItem value={"Divination"}>Divination</MenuItem>
          <MenuItem value={"Illusion"}>Illusion</MenuItem>
        </Select>
        <FormHelperText>Spell School</FormHelperText></FormControl>
          </Box>
          <Box p={1}>
          <br></br>
            <form className={this.props.classes.root} noValidate autoComplete="off">
              <Input placeholder="Spell Name" inputProps={{ 'aria-label': 'description' }} value={this.state.name} onChange={this.handleNameChange} />
            </form>
          </Box>
		  <Box p={1}>
    <FormGroup row>
      <FormControlLabel
        control={<Checkbox checked={this.state.checkedBard} onChange={this.handleClassesChange} name="checkedBard" color="primary" />}
        label="Bard"
      />
      <FormControlLabel
        control={<Checkbox checked={this.state.checkedCleric} onChange={this.handleClassesChange} name="checkedCleric" color="primary" />}
        label="Cleric"
      />
      <FormControlLabel
        control={<Checkbox checked={this.state.checkedDruid} onChange={this.handleClassesChange} name="checkedDruid" color="primary" />}
        label="Druid"
      />
      <FormControlLabel
        control={<Checkbox checked={this.state.checkedPaladin} onChange={this.handleClassesChange} name="checkedPaladin" color="primary" />}
        label="Paladin"
      />
      <FormControlLabel
        control={<Checkbox checked={this.state.checkedRanger} onChange={this.handleClassesChange} name="checkedRanger" color="primary" />}
        label="Ranger"
      />
	</FormGroup>
	<FormGroup row>
      <FormControlLabel
        control={<Checkbox checked={this.state.checkedRitualCaster} onChange={this.handleClassesChange} name="checkedRitualCaster" color="primary" />}
        label="Ritual Caster"
      />
      <FormControlLabel
        control={<Checkbox checked={this.state.checkedSorcerer} onChange={this.handleClassesChange} name="checkedSorcerer" color="primary"/>}
        label="Sorcerer"
      />
      <FormControlLabel
        control={<Checkbox checked={this.state.checkedWarlock} onChange={this.handleClassesChange} name="checkedWarlock" color="primary"/>}
        label="Warlock"
      />
      <FormControlLabel
        control={<Checkbox checked={this.state.checkedWizard} onChange={this.handleClassesChange} name="checkedWizard" color="primary" />}
        label="Wizard"
      />
      </FormGroup>
		  </Box>
		  </Box>
	  );
	  }
}  export default withStyles( useStyles ) (SpellLookup);
