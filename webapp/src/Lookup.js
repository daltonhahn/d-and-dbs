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
import CharLookup from './Characters';
import SpellLookup from './Spells';
import WeapLookup from './Weapons';
import RaceLookup from './Races';
import ClassLookup from './Classes';
import AlignmentLookup from './Alignments';

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

class Lookup extends Component {
	constructor(props) {
		super(props)
		this.state = {
			checkedA: 'none',
			checkedB: 'none',
			checkedC: 'none',
			checkedD: 'none',
			checkedE: 'none',
			checkedF: 'none',
			char_query: '',
			spell_query: '',
			weapons_query: '',
			races_query: '',
			classes_query: '',
			alignments_query: '',
			query: '',
		};
		var boxChecked = this.boxChecked.bind(this);
		var getCharQuery = this.getCharQuery.bind(this);
		var getSpellQuery = this.getSpellQuery.bind(this);
		var getWeaponQuery = this.getWeaponQuery.bind(this);
		var getRaceQuery = this.getRaceQuery.bind(this);
		var getClassQuery = this.getClassQuery.bind(this);
		var getAlignmentQuery = this.getAlignmentQuery.bind(this);
	};

  forceFresh = () => {
	  this.setState({
		  query: ("".concat(this.state.char_query,this.state.spell_query,this.state.weapons_query,this.state.races_query,
			this.state.classes_query,this.state.alignments_query))
	  });
  };

  getCharQuery(data) {
	  this.setState({
		  char_query: data,
		  query: ''.concat(data,this.state.spell_query,this.state.weapons_query,this.state.races_query,this.state.classes_query,this.state.alignments_query)
	  }, () => this.forceFresh());
  };
  getSpellQuery(data) {
	  this.setState({
		  spell_query: data,
		  query: ''.concat(this.state.char_query,data,this.state.weapons_query,this.state.races_query,this.state.classes_query,this.state.alignments_query)
	  }, () => this.forceFresh());
  };
  getWeaponQuery(data) {
	  this.setState({
		  weapons_query: data,
		  query: ''.concat(this.state.char_query,data,this.state.weapons_query,this.state.races_query,this.state.classes_query,this.state.alignments_query)
	  }, () => this.forceFresh());
  };
  getRaceQuery(data) {
	  this.setState({
		  races_query: data,
		  query: ''.concat(this.state.char_query,data,this.state.weapons_query,this.state.races_query,this.state.classes_query,this.state.alignments_query)
	  }, () => this.forceFresh());
  };
  getClassQuery(data) {
	  this.setState({
		  classes_query: data,
		  query: ''.concat(this.state.char_query,data,this.state.weapons_query,this.state.races_query,this.state.classes_query,this.state.alignments_query)
	  }, () => this.forceFresh());
  };
  getAlignmentQuery(data) {
	  this.setState({
		  alignments_query: data,
		  query: ''.concat(this.state.char_query,data,this.state.weapons_query,this.state.races_query,this.state.classes_query,this.state.alignments_query)
	  }, () => this.forceFresh());
  };

  boxChecked(target,data) {
	  switch(target) {
		  case "checkedA":
			  if (data == true) { this.setState({ checkedA: "flex", })}
			  else { this.setState({ checkedA: "none", }) }
			  break;
		  case "checkedB":
			  if (data == true) { this.setState({ checkedB: "flex", })}
			  else { this.setState({ checkedB: "none", }) }
			  break;
		  case "checkedC":
			  if (data == true) { this.setState({ checkedC: "flex", })}
			  else { this.setState({ checkedC: "none", }) }
			  break;
		  case "checkedD":
			  if (data == true) { this.setState({ checkedD: "flex", })}
			  else { this.setState({ checkedD: "none", }) }
			  break;
		  case "checkedE":
			  if (data == true) { this.setState({ checkedE: "flex", })}
			  else { this.setState({ checkedE: "none", }) }
			  break;
		  case "checkedF":
			  if (data == true) { this.setState({ checkedF: "flex", })}
			  else { this.setState({ checkedF: "none", }) }
			  break;
		  default:
			  console.log("Not valid");
	  }
  };

  render() {
	  const { classes } = this.props;
	  var boxChecked = this.boxChecked;
	  var getCharQuery = this.getCharQuery;
	  var getSpellQuery = this.getSpellQuery;
	  var getWeaponQuery = this.getWeaponQuery;
	  var getRaceQuery = this.getRaceQuery;
	  var getClassQuery = this.getClassQuery;
	  var getAlignmentQuery = this.getAlignmentQuery;
  return (
    <div>
    <Box display="flex" justifyContent="center" p={1}>
	  <CheckboxLabels boxChecked={boxChecked.bind(this)} />
    </Box>
    <Box display={this.state.checkedA} justifyContent="center">
	  <CharLookup className={classes.boxArray} getCharQuery={getCharQuery.bind(this)} />
	  </Box>
    <Box className={classes.boxArray} display={this.state.checkedB} justifyContent="center">
	  <SpellLookup getSpellQuery={getSpellQuery.bind(this)} />
	  </Box>
    <Box className={classes.boxArray} display={this.state.checkedC} justifyContent="center">
	  <WeapLookup getWeaponQuery={getWeaponQuery.bind(this)} />
	  </Box>
    <Box className={classes.boxArray} display={this.state.checkedD} justifyContent="center">
	  <RaceLookup getRaceQuery={getRaceQuery.bind(this)} />
	  </Box>
    <Box className ={classes.boxArray} display={this.state.checkedE} justifyContent="center">
	  <ClassLookup getClassQuery={getClassQuery.bind(this)} />
	  </Box>
    <Box className={classes.boxArray} display={this.state.checkedF} justifyContent="center">
	  <AlignmentLookup getAlignmentQuery={getAlignmentQuery.bind(this)} />
	  </Box>

    <Box display="flex" justifyContent="center" p={1}>
      <Button onClick={() => this.props.handleQuery(this.state.query)} variant="contained">Search</Button>
    </Box>
    </div>
  );
  }
}  export default withStyles( useStyles ) (Lookup);


class CheckboxLabels extends Component {
	constructor(props){
		super(props);
		this.state = {
			checkedA: false,
			checkedB: false,
			checkedC: false,
			checkedD: false,
			checkedE: false,
			checkedF: false,
		};
	};

  handleChange = (event) => {
          this.setState({
		  [event.target.name]: event.target.checked,
          }, this.props.boxChecked(event.target.name,event.target.checked));
  };

	render () {
  return (
    <FormGroup row>
      <FormControlLabel
        control={<Checkbox checked={this.state.checkedA} onChange={this.handleChange} name="checkedA" />}
        label="Characters"
      />
      <FormControlLabel
        control={<Checkbox checked={this.state.checkedB} onChange={this.handleChange} name="checkedB" />}
        label="Spells"
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={this.state.checkedC}
            onChange={this.handleChange}
            name="checkedC"
          />
        }
        label="Weapons"
      />
      <FormControlLabel 
        control={<Checkbox checked={this.state.checkedD} onChange={this.handleChange} name="checkedD" />}
	label="Races"
      />
      <FormControlLabel 
        control={<Checkbox checked={this.state.checkedE} onChange={this.handleChange} name="checkedE" />}
	label="Classes"
      />
      <FormControlLabel 
        control={<Checkbox checked={this.state.checkedF} onChange={this.handleChange} name="checkedF" />}
	label="Alignments"
      />
    </FormGroup>
  );
	}
}
