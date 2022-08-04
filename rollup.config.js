import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import typescript from '@rollup/plugin-typescript'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import postcss from 'rollup-plugin-postcss'
import dts from 'rollup-plugin-dts'
import { terser } from 'rollup-plugin-terser'

const packageJson = require('./package.json')

const globals = {
	...packageJson.devDependencies,
}

export default [
	{
		input: 'src/index.ts',
		output: [
			{
				file: packageJson.main,
				format: 'cjs',
				sourcemap: true,
			},
			{
				file: packageJson.module,
				format: 'esm',
				sourcemap: true,
			},
		],
		plugins: [
			peerDepsExternal(),
			resolve(),
			commonjs({
				exclude: 'node_modules',
				ignoreGlobal: true,
				requireReturnsDefault: true,
			}),
			// commonjs(),
			typescript({ tsconfig: './tsconfig.json' }),
			postcss(),
			terser(),
		],
	},
	{
		// input: 'dist/esm/types/index.d.ts',
		input: 'dist/esm/index.d.ts',
		output: [{ file: 'dist/index.d.ts', format: 'esm' }],
		plugins: [dts()],
		external: Object.keys(globals).concat([/\.(css|less|scss)$/]),
	},
]
