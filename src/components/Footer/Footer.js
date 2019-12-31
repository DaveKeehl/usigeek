import React, { Component } from 'react';

class Footer extends Component {
	
	render() {
		return (
			<footer className={this.props.className}>
				<div className="socials">
					<a href="https://www.facebook.com/UsiGeek/"></a>
					<a href="https://www.facebook.com/UsiGeek/"></a>
					<a href="https://www.facebook.com/UsiGeek/"></a>
					<a href="https://www.facebook.com/UsiGeek/"></a>
					<a href="https://www.facebook.com/UsiGeek/"></a>
					<a href="https://www.facebook.com/UsiGeek/"></a>
				</div>
				<p>© 2020 USI Geek. Tutti i diritti riservati.</p>
				<p>Sviluppato da <a href="https://www.google.com/">Davide Ciulla</a></p>
			</footer>
		)
	}
}

export default Footer;