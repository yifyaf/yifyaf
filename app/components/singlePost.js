import React, {Component} from 'react';
import { Image } from 'semantic-ui-react';
import { Grid, Loader, Dimmer } from 'semantic-ui-react';

export default class singlePost extends Component {
	render() {

		return (
			<div>
				<div class='singleImage'>
					<Image src='https://i.imgur.com/2BBjQ4X.jpg' class="fluid image"/>
				</div>
			</div>
		)
	}
}