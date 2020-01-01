import React, { Component } from 'react';

class About extends Component {
	render() {
		return (
			<div className={this.props.className}>
				<h1>ABOUT US</h1>
				<p>USIGeek è un'associazione studentesca dell'Università della Svizzera italiana (USI) nata per condividere passioni ed interessi per il mondo dell'intrattenimento e della tecnologia.</p>
				<p>Organizziamo eventi aperti al pubblico dove chiunque può condividere le proprie opinioni e i propri interessi attraverso discussioni tenute da esperti in materia. Oltre a questi incontri educativi e interessanti, vengono organizzati anche eventi ristretti ai membri dell’associazione, più intimi e tranquilli ma pieni di divertimento e passione, dove i membri si ritrovano a giocare, guardare un film/serie televisiva e altro ancora.</p>
				<p>Qualsiasi desiderio e idea che tu abbia la puoi proporre alla nostra associazione, questo vuol dire che le attività possibili sono infinite!</p>
				<p>Chiunque è il benvenuto da USIGeek!</p>
			</div>
		)
	}
}

export default About;