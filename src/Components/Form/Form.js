import React, { useState } from 'react'
import Button from '../Button/Button'
import Card from '../Card/Card'
import Title from '../Title/Title'
import './index.scss'

const Form = () => {
	const [activeValue, setActiveValue] = useState('')
	const [hoverValue, setHoverValue] = useState('')
	const handleSubmit = (e) => {
		e.preventDefault()
		setHoverValue('')
		setActiveValue('')
		console.log('submitted')
	}
	return (
		<>
			<form className='form' onSubmit={handleSubmit}>
				<Title />
				<Card
					activeValue={activeValue}
					setActiveValue={setActiveValue}
					hoverValue={hoverValue}
					setHoverValue={setHoverValue}
				/>
				<Button />
			</form>
		</>
	)
}

export default Form
