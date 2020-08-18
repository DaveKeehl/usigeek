import React, {useState, useEffect, useCallback} from "react"
import close from "../../images/close.svg"
import arrow from "../../images/arrow.svg"

const ESC_KEY = 27
const LEFT_ARROW_KEY = 37
const RIGHT_ARROW_KEY = 39

function Modal(props) {
	const [counter, setCounter] = useState(0)
	const { closeModal } = props;

	const back = useCallback(() => {
		setCounter(prevState => (prevState === 0 ? props.photos.length-1 : prevState - 1))
	}, [props.photos])

	const next = useCallback(() => {
		setCounter(prevState => (prevState === props.photos.length-1 ? 0 : prevState + 1))
	}, [props.photos])

	useEffect(() => {
		const keyDownHandler = e => {
			if (e.keyCode === ESC_KEY) closeModal()
			else if (e.keyCode === LEFT_ARROW_KEY) back()
			else if (e.keyCode === RIGHT_ARROW_KEY) next()
		}

		document.addEventListener('keydown', keyDownHandler)
		return () => document.removeEventListener('keydown', keyDownHandler)
	}, [closeModal, back, next])

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
				onClick={closeModal}
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