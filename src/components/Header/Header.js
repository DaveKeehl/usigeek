import React, { Component } from 'react';
import {smoothScroll} from '../../utils';
import {language} from '../../utils';
import {changeLanguage} from '../../utils';

class Header extends Component {
	render () {
		return (
			<nav className={this.props.className}>
				<a href="/">USI<span>GEEK</span></a>
				<div>
					<ul>
						<li onClick={() =>{smoothScroll("about")}}>ABOUT</li>
						<li onClick={() =>{smoothScroll("events")}}>EVENTS</li>
						<li onClick={() =>{changeLanguage();console.log(language);}}><span id="en">EN</span>/<span id="it">IT</span></li>
					</ul>
				</div>
			</nav>
		)
	}
}

export default Header;