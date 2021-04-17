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
import ItemLookup from './Items';

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
			checkBoxes: {
				checkedA: 'none',
				checkedB: 'none',
				checkedC: 'none',
				checkedD: 'none',
				checkedE: 'none',
				checkedF: 'none',
				checkedG: 'none',
			},
			table_select: { 
				characters: false,
				spells: false,
				weapons: false,
				races: false,
				classes: false,
				alignments: false,
				items: false,
			},
			query: {
				char_query: {},
				spell_query: {},
				weapon_query: {},
				race_query: {},
				class_query: {},
				alignment_query: {},
				item_query: {},
			},
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
	  let query = this.state.query
	  query["char_query"] = data
	  this.setState({
		  query: query,
	  });
  };
  getSpellQuery(data) {
	  let query = this.state.query
	  query["spell_query"] = data
	  this.setState({
		  query: query,
	  });
  };
  getWeaponQuery(data) {
	  let query = this.state.query
	  query["weapon_query"] = data
	  this.setState({
		  query: query,
	  });
  };
  getRaceQuery(data) {
	  let query = this.state.query
	  query["race_query"] = data
	  this.setState({
		  query: query,
	  });
  };
  getClassQuery(data) {
	  let query = this.state.query
	  query["class_query"] = data
	  this.setState({
		  query: query,
	  });
  };
  getAlignmentQuery(data) {
	  let query = this.state.query
	  query["alignment_query"] = data
	  this.setState({
		  query: query,
	  });
  };
  getItemQuery(data) {
	  let query = this.state.query
	  query["item_query"] = data
	  this.setState({
		  query: query,
	  });
  };

  boxChecked(target,data) {
	  let table_select = this.state.table_select
	  let checkBoxes = this.state.checkBoxes
	  switch(target) {
		  case "checkedA":
		  	  table_select = this.state.table_select
	  		  checkBoxes = this.state.checkBoxes
			  if (data == true) { 
			    	  table_select["characters"] = true
				  checkBoxes["checkedA"] = "flex"
				  this.setState({ checkBoxes: checkBoxes, table_select: table_select, })
			  }
			  else { 
			    	  table_select["characters"] = false
				  checkBoxes["checkedA"] = "none"
				  this.setState({ checkBoxes: checkBoxes, table_select: table_select, }) 
			  }
			  break;
		  case "checkedB":
			  table_select = this.state.table_select
	  		  checkBoxes = this.state.checkBoxes
			  if (data == true) { 
			    	  table_select["spells"] = true
	  		  	  checkBoxes["checkedB"] = "flex"
				  this.setState({ checkBoxes: checkBoxes, table_select: table_select, })
			  }
			  else { 
				  table_select["spells"] = false
	  		  	  checkBoxes["checkedB"] = "none"
				  this.setState({ checkBoxes: checkBoxes, table_select: table_select, }) 
			  }
			  break;
		  case "checkedC":
			  table_select = this.state.table_select
	  		  checkBoxes = this.state.checkBoxes
			  if (data == true) { 
				  table_select["weapons"] = true
	  		  	  checkBoxes["checkedC"] = "flex"
				  this.setState({ checkBoxes: checkBoxes, table_select: table_select, })
			  }
			  else { 
				  table_select["weapons"] = false
	  		  	  checkBoxes["checkedC"] = "none"
				  this.setState({ checkBoxes: checkBoxes, table_select: table_select, }) 
			  }
			  break;
		  case "checkedD":
			  table_select = this.state.table_select
	  		  checkBoxes = this.state.checkBoxes
			  if (data == true) { 
				  table_select["races"] = true
	  		  	  checkBoxes["checkedD"] = "flex"
				  this.setState({ checkBoxes: checkBoxes, table_select: table_select, })
			  }
			  else { 
				  table_select["races"] = false
	  		  	  checkBoxes["checkedD"] = "none"
				  this.setState({ checkBoxes:checkBoxes, table_select: table_select, }) 
			  }
			  break;
		  case "checkedE":
			  table_select = this.state.table_select
	  		  checkBoxes = this.state.checkBoxes
			  if (data == true) { 
				  table_select["classes"] = true
	  		  	  checkBoxes["checkedE"] = "flex"
				  this.setState({ checkBoxes: checkBoxes, table_select: table_select, })
			  }
			  else { 
				  table_select["classes"] = false
	  		  	  checkBoxes["checkedE"] = "none"
				  this.setState({ checkBoxes:checkBoxes, table_select: table_select, }) 
			  }
			  break;
		  case "checkedF":
			  table_select = this.state.table_select
	  		  checkBoxes = this.state.checkBoxes
			  if (data == true) { 
				  table_select["alignments"] = true
	  		  	  checkBoxes["checkedF"] = "flex"
				  this.setState({ checkBoxes: checkBoxes, table_select: table_select, })
			  }
			  else { 
				  table_select["alignments"] = false
				  checkBoxes["checkedF"] = "none"
				  this.setState({ checkBoxes:checkBoxes, table_select: table_select, }) 
			  }
			  break;
		  case "checkedG":
			  table_select = this.state.table_select
	  		  checkBoxes = this.state.checkBoxes
			  if (data == true) { 
				  table_select["magicitems"] = true
	  		  	  checkBoxes["checkedG"] = "flex"
				  this.setState({ checkBoxes: checkBoxes, table_select: table_select, })
			  }
			  else { 
				  table_select["magicitems"] = false
				  checkBoxes["checkedG"] = "none"
				  this.setState({ checkBoxes:checkBoxes, table_select: table_select, }) 
			  }
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
	  var getItemQuery = this.getItemQuery;
  return (
    <div>
    <Box display="flex" justifyContent="center" p={1}>
	  <CheckboxLabels boxChecked={boxChecked.bind(this)} />
    </Box>
    <Box display={this.state.checkBoxes["checkedA"]} justifyContent="center">
	  <CharLookup className={classes.boxArray} getCharQuery={getCharQuery.bind(this)} />
	  </Box>
    <Box className={classes.boxArray} display={this.state.checkBoxes["checkedB"]} justifyContent="center">
	  <SpellLookup getSpellQuery={getSpellQuery.bind(this)} />
	  </Box>
    <Box className={classes.boxArray} display={this.state.checkBoxes["checkedC"]} justifyContent="center">
	  <WeapLookup getWeaponQuery={getWeaponQuery.bind(this)} />
	  </Box>
    <Box className={classes.boxArray} display={this.state.checkBoxes["checkedD"]} justifyContent="center">
	  <RaceLookup getRaceQuery={getRaceQuery.bind(this)} />
	  </Box>
    <Box className={classes.boxArray} display={this.state.checkBoxes["checkedE"]} justifyContent="center">
	  <ClassLookup getClassQuery={getClassQuery.bind(this)} />
	  </Box>
    <Box className={classes.boxArray} display={this.state.checkBoxes["checkedF"]} justifyContent="center">
	  <AlignmentLookup getAlignmentQuery={getAlignmentQuery.bind(this)} />
	  </Box>
    <Box className={classes.boxArray} display={this.state.checkBoxes["checkedG"]} justifyContent="center">
	  <ItemLookup getItemQuery={getItemQuery.bind(this)} />
	  </Box>

    <Box display="flex" justifyContent="center" p={1}>
      <Button onClick={() => this.props.handleQuery({tables: this.state.table_select, query: this.state.query})} variant="contained">Search</Button>
    </Box>
    </div>
  );
  }
}  export default withStyles( useStyles ) (Lookup);


