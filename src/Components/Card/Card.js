import React, { useState } from 'react'
import './index.scss'
import data from '../../db/data'

const Card = () => {
	const [active, setActive] = useState(false)
	const handleChange = (e) => {
		console.log(e.target.value)
	}
	return (
		<>
			<div className='card'>
				<p>
					How satisfied are you using <br /> our invoicing feature?
				</p>
				<div className='ratings'>
					{data.map((item) => {
						const { id, name, icon, value } = item

						return (
							<label
								htmlFor={id}
								key={id}
								className={`${active ? 'icon-star active' : 'icon-star'}`}>
								{icon}
								<input
									name={name}
									type='radio'
									id={id}
									value={value}
									onClick={handleChange}
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
