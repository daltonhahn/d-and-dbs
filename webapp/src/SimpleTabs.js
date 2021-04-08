import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
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
          <Typography>{children}</Typography>
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

export function SimpleTabs() {
  const classes = useStyles();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs className={classes.tabGroup} value={value} onChange={handleChange} aria-label="simple tabs example">
          <Tab label="Home" {...a11yProps(0)} />
          <Tab label="Characters" {...a11yProps(1)} />
          <Tab label="Spells" {...a11yProps(2)} />
          <Tab label="Weapons" {...a11yProps(3)} />
          <Tab label="Races" {...a11yProps(4)} />
          <Tab label="Classes" {...a11yProps(5)} />
          <Tab label="Alignments" {...a11yProps(6)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
      </TabPanel>
      <TabPanel value={value} index={1}>
	  <CharacterLookup>
	  </CharacterLookup>
      </TabPanel>
      <TabPanel value={value} index={2}>
        PUT THE SPELLS LOOKUP/LIST HERE 
      </TabPanel>
      <TabPanel value={value} index={3}>
        PUT THE Weapons LOOKUP/LIST HERE 
      </TabPanel>
      <TabPanel value={value} index={4}>
        PUT THE Races LOOKUP/LIST HERE 
      </TabPanel>
      <TabPanel value={value} index={5}>
        PUT THE Classes LOOKUP/LIST HERE 
      </TabPanel>
      <TabPanel value={value} index={6}>
        PUT THE Alignments LOOKUP/LIST HERE 
      </TabPanel>
    </div>
  );
}
export default SimpleTabs;

function CharacterLookup() {
  const classes = useStyles();
  const [lvl, setLvl] = React.useState('');

  const handleLvlChange = (event) => {
    setLvl(event.target.value);
  };


  return (
    <div>
    <Box display="flex" justifyContent="center">
	  <Box p={1}>
	  <br></br>
      <IDInputs>
      </IDInputs>
	  </Box>

    <Box p={3}>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label"></InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={lvl}
          onChange={handleLvlChange}
        >
          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={3}>3</MenuItem>
          <MenuItem value={4}>4</MenuItem>
          <MenuItem value={5}>5</MenuItem>
          <MenuItem value={6}>6</MenuItem>
          <MenuItem value={7}>7</MenuItem>
          <MenuItem value={8}>8</MenuItem>
          <MenuItem value={9}>9</MenuItem>
          <MenuItem value={10}>10</MenuItem>
          <MenuItem value={11}>11</MenuItem>
          <MenuItem value={12}>12</MenuItem>
          <MenuItem value={13}>13</MenuItem>
          <MenuItem value={14}>14</MenuItem>
          <MenuItem value={15}>15</MenuItem>
          <MenuItem value={16}>16</MenuItem>
          <MenuItem value={17}>17</MenuItem>
          <MenuItem value={18}>18</MenuItem>
          <MenuItem value={19}>19</MenuItem>
          <MenuItem value={20}>20</MenuItem>
        </Select>
	<FormHelperText>Character Level</FormHelperText>
      </FormControl>
	  </Box>
	  <Box p={1}>
	  <br></br>
      <NameInputs>
      </NameInputs>
	  </Box>
    </Box>
    <Box display="flex" justifyContent="center" p={1}>
	  <CheckboxLabels>
	  </CheckboxLabels>
    </Box>
    <Box display="flex" justifyContent="center" p={1}>
      <Button variant="contained">Search</Button>
    </Box>
    </div>
  );
}

function NameInputs() {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <Input placeholder="Character Name" inputProps={{ 'aria-label': 'description' }} />
    </form>
  );
}

function IDInputs() {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <Input placeholder="Character ID" inputProps={{ 'aria-label': 'description' }} />
    </form>
  );
}

function CheckboxLabels() {
  const [state, setState] = React.useState({
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <FormGroup row>
      <FormControlLabel
        control={<Checkbox checked={state.checkedA} onChange={handleChange} name="checkedA" />}
        label="Spells"
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={state.checkedB}
            onChange={handleChange}
            name="checkedB"
          />
        }
        label="Weapons"
      />
      <FormControlLabel control={<Checkbox name="checkedC" />} label="Races" />
      <FormControlLabel control={<Checkbox name="checkedD" />} label="Classes" />
      <FormControlLabel control={<Checkbox name="checkedE" />} label="Alignments" />
    </FormGroup>
  );
}
