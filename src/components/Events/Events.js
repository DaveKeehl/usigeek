import React, { Component } from 'react';
import Event from '../Event/Event';

class Events extends Component {

	render() {

		const events = {
			event_1: {
				it: {
					title: 'SERATA HARRY POTTER',
					date: '2 maggio 2019',
					time: 'Ore 20:00',
					place: 'USI, Aula A11',
					description: 'Proiezione del cortometraggio fan made intitolato "Voldemort: Origins of the Heir" (versione originale in inglese, sottotitoli in italiano) seguito da discussione. Come ospite sarà presente la professoressa Eleonora Benecchi. Vi saranno bevande e snack.'
				}
		
			},
		};

		return (
			<div className={this.props.className}>
				<h1>EVENTS</h1>
				<Event 
					title={events.event_1.it.title} 
					date={events.event_1.it.date}
					time={events.event_1.it.time}
					place={events.event_1.it.place}
					description={events.event_1.it.description}
				/>
			</div>
		)
	}
}

export default Events;