import React, {Component} from 'react';
import ArticleListItems from './ArticleListItems';
import Ad from './Ad';

// const ArticleList = (props) => {

// 	const ArticleList = props.items.map((article, i) => {

// 		if (i % 3 === 0) {
// 			return (
// 				<div class='ui container'>
// 					<Ad
// 						key={i}
// 						article={article}
// 					/>
// 				</div>
// 			)
// 		}
// 		else {
// 			return (
// 				<div class='ui container'>
// 					<ArticleListItems
// 						key={i}
// 						article={article}
// 					/>
// 				</div>
// 			);
// 		}
// 	});

// 	return (
// 		<div>
// 			{ArticleList}
// 		</div>
// 	)

// }

// export default ArticleList;


export default class ArticleList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			todos: this.props.items,
			currentPage: 1,
			todosPerPage: 10
		}
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(event) {
		this.setState({
			currentPage: Number(event.target.id)
		});
	}

	render() {
		const { todos, currentPage, todosPerPage } = this.state;

		const indexOfLastTodo = currentPage * todosPerPage;
		const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
		const currentTodos = todos.slice(indexOfFirstTodo, indexOfLastTodo);

		const renderToDos = currentTodos.map((article, i) => {
			return (
				<div class='ui container'>
					<ArticleListItems
						key={i}
						article={article}
					/>
				</div>
			)
		});

		const pageNumbers = [];
		for (let i = 1; i <= Math.ceil(todos.length / todosPerPage); i++) {
			pageNumbers.push(i);
		}

		const renderPageNumbers = pageNumbers.map(number => {
			return (
				<button
	              key={number}
	              id={number}
	              onClick={this.handleClick}
	            >
	              {number}
	            </button>
			)
		});

		return (
			<div>
				{renderToDos}
				<ul id="page-numbers">
					{renderPageNumbers}
				</ul>
			</div>
		)
	}
}