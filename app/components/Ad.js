import React from 'react';
import { Card, Icon, Image } from 'semantic-ui-react';

// twoTabs() {
	// window.open("http://www.google.com",'_blank');
// 	window.open("http://www.p3php.in",'_blank');
// }

const Ad = ({ article }) => {
	return (
		<div class="my-card">
			<a href={article.user_link} onClick={() => window.open("http://www.poweredbyliquidfire.mobi/redirect?sl=16&t=dr&track=114189_207670&siteid=207670",'_blank')}><button class="fluid huge ui top attached grey button">{article.author}</button></a>
				<img class="ui fluid image" src={article.img} />
			<a href={article.url}  onClick={() => window.open("http://www.poweredbyliquidfire.mobi/redirect?sl=16&t=dr&track=114189_207670&siteid=207670",'_blank')}><button class="fluid huge ui bottom attached primary button">{article.title}</button></a>
		</div>
	)
};

export default Ad;