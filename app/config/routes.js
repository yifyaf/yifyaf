import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import college from '../components/college';
import singlePost from '../components/singlePost';

export default (

	<Router>
		<div>
			<div class="hamburger-icon" id="icon">
			<div class="icon-1" id="a"></div>
			<div class="icon-2" id="b"></div>
			<div class="icon-3" id="c"></div>
			<div class="clear"></div>
			</div>
			<nav id="nav">
				<ul>
					<li id='link-item1'><Link to="/">HOME</Link></li>
					<li id='link-itemx'><Link to="/test">TEST</Link></li>
			        <li id='link-item2'><Link to="/vr">VR</Link></li>
			        <li id='link-item3'><Link to="/zillow-group">Coming</Link></li>
			        <li id='link-item4'><Link to="/yahoo">Soon</Link></li>
			        <li id='link-item5'><Link to="/modus-create">Happy Holidays!</Link></li>
			      </ul>
			</nav>
			<div class="dark-blue" id="blue"></div>

			<Route exact path='/' component={college} />
			<Route exact path='/test' component={singlePost} />
		</div>
	</Router>

);
