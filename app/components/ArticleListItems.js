import React from 'react';
import { Card, Icon, Image } from 'semantic-ui-react';

const ArticleListItems = ({ article }) => {
	return (
		<div class="grid-item">
				<img class="ui fluid image" src={article.img} />
				<p>{article.author}</p>
		</div>
	)
};

export default ArticleListItems;