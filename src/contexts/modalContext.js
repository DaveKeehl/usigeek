import React, {useState} from "react"

const ModalContext = React.createContext()

function ModalContextProvider(props) {
	const [isModalOpen, setIsModalOpen] = useState(false)

	return (
		<ModalContext.Provider value={{isModalOpen, setIsModalOpen}}>
			{props.children}
		</ModalContext.Provider>
	)
}

export {ModalContextProvider, ModalContext}