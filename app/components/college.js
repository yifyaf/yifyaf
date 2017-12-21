import React, {Component} from 'react';
import { Grid } from 'semantic-ui-react';
import ArticleListItems from './ArticleListItems';
import Pagination from './Pagination';
import helper from '../utils/helper';
import Ad from './Ad';


export default class college extends Component {
	constructor() {
		super();
		this.state = {
			content: null,
			pageOfItems: []
		}
		this.onChangePage = this.onChangePage.bind(this);
	}

	componentDidMount() {
		helper.getContent().then(function(res) {
			this.setState({content: res.data});
		}.bind(this));
	}

	componentDidUpdate () {
	  window.scrollTo(0, 0)
	}

	onChangePage(pageOfItems) {
		this.setState({ pageOfItems });
		console.log('from the parent ', pageOfItems);
	}

	render() {

		if (this.state.content == null) {
			return (
				<div class='loading'>Loading...</div>
			);
		}

		const renderPage = this.state.pageOfItems.map((article, i) => {
			if (i % 3 === 0) {
				return (
					<Ad
						key={i}
						article={article}
					/>
				)
			}
			else {
				return (
					<ArticleListItems
						key={i}
						article={article}
					/>
				)
			}
		});

		return (
			<div>
				<div class='jumbotron'>
					<Grid>
						{renderPage}
					</Grid>
				</div>
				<div class='text-center'>
					<Pagination items={this.state.content} onChangePage={this.onChangePage} />
				</div>
			</div>
		)
	}
}