import { mergeConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'
import svgr from 'vite-plugin-svgr'
import * as path from 'path'
import type { StorybookViteConfig } from '@storybook/builder-vite'

const config: StorybookViteConfig = {
	stories: ['../src/stories/**/*.stories.mdx', '../src/stories/**/*.stories.@(ts|tsx|mdx)'],
	addons: [
		'@storybook/addon-links',
		'@storybook/addon-essentials',
		'@storybook/addon-interactions',
	],
	framework: '@storybook/react',
	core: {
		builder: '@storybook/builder-vite',
	},
	async viteFinal(originConfig) {
		const config: typeof originConfig = {
			plugins: [tsconfigPaths(), svgr()],
			optimizeDeps: {
				include: ['redux-logger', 'jest-mock', '@emotion/react'],
			},
			resolve: {
				dedupe: ['@storybook/client-api'],
				alias: {
					'@emotion/react': path.resolve(
						path.join(__dirname, '../node_modules/@emotion/react'),
					),
					'@emotion/styled': path.resolve(
						path.join(__dirname, '../node_modules/@emotion/styled'),
					),
					'@emotion/core': path.resolve(
						path.join(__dirname, '../node_modules/@emotion/react'),
					),
					'emotion-theming': path.resolve(
						path.join(__dirname, '../node_modules/@emotion/react'),
					),
				},
			},
		}

		return mergeConfig(originConfig, config)
	},
}

export default config
