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
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormLabel from '@material-ui/core/FormLabel';

import CharUpdate from './CharactersUpdate';
import SpellUpdate from './SpellsUpdate';
import WeapUpdate from './WeaponsUpdate';
import RaceUpdate from './RacesUpdate';
import ClassUpdate from './ClassesUpdate';
import AlignmentUpdate from './AlignmentsUpdate';
import ItemUpdate from './ItemsUpdate';

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

class Update extends Component {
	constructor(props) {
		super(props)
		this.state = {
			checkedA: 'none',
			checkedB: 'none',
			checkedC: 'none',
			checkedD: 'none',
			checkedE: 'none',
			checkedF: 'none',
			checkedG: 'none',
			table: '',
			query: '',
		};
		var boxChecked = this.boxChecked.bind(this);
		var getCharQuery = this.getCharQuery.bind(this);
		var getSpellQuery = this.getSpellQuery.bind(this);
		var getWeaponQuery = this.getWeaponQuery.bind(this);
		var getRaceQuery = this.getRaceQuery.bind(this);
		var getClassQuery = this.getClassQuery.bind(this);
		var getAlignmentQuery = this.getAlignmentQuery.bind(this);
		var getItemQuery = this.getItemQuery.bind(this);
	};

  getCharQuery(data) {
	  this.setState({
		  query: data,

	  });
  };
  getSpellQuery(data) {
	  this.setState({
		  query: data,
	  });
  };
  getWeaponQuery(data) {
	  this.setState({
		  query: data,
	  });
  };
  getRaceQuery(data) {
	  this.setState({
		  query: data,
	  });
  };
  getClassQuery(data) {
	  this.setState({
		  query: data,
	  });
  };
  getAlignmentQuery(data) {
	  this.setState({
		  query: data,
	  });
  };
  getItemQuery(data) {
	  this.setState({
		  query: data,
	  });
  };

  boxChecked(data) {
	  switch(data) {
		  case "checkedA":
			  this.setState({ 
				  checkedA: "flex",
				  checkedB: "none",
				  checkedC: "none",
				  checkedD: "none",
				  checkedE: "none",
				  checkedF: "none",
				  checkedG: "none",
				  table: 'characters',
				  query: '',
			  });
			  break;
		  case "checkedB":
			  this.setState({ 
				  checkedA: "none",
				  checkedB: "flex",
				  checkedC: "none",
				  checkedD: "none",
				  checkedE: "none",
				  checkedF: "none",
				  checkedG: "none",
				  table: 'spells',
				  query: '',
			  });
			  break;
		  case "checkedC":
			  this.setState({ 
				  checkedA: "none",
				  checkedB: "none",
				  checkedC: "flex",
				  checkedD: "none",
				  checkedE: "none",
				  checkedF: "none",
				  checkedG: "none",
				  table: 'weapons',
				  query: '',
			  });
			  break;
		  case "checkedD":
			  this.setState({ 
				  checkedA: "none",
				  checkedB: "none",
				  checkedC: "none",
				  checkedD: "flex",
				  checkedE: "none",
				  checkedF: "none",
				  checkedG: "none",
				  table: 'races',
				  query: '',
			  });
			  break;
		  case "checkedE":
			  this.setState({ 
				  checkedA: "none",
				  checkedB: "none",
				  checkedC: "none",
				  checkedD: "none",
				  checkedE: "flex",
				  checkedF: "none",
				  checkedG: "none",
				  table: 'classes',
				  query: '',
			  });
			  break;
		  case "checkedF":
			  this.setState({ 
				  checkedA: "none",
				  checkedB: "none",
				  checkedC: "none",
				  checkedD: "none",
				  checkedE: "none",
				  checkedF: "flex",
				  checkedG: "none",
				  table: 'alignments',
				  query: '',
			  });
			  break;
		  case "checkedG":
			  this.setState({ 
				  checkedA: "none",
				  checkedB: "none",
				  checkedC: "none",
				  checkedD: "none",
				  checkedE: "none",
				  checkedF: "none",
				  checkedG: "flex",
				  table: 'magicitems',
				  query: '',
			  });
			  break;
		  default:
			  console.log("Not valid");
			  break;
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
	  var getItemQuery = this.getItemQuery;
  return (
    <div>
    <Box display="flex" justifyContent="center" p={1}>
	  <RadioButtonsGroup boxChecked={boxChecked.bind(this)} />
    </Box>
    <Box display={this.state.checkedA} justifyContent="center" >
	  <CharUpdate getCharQuery={getCharQuery.bind(this)} />
	  </Box>
    <Box display={this.state.checkedB} justifyContent="center" >
	  <SpellUpdate getSpellQuery={getSpellQuery.bind(this)} />
	  </Box>
    <Box display={this.state.checkedC} justifyContent="center" >
	  <WeapUpdate getWeaponQuery={getWeaponQuery.bind(this)} />
	  </Box>
    <Box display={this.state.checkedD} justifyContent="center" >
	  <RaceUpdate getRaceQuery={getRaceQuery.bind(this)} />
	  </Box>
    <Box display={this.state.checkedE} justifyContent="center" >
	  <ClassUpdate getClassQuery={getClassQuery.bind(this)} />
	  </Box>
    <Box display={this.state.checkedF} justifyContent="center" >
	  <AlignmentUpdate getAlignmentQuery={getAlignmentQuery.bind(this)} />
	  </Box>
    <Box display={this.state.checkedG} justifyContent="center" >
	  <ItemUpdate getItemQuery={getItemQuery.bind(this)} />
	  </Box>
    <Box display="flex" justifyContent="center" p={1}>
      <Button onClick={() => this.props.handleUpdate({table: this.state.table, query: this.state.query})} variant="contained">Insert/Update</Button>
    </Box>
    </div>
  );
  }
}  export default withStyles( useStyles ) (Update);


class RadioButtonsGroup extends Component {
	constructor(props){
		super(props);
		this.state = {
			value: '',
		};
	};
  handleChange = (event) => {
          this.setState({
		  value: event.target.value,
          }, this.props.boxChecked(event.target.value));
  };


	render () {
  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">Table to Update/Insert</FormLabel>
      <RadioGroup row aria-label="table" name="table" value={this.value} onChange={this.handleChange}>
        <FormControlLabel value="checkedA" control={<Radio />} label="Characters" />
        <FormControlLabel value="checkedB" control={<Radio />} label="Spells" />
        <FormControlLabel value="checkedC" control={<Radio />} label="Weapons" />
        <FormControlLabel value="checkedD" control={<Radio />} label="Races" />
        <FormControlLabel value="checkedE" control={<Radio />} label="Classes" />
        <FormControlLabel value="checkedF" control={<Radio />} label="Alignments" />
        <FormControlLabel value="checkedG" control={<Radio />} label="Magic Items" />
      </RadioGroup>
    </FormControl>
  );
	}
}
