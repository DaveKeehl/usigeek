import React, { Component } from 'react';
import Calendar from '../../images/calendar.svg';
import Clock from '../../images/clock.svg';
import Marker from '../../images/marker.svg';

class Event extends Component {
	render() {
		return (
			<div className="event">
				<div className="gallery">
					<img src={this.props.image} alt={this.props.title}></img>
				</div>
				<div className="info">
					<h2>{this.props.title}</h2>
					<div className="details">
						<div><img src={Calendar} alt="Calendar"></img><p>{this.props.date}</p></div>
						<div><img src={Clock} alt="Clock"></img><p>{this.props.time}</p></div>
						<div><img src={Marker} alt="Marker"></img><p>{this.props.place}</p></div>
					</div>
					<div className="divider"></div>
					{this.props.description}
				</div>
			</div>
		)
	}
}

export default Event;