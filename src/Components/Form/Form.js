import React from 'react'
import Button from '../Button/Button'
import Card from '../Card/Card'
import Title from '../Title/Title'
import './index.scss'

const Form = () => {

	const handleSubmit = (e) => {
		e.preventDefault()
		console.log('submitted')
	}
	return (
		<>
			<form className='form' onSubmit={handleSubmit}>
				<Title />
				<Card />
			<Button />
			</form>
		</>
	)
}

export default Form
