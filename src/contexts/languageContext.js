import React, {useState} from "react"

const LanguageContext = React.createContext()

function LanguageContextProvider(props) {
	const [language, setLanguage] = useState("english")

	const toggleLanguage = () => {
		setLanguage(prevLanguage => prevLanguage === "italian" ? "english" : "italian")
	}

	return (
		<LanguageContext.Provider value={{language, toggleLanguage}}>
			{props.children}
		</LanguageContext.Provider>
	)
}

export {LanguageContextProvider, LanguageContext}