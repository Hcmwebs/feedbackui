import React, { useState } from 'react'
import Button from '../Button/Button'
import Card from '../Card/Card'
import Title from '../Title/Title'
import './index.scss'

const Form = () => {
	const [activeValue, setActiveValue] = useState('')
	const handleSubmit = (e) => {
		e.preventDefault()
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
				/>
				<Button />
			</form>
		</>
	)
}

export default Form