class CheckboxLabels extends Component {
	constructor(props){
		super(props);
		this.state = {
			checkBoxes: {
				checkedA: false,
				checkedB: false,
				checkedC: false,
				checkedD: false,
				checkedE: false,
				checkedF: false,
				checkedG: false,
			},
		};
	};

  handleChange = (event) => {
	  let checkBoxes = this.state.checkBoxes;
	  let targetBox = event.target.name
	  let targetVal = event.target.checked
	  checkBoxes[targetBox] = targetVal;
          this.setState({
		  checkBoxes: checkBoxes,
          }, this.props.boxChecked(targetBox,targetVal));
  };

	render () {
  return (
    <FormGroup row>
      <FormControlLabel
        control={<Checkbox checked={this.state.checkBoxes["checkedA"]} onChange={this.handleChange} name="checkedA" />}
        label="Characters"
      />
      <FormControlLabel
        control={<Checkbox checked={this.state.checkBoxes["checkedB"]} onChange={this.handleChange} name="checkedB" />}
        label="Spells"
      />
      <FormControlLabel
        control={<Checkbox checked={this.state.checkBoxes["checkedC"]} onChange={this.handleChange} name="checkedC" />}
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
        control={<Checkbox checked={this.state.checkBoxes["checkedD"]} onChange={this.handleChange} name="checkedD" />}
        control={<Checkbox checked={this.state.checkedD} onChange={this.handleChange} name="checkedD" />}
	label="Races"
      />
      <FormControlLabel 
        control={<Checkbox checked={this.state.checkBoxes["checkedE"]} onChange={this.handleChange} name="checkedE" />}
        control={<Checkbox checked={this.state.checkedE} onChange={this.handleChange} name="checkedE" />}
	label="Classes"
      />
      <FormControlLabel 
        control={<Checkbox checked={this.state.checkBoxes["checkedF"]} onChange={this.handleChange} name="checkedF" />}
	label="Alignments"
      />
      <FormControlLabel 
        control={<Checkbox checked={this.state.checkBoxes["checkedG"]} onChange={this.handleChange} name="checkedG" />}
	label="Magic Items"
      />
    </FormGroup>
  );
	}
}
