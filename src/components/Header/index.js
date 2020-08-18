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
						<span className={language === "english" ? "active" : undefined}>
							EN
						</span> 
						/
						<span className={language === "italian" ? "active" : undefined}>
							IT
						</span> 
					</li>
				</ul>
			</nav>
		</header>
	)
}

export default Header