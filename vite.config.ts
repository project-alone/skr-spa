import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'
import eslint from 'vite-plugin-eslint'
import visualizer from 'rollup-plugin-visualizer'
import legacy from '@vitejs/plugin-legacy'
import babelImport from 'vite-plugin-babel-import'

/**
 * @see https://vitejs.dev/config/
 */
export default defineConfig((env) => {
	console.log(env)
	return {
		plugins: [
			react(),
			tsconfigPaths({}),
			eslint({
				cache: false,
			}),
			visualizer({
				open: env.mode === 'development',
			}),
			legacy({
				ignoreBrowserslistConfig: true,
			}),
			babelImport([
				{
					libraryName: 'antd',
					libraryDirectory: 'lib',
					style: (name) => {
						if (['col', 'row'].some((item) => item === name)) {
							return 'antd/lib/grid/style/index.css'
						} else {
							return `antd/lib/${name}/style/index.css`
						}
					},
					ignoreStyles: [],
				},
			]),
		],
		optimizeDeps: {
			include: [
				'antd/lib/layout',
				'antd/lib/menu',
				'antd/lib/row',
				'antd/lib/col',
				'antd/lib/avatar',
				'antd/lib/button',
				'antd/lib/page-header',
				'antd/lib/table',
				'antd/lib/form',
				'antd/lib/input',
				'antd/lib/checkbox',
			],
		},
		build: {
			target: 'es2015',
			rollupOptions: {
				output: {
					manualChunks: {
						vendor: ['lodash-es', 'moment', 'axios'],
						'react-data-grid': ['react-data-grid'],
					},
				},
			},
		},
	}
})
