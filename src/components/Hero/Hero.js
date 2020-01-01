import React, { Component } from 'react';
import {smoothScroll} from '../../utils';
import Logo from '../../images/logo.svg';
import Arrows from '../../images/arrows.svg';

class Hero extends Component {
	render() {
		return (
			<div className={this.props.className}>
				<img className="logo" src={Logo} alt="Logo"></img>
				<div className="scroll">
					<div className="mouse" onClick={ ()=> {smoothScroll("about")} }></div>
					<img src={Arrows} onClick={ ()=> {smoothScroll("about")} } alt="Arrows"></img>
				</div>
			</div>
		)
	}
}

export default Hero;