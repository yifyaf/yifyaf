import React from 'react';
import { Card, Icon, Grid, Image } from 'semantic-ui-react';

const ItemsGif = ({ article }) => {
	return (
		<Grid.Column mobile={16} computer={4}>
		<div class="my-card">
				<img class="ui fluid image" src={article.url} />
				<a href={article.webm}><button class="fluid huge ui bottom attached primary button">{article.title}</button></a>
		</div>
		</Grid.Column>
	)
};

export default ItemsGif;