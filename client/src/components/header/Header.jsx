import React from 'react'
import CallToAction from '../callToAction/CallToAction'
import Me from '../../assets/images/ano1.jpg'
import './header.css'
import HeaderSocial from '../headersocials/HeaderSocial'
import { BsArrowDown } from 'react-icons/bs'

const Header = () => {
	return (
		<header>
			<div className='container header-container'>
				<h3>Hi, Am Arnold Omondi.</h3>
				<h2>A Fullstack Web Developer.</h2>
				<h2>
					I Help Businesses Optimize Profits, By Developing Scalable Web
					Applications.
				</h2>
				<CallToAction />
				<HeaderSocial />

				<img src={Me} alt='me' className='me-port' />

				<a href='#contact' className='scrol-down'>
					Scroll Down
					<BsArrowDown />
				</a>
			</div>
		</header>
	)
}

export default Header
