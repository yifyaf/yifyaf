import React from 'react';
import ArticleListItems from './ArticleListItems';


const ArticleList = (props) => {

	const ArticleList = props.items.map((article, i) => {

		if (i % 3 === 0) {
			return (
				<div class='ui container'>
					<ArticleListItems
						key={i}
						article={article}
					/>
					<div class="ui centered banner test ad">yif tyaf</div>
				</div>
			)
		}
		else {
			return (
				<div class='ui container'>
					<ArticleListItems
						key={i}
						article={article}
					/>
				</div>
			);
		}
	});

	return (
		<div>
			{ArticleList}
		</div>
	)

}

export default ArticleList;