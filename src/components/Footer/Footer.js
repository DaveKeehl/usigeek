import React, { Component } from 'react';

class Footer extends Component {
	
	render() {
		return (
			<footer className={this.props.className}>
				<div className="socials"></div>
				<p>© 2020 USI Geek. Tutti i diritti riservati.</p>
				<p>Sviluppato da Davide Ciulla</p>
			</footer>
		)
	}
}

export default Footer;