import React, {useState} from "react"
import Modal from "./Modal"
import Calendar from '../../images/calendar.svg'
import Clock from '../../images/clock.svg'
import Marker from '../../images/marker.svg'

function Event(props) {
	const [isModalOpen, setIsModalOpen] = useState(false)
	
	const openModal = () => {
		setIsModalOpen(true)
		document.querySelector('html').style.overflow = "hidden"
	}
	
	const closeModal = () => {
		setIsModalOpen(false)
		document.querySelector('html').style.overflow = "initial"
	}
	
	const path = `/images/events/${props.year}/`

	// const highlightPhotoStyle = {
	// 	backgroundImage: `url("${path}${props.photos[0]}")`, 
	// 	backgroundSize: "cover", 
	// 	backgroundPosition: "center top"
	// }

	return (
		<div className="event">
			<div className="gallery" onClick={openModal}>
				<img src={`${path}${props.photos[0]}`} alt={props.title}/>
				<div className="gallery-counter">
					{props.photos.length} {props.language === "italian" ? "FOTO" : (props.photos.length > 1 ? "PHOTOS" : "PHOTO")}
				</div>
			</div>
			<div className="info">
				<h2>{props.title}</h2>
				<div className="details">
					<div>
						<img src={Calendar} alt="Calendar"/>
						<p>{props.day} {props.month} {props.year}</p>
					</div>
					<div>
						<img src={Clock} alt="Clock"/>
						<p>{props.time}</p>
					</div>
					<div>
						<img src={Marker} alt="Marker"/>
						<p>{props.place}</p>
					</div>
				</div>
				<div className="divider"></div>
				<p>{props.description}</p>
			</div>
			<Modal 
				imgPath={path} 
				isOpen={isModalOpen} 
				closeModal={closeModal} 
				photos={props.photos}
			/>
		</div>
	)
}

export default Event