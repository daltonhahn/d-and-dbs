import React, { Component,useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { withStyles,makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import CharacterLookup from './CharacterLookup';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{props.children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

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

class SimpleTabs extends Component {
	constructor(props){
		super(props);
		this.state = {
			query: "",
			Tabvalue: 0,
		};
		var handleQuery = this.handleQuery.bind(this);
	};

  handleValueChange = (event, value) => {
          this.setState({...this.state,
                  Tabvalue: value,
          })
          console.log(this.state);
  };

  handleQuery(data)  {
	  this.setState({query: data });
	  this.props.sendQuery(data);
  }



  render() {
	  const { classes } = this.props;
	  const { Tabvalue } = this.state;
	  var handleQuery = this.handleQuery;
	  let value = Tabvalue;
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs className={classes.tabGroup} value={value} onChange={this.handleValueChange} aria-label="simple tabs example">
          <Tab label="Home" {...a11yProps(0)} />
          <Tab label="Characters" {...a11yProps(1)} />
          <Tab label="Spells" {...a11yProps(2)} />
          <Tab label="Weapons" {...a11yProps(3)} />
          <Tab label="Races" {...a11yProps(4)} />
          <Tab label="Classes" {...a11yProps(5)} />
          <Tab label="Alignments" {...a11yProps(6)} />
        </Tabs>
      </AppBar>
      {value === 0 && <TabPanel>
	  <b>EECS 647 -- Dungeons and Databases</b>
      </TabPanel>}
      {value === 1 && <TabPanel>
	  <CharacterLookup handleQuery={handleQuery.bind(this)}>
	  </CharacterLookup>
      </TabPanel>}
      {value === 2 && <TabPanel>
        PUT THE SPELLS LOOKUP/LIST HERE 
      </TabPanel>}
      {value === 3 && <TabPanel>
        PUT THE Weapons LOOKUP/LIST HERE 
      </TabPanel>}
      {value === 4 && <TabPanel>
        PUT THE Races LOOKUP/LIST HERE 
      </TabPanel>}
      {value === 5 && <TabPanel>
        PUT THE Classes LOOKUP/LIST HERE 
      </TabPanel>}
      {value === 6 && <TabPanel>
        PUT THE Alignments LOOKUP/LIST HERE 
      </TabPanel>}
    </div>
  );
  }
}
export default withStyles(useStyles) (SimpleTabs);
