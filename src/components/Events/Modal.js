import React, {useState} from "react"
import close from "../../images/close.svg"
import arrow from "../../images/arrow.svg"

function Modal(props) {
	const [counter, setCounter] = useState(0)

	const back = () => {
		setCounter(prevState => (prevState === 0 ? props.photos.length-1 : prevState - 1))
	}

	const next = () => {
		setCounter(prevState => (prevState === props.photos.length-1 ? 0 : prevState + 1))
	}

	return (
		<div className="modal" style={props.isOpen ? {display: "grid"} : {display: "none"}}>
			<div className="modal-content">
				<img
					src={`${props.imgPath}${props.photos[counter]}`} 
					alt={props.photos[counter]}
				/>
			</div>
			<img 
				src={close}
				className="modal-close" 
				alt="Close modal window"
				onClick={() => props.closeModal()}
			/>
			<div style={props.photos.length <= 1 ? {display: "none"} : null}>
				<img 
					className="arrow left"
					src={arrow}
					alt="Previous"
					onClick={back}
					style={counter === 0 ? {display: "none"} : null}
				/>
				<img 
					className="arrow right"
					src={arrow}
					alt="Next"
					onClick={next}
					style={counter === props.photos.length-1 ? {display: "none"} : null}
				/>
			</div>
		</div>
	)
}

export default Modal