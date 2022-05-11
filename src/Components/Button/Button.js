import React from 'react'
import { BsArrowRight } from 'react-icons/bs'
import './index.scss'

const Button = () => {
	return (
		<>
			<button className='btn'>
        Next
				<BsArrowRight />
			</button>
		</>
	)
}

export default Button
