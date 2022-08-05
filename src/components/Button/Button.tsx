// Dependencies
import React from 'react'
import ButtonUnstyled from '@mui/base/ButtonUnstyled'

// Types
import { ButtonProps } from './Button.types'

// Styles
import './Button.css'

const Button = (props: ButtonProps) => (
	<ButtonUnstyled className='btn relative flex cursor-pointer items-center justify-center whitespace-nowrap border-2 px-6 text-sm'>
		{props.label}
	</ButtonUnstyled>
)

export default Button
