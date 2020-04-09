import React, {useState, useEffect, useContext} from 'react';
import Event from './Event'
import {LanguageContext} from '../../contexts/languageContext'

function Events() {
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

	let events = []
	if (hasLoaded) {
		events = data.events
	}

	return (
		<div className="events">
			<h1>{language === "italian" ? "EVENTI" : "EVENTS"}</h1>
			{events.map(event => {
				return (
					<Event
						language={language}
						key={events.indexOf(event)}
						title={event[language].title}
						day={event[language].date.day}
						month={event[language].date.month}
						year={event[language].date.year}
						time={event[language].time}
						place={event[language].place}
						description={event[language].description}
						photos={event.photos}
					/>
				)
			})}
		</div>
	)
}

export default Events;