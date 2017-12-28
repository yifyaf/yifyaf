import React, {Component} from 'react';
import ReactPlayer from 'react-player';
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
				<ReactPlayer url='https://out.reddit.com/t3_7mj8g6?url=https%3A%2F%2Fwww.pornhub.com%2Fview_video.php%3Fviewkey%3Dph59881c8786e31&token=AQAAjn1EWj5r3k7_dbQpXB1t4kD3emDH8ZbZDHZcfj9ilXvGQMIB&app_name=reddit.com' playing />
				{this.state.content.url}
			</div>
		)
	}
}