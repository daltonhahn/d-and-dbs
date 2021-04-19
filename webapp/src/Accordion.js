import React, { Component } from 'react';
import { withStyles,makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Checkbox from '@material-ui/core/Checkbox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import Box from '@material-ui/core/Box';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '50%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

class SimpleAccordion extends Component {
	constructor(props) {
		super(props)
		this.state = {
			checkList: [],
		};
	};

  componentDidUpdate(prevProps) {
	  if (this.props.columns !== prevProps.columns) {
		  var tempList = this.state.checkList;
		  console.log(this.props.columns);
		  for (var col in this.props.columns) {
			  //console.log(tempList.some(r => Object.keys(r)[0] === [col.Header]));
			  //if (!(tempList.some(r => Object.keys(r)[0] === col.Header))) {
				  tempList.push({[col.Header]: false});
			  //}
		  }
		  this.setState({checkList: tempList});
	  }
  };

  handleChange = (event) => {
    var tempList = this.state.checkList;
    var targetIndex =  this.state.checkList.findIndex(r => Object.keys(r)[0] == event.target.name);
    var targetAttr = Object.keys(tempList[targetIndex])[0]
    tempList[targetIndex] = {[targetAttr]: event.target.checked};
    this.setState({checkList: tempList});
    console.log(tempList);
  };

	render() {
  const { classes } = this.props;
  return (
    <div className={classes.root}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>Search Filters</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
	      {this.props.columns.map((col) => (
		      <FormControlLabel
			control={<Checkbox checked={this.state.checkList[col.Header]} onChange={this.handleChange} name={col.Header} />}
			label={col.Header}
		      />
	      ))}
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
	}
} export default withStyles(useStyles) (SimpleAccordion);

/*
		  <TableBody className={classes.tabResults}>
		{rows.map((row, i) => {
		  prepareRow(row)
		  return (
		    <TableRow {...row.getRowProps()}>
		      {row.cells.map(cell => {
			return (
			  <TableCell {...cell.getCellProps()}>
			    {cell.render('Cell')}
			  </TableCell>
			)
		      })}
		    </TableRow>
		  )
		})}
	      </TableBody>


*/
