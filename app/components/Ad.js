import React from 'react';
import { Card, Icon, Grid, Image } from 'semantic-ui-react';


const Ad = ({ article }) => {
	return (
		<div class="grid-item" onClick={() => this.props.onClick()} >
			<img class="ui fluid image" src={article.url} />
		</div>
	)
};

export default Ad;