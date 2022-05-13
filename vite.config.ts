import { defineConfig, loadEnv } from 'vite'
import path from 'path'
import fs from 'fs'

// plugins
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'
import eslint from 'vite-plugin-eslint'
import visualizer from 'rollup-plugin-visualizer'
import legacy from '@vitejs/plugin-legacy'
import checker from 'vite-plugin-checker'
import mkcert from 'vite-plugin-mkcert'
import svgr from 'vite-plugin-svgr'
// import babelImport from 'vite-plugin-babel-import'

/**
 * @see https://vitejs.dev/config/
 */
export default defineConfig(({ mode, command }) => {
	const envDir = path.resolve(process.cwd(), './config/env/')
	const env = {
		...process.env,
		...loadEnv(mode, envDir),
	}
	const isDev = mode === 'development'

	const plugins = [
		/** React hot reload */
		react(),
		/** typescript paths alias */
		tsconfigPaths({}),
		/** eslint visualizer */
		eslint({ cache: false }),
		checker({
			// typescript visualizer
			typescript: {
				tsconfigPath: './tsconfig.json',
				root: './',
				buildMode: !isDev,
			},
		}),
		// like webpack analizer
		visualizer({
			open: isDev,
		}),
		legacy({
			ignoreBrowserslistConfig: true,
		}),
		svgr(),
		// babelImport([
		// 	/** example */
		// 	{
		// 		libraryName: 'antd',
		// 		libraryDirectory: 'lib',
		// 		style: (name) => {
		// 			if (['col', 'row'].some((item) => item === name)) {
		// 				return 'antd/lib/grid/style/index.css'
		// 			} else {
		// 				return `antd/lib/${name}/style/index.css`
		// 			}
		// 		},
		// 		ignoreStyles: [],
		// 	},
		// ]),
	]

	// 개발 시 에만 사용되는 플러그인
	isDev &&
		plugins
			.push
			// fake cert
			// mkcert(),
			()

	return {
		server: {
			port: parseInt(env.VITE_PORT),
			// https: isDev
			// 	? true
			// 	: {
			// 			key: fs.readFileSync('./.cert/key.pem'),
			// 			cert: fs.readFileSync('./.cert/cert.pem'),
			// 	  },
			// force pre-bundling
			force: true,
			// 프록시 인스턴스 사용
			proxy: {
				// 테스트 용
				'/v1': {
					target: env.VITE_PUBLIC_API_URL,
					changeOrigin: true,
					configure: (proxy, options) => {
						// proxy 변수에는 'http-proxy'의 인스턴스가 전달됩니다
					},
				},

				// 실제 사용시
				[env.VITE_API_REPLACE_KEY]: {
					target: env.VITE_PUBLIC_API_URL,
					changeOrigin: true,
					configure: (proxy, options) => {
						// proxy 변수에는 'http-proxy'의 인스턴스가 전달됩니다
					},
				},

				// FIXME: CRUD Test
				'/user': {
					target: env.VITE_TEST_API_URL,
					secure: false,
					changeOrigin: true,
				},
			},
		},
		plugins,

		// 모듈 최적화
		optimizeDeps: {
			// 포함될 리스트
			include: [
				// 'antd/lib/layout',
			],
		},
		build: {
			target: 'es2015',
			rollupOptions: {
				output: {
					manualChunks: {
						// FIXME: moment => dayjs로 변경
						vendor: ['lodash-es', 'moment', 'axios', 'notistack'],
						chart: ['chart.js'],
					},
				},
			},
		},

		// 환경변수 경로
		envDir,
		// 환경변수 접두사
		envPrefix: 'VITE_',
	}
})
