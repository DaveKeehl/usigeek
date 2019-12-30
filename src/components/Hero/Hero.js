import React, { Component } from 'react';
import Logo from '../../images/logo.svg';

class Hero extends Component {
	render() {
		return (
			<div className={this.props.className}>
				<img src={Logo} alt="Logo"></img>
			</div>
		)
	}
}

export default Hero;