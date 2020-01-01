import React, { Component } from 'react';
import Event from '../Event/Event';
import img1 from '../../images/event1.png';

class Events extends Component {

	render() {

		var language = 'it';

		const events = {
			event_1: {
				it: {
					title: 'SERATA HARRY POTTER',
					date: '2 maggio 2019',
					time: 'Ore 20:00',
					place: 'USI, Aula A11',
					description: <p>Proiezione del cortometraggio fan made intitolato "<span>Voldemort: Origins of the Heir</span>" (versione originale in inglese, sottotitoli in italiano) seguito da discussione. Come ospite sarà presente la professoressa Eleonora Benecchi. Vi saranno bevande e snack.</p>
				},
				en: {
					title: '',
					date: '',
					time: '',
					place: '',
					description: ''
				},
				image: img1
			},
		};

		return (
			<div className={this.props.className}>
				<h1>EVENTS</h1>
				<Event 
					title={events.event_1[language].title}
					date={events.event_1[language].date}
					time={events.event_1[language].time}
					place={events.event_1[language].place}
					description={events.event_1[language].description}
					image={events.event_1.image}
				/>
			</div>
		)
	}
}

export default Events;