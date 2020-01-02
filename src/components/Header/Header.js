import React, { Component } from 'react';
import {smoothScroll} from '../../utils';

class Header extends Component {
	render () {
		return (
			<nav className={this.props.className}>
				<a href="../../index.js">USI<span>GEEK</span></a>
				<div>
					<ul>
						<li onClick={() =>{smoothScroll("about")}}>ABOUT</li>
						<li onClick={() =>{smoothScroll("events")}}>EVENTS</li>
						<li>EN/IT</li>
					</ul>
				</div>
			</nav>
		)
	}
}

export default Header;