import React, {useContext} from 'react'
import {LanguageContext} from '../../contexts/languageContext'

function Header(props) {
	const {language, toggleLanguage} = useContext(LanguageContext)

	const handleClick = (event) => {
		document.querySelector(`.${event.target.id}`).scrollIntoView({behavior: "smooth"})
	}

	return (
		<header>
			<a href="/">USI<span className="geek">GEEK</span></a>
			<nav>
				<ul>
					<li id="about" onClick={handleClick}>
						{language === "italian" ? "CHI SIAMO" : "ABOUT"}
					</li>
					<li id="events" onClick={handleClick}>
						{language === "italian" ? "EVENTI" : "EVENTS"}
					</li>
					<li onClick={toggleLanguage}>
						{
							language === "english" ? 
							<span className="active">EN</span> 
							: 
							<span>EN</span>
						}
						/
						{
							language === "italian" ? 
							<span className="active">IT</span> 
							: 
							<span>IT</span>
						}
					</li>
				</ul>
			</nav>
		</header>
	)
}

export default Header