/* http://meyerweb.com/eric/tools/css/reset/ 
    v2.0 | 20110126
    License: none (public domain)
*/

export const globalStyle = {
	'article, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section': {
		display: 'block',
	},
	'*': {
		margin: 0,
		padding: 0,
		border: 0,
		fontSize: '100%',
		font: 'inherit',
		verticalAlign: 'baseline',
	},
	'@font-face': [
		{
			fontFamily: 'Pretendard',
			fontStyle: 'normal',
			fontDisplay: 'swap',
			fontWeight: 900,
			src: 'url("/static/fonts/Pretendard-Black.woff2") format("woff2"),url("/static/fonts/Pretendard-Black.woff") format("woff"),url("/static/fonts/Pretendard-Black.otf") format("otf")',
		},
		{
			fontFamily: 'Pretendard',
			fontStyle: 'normal',
			fontDisplay: 'swap',
			fontWeight: 800,
			src: 'url("/static/fonts/Pretendard-ExtraBold.woff2") format("woff2"),url("/static/fonts/Pretendard-ExtraBold.woff") format("woff"),url("/static/fonts/Pretendard-ExtraBold.otf") format("otf")',
		},
		{
			fontFamily: 'Pretendard',
			fontStyle: 'normal',
			fontDisplay: 'swap',
			fontWeight: 700,
			src: 'url("/static/fonts/Pretendard-Bold.woff2") format("woff2"),url("/static/fonts/Pretendard-Bold.woff") format("woff"),url("/static/fonts/Pretendard-Bold.otf") format("otf")',
		},
		{
			fontFamily: 'Pretendard',
			fontStyle: 'normal',
			fontDisplay: 'swap',
			fontWeight: 600,
			src: 'url("/static/fonts/Pretendard-SemiBold.woff2") format("woff2"),url("/static/fonts/Pretendard-SemiBold.woff") format("woff"),url("/static/fonts/Pretendard-SemiBold.otf") format("otf")',
		},
		{
			fontFamily: 'Pretendard',
			fontStyle: 'normal',
			fontDisplay: 'swap',
			fontWeight: 500,
			src: 'url("/static/fonts/Pretendard-Medium.woff2") format("woff2"),url("/static/fonts/Pretendard-Medium.woff") format("woff"),url("/static/fonts/Pretendard-Medium.otf") format("otf")',
		},
		{
			fontFamily: 'Pretendard',
			fontStyle: 'normal',
			fontDisplay: 'swap',
			fontWeight: 400,
			src: 'url("/static/fonts/Pretendard-Regular.woff2") format("woff2"),url("/static/fonts/Pretendard-Regular.woff") format("woff"),url("/static/fonts/Pretendard-Regular.otf") format("otf")',
		},
		{
			fontFamily: 'Pretendard',
			fontStyle: 'normal',
			fontDisplay: 'swap',
			fontWeight: 300,
			src: 'url("/static/fonts/Pretendard-Light.woff2") format("woff2"),url("/static/fonts/Pretendard-Light.woff") format("woff"),url("/static/fonts/Pretendard-Light.otf") format("otf")',
		},
		{
			fontFamily: 'Pretendard',
			fontStyle: 'normal',
			fontDisplay: 'swap',
			fontWeight: 200,
			src: 'url("/static/fonts/Pretendard-ExtraLight.woff2") format("woff2"),url("/static/fonts/Pretendard-ExtraLight.woff") format("woff"),url("/static/fonts/Pretendard-ExtraLight.otf") format("otf")',
		},
		{
			fontFamily: 'Pretendard',
			fontStyle: 'normal',
			fontDisplay: 'swap',
			fontWeight: 100,
			src: 'url("/static/fonts/Pretendard-Thin.woff2") format("woff2"),url("/static/fonts/Pretendard-Thin.woff") format("woff"),url("/static/fonts/Pretendard-Thin.otf") format("otf")',
		},
	],
	body: {
		lineHeight: 1,
	},
	'ol, ul': {
		listStyle: 'none',
	},
	'blockquote, q': {
		quotes: 'none',
	},
	'blockquote:before, blockquote:after, q:before, q:after': {
		content: 'none',
	},
	table: {
		borderCollapse: 'collapse',
		borderSpacing: 0,
	},
	pre: {
		margin: 0,
		whiteSpace: 'pre-wrap',
		fontFamily: 'Pretendard, sans-serif',
	},
	a: {
		textDecoration: 'none',
	},
}
