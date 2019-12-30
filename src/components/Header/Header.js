import React, { Component } from 'react';

class Header extends Component {
	render() {
		return (
			<nav className={this.props.className}>
				<h3>USI<span>GEEK</span></h3>
				<div>
					<ul>
						<li>ABOUT</li>
						<li>EVENTI</li>
						<li>EN/IT</li>
					</ul>
				</div>
			</nav>
		)
	}
}

export default Header;