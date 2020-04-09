import React from 'react'
import Header from '../Header'
import Hero from '../Hero'
import About from '../About'
import Events from '../Events'
import Footer from '../Footer'
import {LanguageContextProvider} from '../../contexts/languageContext'

function App() {
	return (
		<LanguageContextProvider>
			<div className="App">
				<Header />
				<Hero />
				<About />
				<Events />
				<Footer />
			</div>
		</LanguageContextProvider>
	);
}

export default App
