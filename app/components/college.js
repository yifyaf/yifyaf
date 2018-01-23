import React, {Component} from 'react';
import { Grid, Loader, Dimmer } from 'semantic-ui-react';
import Modal from 'react-modal';
import ArticleListItems from './ArticleListItems';
import Pagination from './Pagination';
import helper from '../utils/helper';
import Ad from './Ad';


export default class college extends Component {
	constructor() {
		super();
		this.state = {
			content: null,
			pageOfItems: [],
			modalIsOpen: false
		}
		this.onChangePage = this.onChangePage.bind(this);
		this.openModal = this.openModal.bind(this);
		this.afterOpenModal = this.afterOpenModal.bind(this);
		this.closeModal = this.closeModal.bind(this);
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

	openModal() {
		this.setState({modalIsOpen: true});
	}

	closeModal() {
		this.setState({modalIsOpen: false});
	}

	afterOpenModal() {
		this.subtitle.style.color = '#f00';
	}

	render() {

		if (this.state.content == null) {
			return (
				<Dimmer active inverted>
					<Loader active inline='centered' size='large' >Loading</Loader>
				</Dimmer>
			);
		}

		const customStyles = {
		  content : {
		    top                   : '50%',
		    left                  : '50%',
		    right                 : 'auto',
		    bottom                : 'auto',
		    marginRight           : '-50%',
		    transform             : 'translate(-50%, -50%)'
		  }
		};

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
				<button onClick={this.openModal}>Open Modal</button>
				<Modal
					isOpen={this.state.modalIsOpen}
					onAfterOpen={this.afterOpenModal}
					onRequestClose={this.closeModal}
					style={customStyles}
					contentLabel="example Modal"
				>
					<h2 ref={subtitle => this.subtitle = subtitle}>Hello</h2>
			          <button onClick={this.closeModal}>close</button>
			          <div>I am a modal</div>
			          <form>
			            <input />
			            <button>tab navigation</button>
			            <button>stays</button>
			            <button>inside</button>
			            <button>the modal</button>
			          </form>
       			 </Modal>
				<div class='grid'>
						{renderPage}
				</div>
				<div class='text-center'>
					<Pagination items={this.state.content} onChangePage={this.onChangePage} />
				</div>
			</div>
		)
	}
}