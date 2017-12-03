import React, { PropTypes } from 'react';
import { Link, browserHistory } from 'react-router';
import { Card, Flag, Segment, Grid, Image, Divider, Button } from 'semantic-ui-react';
import axios from 'axios';


class Result extends React.Component {

	constructor(props) {
		super(props);
	}


	render() {
		return(
			<Segment padded>
				<Grid>
				<Grid.Column width={5}>
				<Image src={this.props.author} />
				</Grid.Column>
				<Grid.Column width={8}>
				<h1>{this.props.author}</h1>
				<Divider horizontal></Divider>
				{this.props.author}
				</Grid.Column>
				<Grid.Column width={3}>
				<h6>{this.props.author}</h6>
				</Grid.Column>
				</Grid>
			</Segment>
		)
	}
}

Result.contextTypes = {
	router: PropTypes.object.isRequired
};

export default Result;