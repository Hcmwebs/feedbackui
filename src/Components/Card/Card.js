import React from 'react'
import { BsArrowRight, BsXCircle } from 'react-icons/bs'
import './index.scss'

const Card = () => {
	return (
		<>
			<main>
				<div className='card'>
					<BsXCircle className='icon-close' />
					<p>How satisfied are you using our invoicing feature?</p>
					<div className='rating-btns'>
						<button className='btn'>1</button>
						<button className='btn'>2</button>
						<button className='btn'>3</button>
						<button className='btn'>4</button>
						<button className='btn active'>5</button>
					</div>
					<div className='rating-info'>
						<small>
							Extremely <br /> dissatisfied
						</small>
						<small>
							Extremely <br /> satisfied
						</small>
					</div>
					<div className='input-group'>
						<input type='checkbox' />
						<p>I don't use the invoicing feature.</p>
					</div>
					<div className='divider'></div>
					<button className='btn btn-next'>
						Next <BsArrowRight />
					</button>
				</div>
			</main>
		</>
	)
}

export default Card
