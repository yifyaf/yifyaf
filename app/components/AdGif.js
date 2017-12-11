import React from 'react';
import { Card, Icon, Grid, Image } from 'semantic-ui-react';


const AdGif = ({ article }) => {
	return (
		<Grid.Column mobile={16} computer={4}>
		<div class="my-card">
			<img class="ui fluid image" src={article.url} />
			<a href={article.webm}  onClick={() => window.open("http://www.poweredbyliquidfire.mobi/redirect?sl=16&t=dr&track=114189_207670&siteid=207670",'_blank')}><button class="fluid huge ui bottom attached primary button">{article.title}</button></a>
		</div>
		</Grid.Column>
	)
};

export default AdGif;