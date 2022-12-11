import React from 'react'
import { BsPatchCheckFill } from 'react-icons/bs'
import './experience.css'

const Experience = () => {
	return (
		<section id='experience' className='skills'>
			<h2 className='skills'>Skills ?</h2>
			<div className='container experience-container'>
				<div className='experience-frontend'>
					<h3>Frontend Development</h3>

					<div className='coding-content'>
						<article className='skill-details'>
							<BsPatchCheckFill className='skill-detail-icon' />
							<h4>HTML5</h4>
						</article>

						<article className='skill-details'>
							<BsPatchCheckFill className='skill-detail-icon' />
							<h4>CSS3</h4>
						</article>

						<article className='skill-details'>
							<BsPatchCheckFill className='skill-detail-icon' />
							<h4>Javascript</h4>
						</article>

						<article className='skill-details'>
							<BsPatchCheckFill className='skill-detail-icon' />
							<h4>React</h4>
						</article>

						<article className='skill-details'>
							<BsPatchCheckFill className='skill-detail-icon' />
							<h4>Responsive UI/UI Design</h4>
						</article>

						<article className='skill-details'>
							<BsPatchCheckFill className='skill-detail-icon' />
							<h4>MATERIAL-UI(MUI)</h4>
						</article>
					</div>
				</div>
				<div className='experiecne-backend'>
					<h3>Backend Development</h3>

					<div className='coding-content'>
						<article className='skill-details'>
							<BsPatchCheckFill className='skill-detail-icon' />
							<h4>Node.js</h4>
						</article>

						<article className='skill-details'>
							<BsPatchCheckFill className='skill-detail-icon' />
							<h4>Express.js</h4>
						</article>

						<article className='skill-details'>
							<BsPatchCheckFill className='skill-detail-icon' />
							<h4>MongoDB</h4>
						</article>

						<article className='skill-details'>
							<BsPatchCheckFill className='skill-detail-icon' />
							<h4>Mongoose</h4>
						</article>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Experience
