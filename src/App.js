import React from 'react';
import Header from './components/Header/Header.js';
import Hero from './components/Hero/Hero.js';
import About from './components/About/About.js';
import Events from './components/Events/Events.js';
import Footer from './components/Footer/Footer.js';

function App() {
	return (
		<div className="App">
			<Header/>
			<Hero/>
			<About/>
			<Events/>
			<Footer/>
		</div>
	);
}

export default App;
