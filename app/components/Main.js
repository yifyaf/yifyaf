import React, {Component} from 'react';
import axios from 'axios';
import ArticleList from './ArticleList';


// {this.props.children}
export default class Main extends Component {
	constructor(props) {
		super(props);
		this.state = {
			content: null
		}
	}

	componentDidMount(){
		fetch('http://www.reddit.com/r/collegesluts/new.json?limit=500&after=t31qa3v3&count=10')
		.then(res => res.json())
		.then(data => {
			let MyList = [];

			let responseData = data.data.children;

			console.log(responseData);
			for (let i in responseData) {
				let data_img = responseData[i].data.url;

				if (responseData[i].data.domain == 'i.imgur.com' && data_img.charAt(data_img.length - 1) == 'v') {
					data_img = data_img.slice(0, -1);
				}
				else if (responseData[i].data.domain == 'gfycat.com') {
					data_img = 'http://developers.gfycat.com/api/images/logo.png'
				}

				let top30 = {
					author: responseData[i].data.author,
					img: data_img,
					user_link: 'http://www.reddit.com/user/' + responseData[i].data.author,
					url: responseData[i].data.url,
					title: responseData[i].data.title.toUpperCase()
				}

				MyList.push(top30);

			}

			// console.log(MyList);
			this.setState({content: MyList});
		})
	}

	render() {

		if (this.state.content == null) {
			return (
				<div className='loading'>Loading...</div>
			);
		}

	    return(
	        <div className="list-items">
	        	<ArticleList
	        		items={this.state.content}
	        	/>
	        </div>
	    )
	}
}
