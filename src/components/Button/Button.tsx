// Dependencies
import ButtonUnstyled from '@mui/base/ButtonUnstyled'
import * as React from 'react'

// Types
import { ButtonProps } from './Button.types'

// Styles
import './Button.css'

const Button = (props: ButtonProps) => (
	<ButtonUnstyled className="flex items-center justify-center rounded-md border border-transparent bg-brand-button-accent px-4 py-3 text-base font-medium text-brand-inverted shadow-sm hover:bg-brand-button-accent-hover sm:px-8">
		{props.label}
	</ButtonUnstyled>
)

export default Button
