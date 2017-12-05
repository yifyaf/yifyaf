import React, {Component} from 'react';
import axios from 'axios';
import ArticleList from './ArticleList';
import helper from '../utils/helper';


// {this.props.children}
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
	        <div class="list-items">
	        	<ArticleList
	        		items={this.state.content}
	        	/>
	        </div>
	    )
	}
}
