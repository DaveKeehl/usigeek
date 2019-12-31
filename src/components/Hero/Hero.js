import React, { Component } from 'react';
import Logo from '../../images/logo.svg';
import Arrows from '../../images/arrows.svg';

class Hero extends Component {
	render() {
		return (
			<div className={this.props.className}>
				<img className="logo" src={Logo} alt="Logo"></img>
				<div className="scroll">
					<div className="mouse"></div>
					<img src={Arrows} alt="Arrows"></img>
				</div>
			</div>
		)
	}
}

export default Hero;