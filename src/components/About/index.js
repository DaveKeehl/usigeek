import React, {useState, useEffect, useContext} from 'react'
import {LanguageContext} from '../../contexts/languageContext'

function About() {
	const [hasLoaded, setHasLoaded] = useState(false)
	const [{data}, setData] = useState({})

	const {language} = useContext(LanguageContext)

	useEffect(() => {
		fetch('data.json')
			.then(response => response.json())
			.then(response => {
				setData(response)
				setHasLoaded(true)
			})
			.catch(err => console.log(err))
	}, [])

	let about = {}
	if (hasLoaded) {
		about = data.about
	}
	
	return (
		<div className="about">
			<h1>{language === "italian" ? "CHI SIAMO" : "ABOUT US"}</h1>
			{hasLoaded ? 
				about[language].map(paragraph => <p key={about[language].indexOf(paragraph)}>{paragraph}</p>)
			:
				null
			}
		</div>
	)
}

export default About;