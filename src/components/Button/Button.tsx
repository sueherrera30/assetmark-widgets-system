// Dependencies
import React from 'react'

// Types
import { ButtonProps } from './Button.types'

// Styles
import './Button.css'

const Button = (props: ButtonProps) => {
	return <button className='btn'>{props.label}</button>
}

export default Button
