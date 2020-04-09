import React, {useContext} from 'react'
import Facebook from '../../images/Facebook.svg'
import Twitter from '../../images/Twitter.svg'
import Instagram from '../../images/Instagram.svg'
import Email from '../../images/Email.svg'
import Telegram from '../../images/Telegram.svg'
import Discord from '../../images/Discord.svg'
import {LanguageContext} from '../../contexts/languageContext'

function Footer() {
	const {language} = useContext(LanguageContext)

	return (
		<footer>
			<div className="socials">
				<a href="https://www.facebook.com/UsiGeek/">
					<img src={Facebook} alt="Facebook"></img>
				</a>
				<a href="https://twitter.com/usigeek">
					<img src={Twitter} alt="Twitter"></img>
				</a>
				<a href="https://www.instagram.com/usi_geek/">
					<img src={Instagram} alt="Instagram"></img>
				</a>
				<a href="mailto:usigeek@usi.ch">
					<img src={Email} alt="Email"></img>
				</a>
				<a href="https://t.me/UsiGeek">
					<img src={Telegram} alt="Telegram"></img>
				</a>
				<a href="https://discord.gg/WuW49yu">
					<img src={Discord} alt="Discord"></img>
				</a>
			</div>
			<p>© {new Date().getFullYear()} USI Geek. {language === "italian" ? "Tutti i diritti riservati" : "All rights reserved"}.</p>
			<p>{language === "italian" ? "Sviluppato da " : "Developed by "}<a 
				href="https://www.davideciulla.com" 
				target="_blank" 
				rel="noopener noreferrer" 
				aria-label="Davide Ciulla's Online Portfolio"
				>
					Davide Ciulla
				</a>
			</p>
		</footer>
	)
}

export default Footer;