import React, {Component} from 'react';
import Box from '@material-ui/core/Box';
import SimpleAccordion from './Accordion';

class Filters extends Component{
        constructor(props) {
                super(props)
                this.state = {
                        filter_displayed: "none",
                };
        };

        render() {

        return (
              <Box style={{marginTop: 20, marginBottom: 20}} justifyContent="center" display={this.props.filter_displayed}>
		<SimpleAccordion columns={this.props.columns}/>
              </Box>
        );
        }
}

export default Filters;
