/**
 * Colors
 */
const TEXT_COLORS = {
	base: '--color-text-base',
	muted: '--color-text-muted',
	inverted: '--color-text-inverted',
}

const BACKGROUND_COLORS = {
	fill: '--color-fill',
	'button-accent': '--color-button-accent',
	'button-accent-hover': '--color-button-accent-hover',
	'button-muted': '--color-button-muted',
}

const GRADIENT_COLORS = {
	hue: '--color-fill',
}

/**
 * Use to generate the alpha channel when it is needed
 * @param {string} variableName: The CSS variable name
 * @returns {string} rgb or rgba composed string
 */
const withOpacity = (variableName) => {
	return ({ opacityValue }) => {
		if (opacityValue !== undefined) {
			return `rgba(var(${variableName}), ${opacityValue})`
		}

		return `rgb(var(${variableName}))`
	}
}

/**
 * Generates an object of colors for the tailwind config
 *
 * @param {Object} colorsDictionary - Key value dictionary with all branding colors
 * @returns object - {base: rgba(var(--color-text-base))}
 */
const generateColors = (colorsDictionary) => {
	const colors = {}

	if (colorsDictionary !== undefined) {
		for (const color in colorsDictionary) {
			colors[color] = withOpacity(colorsDictionary[color])
		}
	}

	return colors
}

exports.textColors = () => generateColors(TEXT_COLORS)
exports.backgroundColors = () => generateColors(BACKGROUND_COLORS)
exports.gradientColors = () => generateColors(GRADIENT_COLORS)
