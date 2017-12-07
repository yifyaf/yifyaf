import React, {Component} from 'react';
import ArticleList from './ArticleList';
import helper from '../utils/helper';

export default class Main extends Component {
	constructor(props) {
		super(props);
		this.state = {
			content: null
		}
	}

	componentDidMount() {
		helper.getContent().then(function(res) {
			console.log(res.data);
			this.setState({content: res.data});
		}.bind(this));
	}

	render() {

		if (this.state.content == null) {
			return (
				<div class='loading'>Loading...</div>
			);
		}

	    return(
	        <div class="grid">
	        	<ArticleList
	        		items={this.state.content}
	        	/>
	        </div>
	    )
	}
}
