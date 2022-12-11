import React from 'react'
import Contact from './components/contact/Contact'
import Experience from './components/experience/Experience'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import Portfollio from './components/portfollio/Portfollio'
import Testimonials from './components/testimonials/Testimonials'

const App = () => {
	return (
		<>
			<Header />
			<Nav />
			<Experience />
			<Portfollio />
			<Testimonials />
			<Contact />
			<Footer />
		</>
	)
}

export default App
