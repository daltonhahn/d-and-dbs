import React, {Component} from 'react';
import Box from '@material-ui/core/Box';

class Welcome extends Component{
	constructor(props) {
		super(props)
		this.state = {
			welcome_displayed: "flex",
		};
	};

	render() {

	return (
	      <Box display={this.props.welcome_displayed}>
		<p><b>Dungeons and Databases<br/><br/>
		EECS 647 -- Spring 2021<br/><br/>
		Dalton A. Hahn</b></p>
	      </Box>
	);
	}
}

export default Welcome;
