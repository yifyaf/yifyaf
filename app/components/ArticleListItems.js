import React from 'react';
import { Card, Icon, Grid, Image } from 'semantic-ui-react';

const ArticleListItems = ({ article }) => {
	return (
		<div class="grid-item" onClick={() => this.props.onClick()} >
			<img class="ui fluid image" src={article.img} />
		</div>
	)
};

export default ArticleListItems;