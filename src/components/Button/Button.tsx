// Dependencies
import React from 'react'

// Types
import { ButtonProps } from './Button.types'

// Styles
import './Button.css'

const Button = (props: ButtonProps) => {
	return <button className='relative text-sm border-2 cursor-pointer flex items-center justify-center whitespace-nowrap px-6 btn'>{props.label}</button>
}

export default Button
