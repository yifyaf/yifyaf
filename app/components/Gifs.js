import React, {Component} from 'react';
import { Grid } from 'semantic-ui-react';
import ItemsGif from './ItemsGif';
import Pagination from './Pagination';
import helper from '../utils/helper';
import AdGif from './AdGif';

export default class Vr extends Component {
	constructor() {
		super();
		this.state = {
			content: null,
			pageOfItems: []
		}
		this.onChangePage = this.onChangePage.bind(this);
	}

	componentDidMount() {
		helper.getGifs().then(function(res) {
			this.setState({content: res.data});
			console.log(res);
		}.bind(this));
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

		const renderPage = this.state.content.map((article, i) => {
			if (i % 3 === 0) {
				return (
					<AdGif
						key={i}
						article={article}
					/>
				)
			}
			else {
				return (
					<ItemsGif
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
				<Pagination items={this.state.content} onChangePage={this.onChangePage} />
			</div>
		)
	}
}