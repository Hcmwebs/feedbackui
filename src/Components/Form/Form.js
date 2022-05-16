import React, { useState } from 'react'
import { BsStarFill, BsArrowRight } from 'react-icons/bs'
import data from '../../db/data'
import './index.scss'

const Form = () => {
	const [activeValue, setActiveValue] = useState('')
	const [selectedValue, setSelectedValue] = useState([])

	const handleSubmit = (e) => {
		e.preventDefault()
		if (activeValue) {
			const newValue = { id: new Date().getTime().toString(), activeValue }
			setSelectedValue((selectedValue) => {
				return [...selectedValue, newValue]
			})
			setActiveValue('')
			setTimeout(() => {
				window.location.reload()
			}, 5000)
		} else {
			alert('Please select a rating')
		}
	}
	return (
		<>
			<main>
				<form className='form' onSubmit={handleSubmit}>
					<div className='form-body'>
						<h2>
							How satisfied are you using <br /> our invoicing feature?
						</h2>
						<div className='ratings'>
							{data.map((item) => {
								const { id, name, value } = item

								return (
									<label htmlFor={id} key={id}>
										<BsStarFill
											className={`${
												value <= activeValue
													? 'icon-star isActive'
													: 'icon-star'
											}`}
										/>
										<input
											name={name}
											type='button'
											id={id}
											value={value}
											onClick={() => setActiveValue(value)}
										/>
									</label>
								)
							})}
						</div>

						<div className='ratings'>
							<small>
								Extremely <br /> dissatisfied
							</small>
							<small>
								Extremely <br /> satisfied
							</small>
						</div>
					</div>
					<button className='btn'>
						Next
						<BsArrowRight />
					</button>
				</form>
				{selectedValue.map((item) => {
					const { id, activeValue: value } = item
					return (
						<article className='card' key={id}>
							<p>
								Thank you very much. <br /> Your <b>{value} star rating </b>
								will be <br /> used to improve our services.
							</p>
						</article>
					)
				})}
			</main>
		</>
	)
}

export default Form
