import React, {Component} from 'react';
import { Player } from 'video-react';
import helper from '../utils/helper';
import AdGif from './AdGif';
// import 'react-html5video/dist/styles.css';

export default class Test extends Component {
	constructor() {
		super();
		this.state = {
			content: null
		}
	}

	componentDidMount() {
		console.log('the testing script tags');
		helper.getVideos().then(function(res) {
			this.setState({content: res.data});
			console.log(res.data);
		}.bind(this));
	}

	render() {

		if (this.state.content == null) {
			return (
				<div class='loading'>Loading...</div>
			);
		}

		return (
			<div>
				<iframe
					src={this.state.content.video.embed_url}
					frameborder="0"
					width="560"
					height="315"
					scrolling="no"
					allowfullscreen>
				</iframe>
		    </div>
		)
	}
}