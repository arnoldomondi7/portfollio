import React from 'react'
import Mycv from '../../assets/images/cv.docx'
import './calltoaction.css'

const CallToAction = () => {
	return (
		<div className='c-t-a'>
			<a href={Mycv} download className='btn'>
				Download CV
			</a>
			<a href='#contact' className='btn btn-primary'>
				Get In Touch
			</a>
		</div>
	)
}

export default CallToAction
