import React, { useState } from 'react'
import { AiFillHome } from 'react-icons/ai'
import { GiOpenBook } from 'react-icons/gi'
import { AiFillSetting } from 'react-icons/ai'
import './nav.css'

const Nav = () => {
	const [activeNav, setActiveNav] = useState('#header')
	return (
		<nav>
			<a
				href='#header'
				className={activeNav === '#header' ? 'active' : ''}
				onClick={() => setActiveNav('#header')}
			>
				<AiFillHome />
			</a>

			<a
				href='#experience'
				className={activeNav === '#experience' ? 'active' : ''}
				onClick={() => setActiveNav('#experience')}
			>
				<GiOpenBook />
			</a>

			<a
				href='#contact'
				className={activeNav === '#contact' ? 'active' : ''}
				onClick={() => setActiveNav('#contact')}
			>
				<AiFillSetting />
			</a>
		</nav>
	)
}

export default Nav
