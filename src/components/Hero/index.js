import React from 'react'
import Logo from '../../images/logo.svg'
import Arrows from '../../images/arrows.svg'

function Hero() {
	const handleClick = () => {
		document.querySelector('.about').scrollIntoView({behavior: 'smooth'})
	}

	return (
		<div className="hero">
			<img 
				className="logo" 
				src={Logo} 
				alt="USIGeek logo"
			>
			</img>
			<div className="scroll" onClick={handleClick}>
				<div className="mouse"></div>
				<img src={Arrows} alt="Arrows"></img>
			</div>
		</div>
	)
}

export default Hero