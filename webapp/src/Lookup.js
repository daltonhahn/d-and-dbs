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
	  });
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
  return (
    <div>
    <Box display="flex" justifyContent="center" p={1}>
	  <CheckboxLabels boxChecked={boxChecked.bind(this)} />
    </Box>
    <Box display={this.state.checkedA} justifyContent="center" p={5}>
	  <CharLookup getCharQuery={getCharQuery.bind(this)} />
	  </Box>
    <Box display={this.state.checkedB} justifyContent="center" p={5}>
	  <SpellLookup getSpellQuery={getSpellQuery.bind(this)} />
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
