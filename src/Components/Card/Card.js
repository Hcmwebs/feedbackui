import React from 'react'
import './index.scss'
import { BsStarFill } from 'react-icons/bs'
import data from '../../db/data'

const Card = ({ activeValue, setActiveValue, hoverValue, setHoverValue }) => {
	return (
		<>
			<div className='card'>
				<p>
					How satisfied are you using <br /> our invoicing feature?
				</p>
				<div className='ratings'>
					{data.map((item) => {
						const { id, name, value } = item

						return (
							<label htmlFor={id} key={id}>
								<BsStarFill
									className={`${
										value <= activeValue ? 'icon-star isActive' : 'icon-star'
									}`}
								/>
								<input
									name={name}
									type='radio'
									id={id}
									value={value}
									onClick={() => setActiveValue(value)}
									onMouseEnter={() => {
										setHoverValue(value)
										setActiveValue('')
									}}
									onMouseLeave={() => setHoverValue('')}
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
		</>
	)
}

export default Card
