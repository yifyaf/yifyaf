import React from 'react';
import { Card, Icon, Image } from 'semantic-ui-react';

const ArticleListItems = ({ article }) => {
	return (
		<div class="my-card">
			<a href={article.user_link}><button class="fluid huge ui top attached grey button">{article.author}</button></a>
				<img class="ui fluid image" src={article.img} />
			<a href={article.url}><button class="fluid huge ui bottom attached primary button">{article.title}</button></a>
		</div>
	)
};

export default ArticleListItems;