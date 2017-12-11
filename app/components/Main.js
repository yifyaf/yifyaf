import React, {Component} from 'react';
import helper from '../utils/helper';
import Pagination from './Pagination';

export default class Main extends Component {
	constructor(props) {
		super(props);
		this.state = {
			content: null,
			pageOfItems: []
		}
		this.onChangePage = this.onChangePage.bind(this);
	}

	componentDidMount() {
		helper.getContent().then(function(res) {
			console.log(res.data);
			this.setState({content: res.data});
		}.bind(this));
	}

	onChangePage(pageOfItems) {
		this.setState({ pageOfItems: pageOfItems});
	}

	render() {

		if (this.state.content == null) {
			return (
				<div class='loading'>Loading...</div>
			);
		}

	    return(
	    	<div>
	        	<ArticleList
	        		items={this.state.content}
	        	/>
        		<Pagination items={this.state.content} onChangePage={this.onChangePage} />
        	</div>
	    )
	}
}
