import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { BsGithub } from 'react-icons/bs'
import './headersocial.css'

const HeaderSocial = () => {
	return (
		<div className='header-socials'>
			<a
				href='https://www.linkedin.com/in/arnold-omondi-757814219'
				target='_blank'
				rel='noreferrer'
			>
				{' '}
				<BsLinkedin />
			</a>
			<a
				href='https://github.com/arnoldomondi7'
				target='_blank'
				rel='noreferrer'
			>
				<BsGithub />
			</a>
		</div>
	)
}

export default HeaderSocial
