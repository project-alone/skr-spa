import { defineConfig, loadEnv } from 'vite'

// plugins
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'
import eslint from 'vite-plugin-eslint'
import visualizer from 'rollup-plugin-visualizer'
import legacy from '@vitejs/plugin-legacy'
import babelImport from 'vite-plugin-babel-import'
import checker from 'vite-plugin-checker'

/**
 * @see https://vitejs.dev/config/
 */
export default defineConfig(({ mode, command }) => {
	const env = loadEnv(mode, process.cwd())
	return {
		server: {
			port: parseInt(env.VITE_PORT),
			// force pre-bundling
			force: true,
			// 프록시 인스턴스 사용
			proxy: {
				'/api': {
					target: 'http://jsonplaceholder.typicode.com',
					changeOrigin: true,
					configure: (proxy, options) => {
						// proxy 변수에는 'http-proxy'의 인스턴스가 전달됩니다
					},
				},
			},
		},
		plugins: [
			/** React hot reload */
			react(),
			/** typescript paths alias */
			tsconfigPaths({}),
			/** eslint visualizer */
			eslint({ cache: false }),
			// visualize for typescript check
			checker({
				typescript: {
					tsconfigPath: './tsconfig.json',
					root: './',
					buildMode: process.env.NODE_ENV === 'production',
				},
			}),
			// like webpack analizer
			visualizer({
				open: env.mode === 'development',
			}),
			legacy({
				ignoreBrowserslistConfig: true,
			}),
			babelImport([
				/** example */
				// {
				// 	libraryName: 'antd',
				// 	libraryDirectory: 'lib',
				// 	style: (name) => {
				// 		if (['col', 'row'].some((item) => item === name)) {
				// 			return 'antd/lib/grid/style/index.css'
				// 		} else {
				// 			return `antd/lib/${name}/style/index.css`
				// 		}
				// 	},
				// 	ignoreStyles: [],
				// },
			]),
		],

		// 모듈 최적화
		optimizeDeps: {
			include: [
				// 포함될 리스트
				'antd/lib/layout',
			],
		},
		build: {
			target: 'es2015',
			rollupOptions: {
				output: {
					manualChunks: {
						vendor: ['lodash-es', 'moment', 'axios'],
						chart: ['chart.js'],
						'react-data-grid': ['react-data-grid'],
					},
				},
			},
		},
	}
})
