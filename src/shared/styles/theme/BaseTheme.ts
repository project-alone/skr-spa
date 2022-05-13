import { createTheme, experimental_sx as sx } from '@mui/material/styles'
import { globalStyle } from '@styles/global'
import colorSystem from '@styles/theme/colorSystem'
import fontSystem from '@styles/theme/fontSystem'

import type { Color } from '@mui/material'
import type {} from '@mui/x-data-grid-pro/themeAugmentation'
import type { Shadows } from '@mui/material/styles/shadows'

// svg icons
const DefaultCheckBox = '/static/images/icons/checkBox-default.svg'
const DefaultThCheckBox = '/static/images/icons/checkBox-defaultTh.svg'
const HoverCheckBox = '/static/images/icons/checkBox-hover.svg'
const DisabledCheckBox = '/static/images/icons/checkBox-disabled.svg'
const CheckedCheckBox = '/static/images/icons/checkBox-checked.svg'
const CheckedDisabledCheckBox = '/static/images/icons/checkBox-checkedDisabled.svg'
const DefaultRadio = '/static/images/icons/radio-default.svg'
const HoverRadio = '/static/images/icons/radio-hover.svg'
const DisabledRadio = '/static/images/icons/radio-disabled.svg'
const CheckedRadio = '/static/images/icons/radio-selected.svg'
const CheckedDisabledRadio = '/static/images/icons/radio-selectedDisabled.svg'

declare module '@mui/material/styles/createTypography' {
	interface TypographyOptions {
		st1?: React.CSSProperties
		st2?: React.CSSProperties
		b1?: React.CSSProperties
		b2?: React.CSSProperties
		sb1?: React.CSSProperties
		sb2?: React.CSSProperties
		ct?: React.CSSProperties
		bt?: React.CSSProperties
		bt_large?: React.CSSProperties
		ht?: React.CSSProperties
		label?: React.CSSProperties
	}
}

declare module '@mui/material' {
	interface TypographyPropsVariantOverrides {
		st1: true
		st2: true
		b1: true
		b2: true
		sb1: true
		sb2: true
		ct: true
		bt: true
		bt_large: true
		ht: true
		label: true
	}

	interface ChipPropsColorOverrides {
		ready: true
	}

	interface PaperPropsVariantOverrides {
		default: true
		data: true
		search: true
	}
	interface ButtonGroupPropsColorOverrides {
		default: true
		function: true
		delete: true
		cancel: true
	}

	interface IconButtonPropsColorOverrides {
		sub: true
		function: true
		delete: true
		cancel: true
		mdi: true
	}

	interface ButtonPropsColorOverrides {
		default: true
		sub: true
		function: true
		delete: true
		cancel: true
		excel: true
	}

	interface Color {
		0?: string
		100: string
		300: string
		500: string
		700: string
		main?: string
		contrastText?: string
	}

	interface TypeBackground {
		300?: string
		500?: string
		700?: string
	}
}

declare module '@mui/material/styles' {
	interface Theme {
		borderColor: string
		shadows: Shadows
	}

	// allow configuration using `createTheme`
	interface ThemeOptions {
		borderColor: string
		shadows?: Shadows
	}

	interface SimplePaletteColorOptions {
		bright?: string
		light?: string
		main: string
		dark?: string
		contrastText?: string
	}

	interface PaletteColor {
		bright?: string
		light400?: string
	}

	interface PaletteOptions {
		default?: SimplePaletteColorOptions
		sub?: SimplePaletteColorOptions
		function?: SimplePaletteColorOptions
		excel?: SimplePaletteColorOptions
		delete?: SimplePaletteColorOptions
		cancel?: SimplePaletteColorOptions
		ready?: SimplePaletteColorOptions
		border?: Partial<Color>
	}

	interface Palette {
		border: Partial<Color>
	}
}

/**
 * @description
 * Theme 객체를 작성
 */
export const BaseTheme = createTheme({
	spacing: (value: number) => value,
	shape: {
		borderRadius: 2,
	},
	borderColor: colorSystem.border.b700,
	// // https://mui.com/customization/palette/
	palette: {
		common: {
			white: colorSystem.white,
		},
		primary: {
			bright: colorSystem.primary.b300,
			light: colorSystem.primary.b500,
			main: colorSystem.primary.b700,
			dark: colorSystem.primary.b900,
		},
		default: {
			main: colorSystem.grey.b700,
			dark: colorSystem.grey.b900,
			contrastText: colorSystem.white,
		},
		sub: {
			main: colorSystem.white,
			dark: colorSystem.primary.b050,
			contrastText: colorSystem.primary.b700,
		},
		secondary: {
			main: colorSystem.secondary.b500,
			dark: colorSystem.secondary.b700,
			contrastText: colorSystem.grey.b700,
		},
		function: {
			main: colorSystem.white,
			dark: colorSystem.bg.b300,
			contrastText: colorSystem.grey.b900,
		},
		excel: {
			main: colorSystem.fn.excel.default,
			dark: colorSystem.fn.excel.hover,
			contrastText: colorSystem.white,
		},
		delete: {
			main: colorSystem.fn.delete.default,
			contrastText: colorSystem.fn.delete.default,
		},
		cancel: {
			main: colorSystem.fn.disabled,
			contrastText: colorSystem.primary.b200,
		},
		error: {
			main: '#F65858',
			contrastText: colorSystem.white,
		},
		ready: {
			main: '#F9AD3A',
			contrastText: colorSystem.white,
		},
		warning: {
			main: '#FFE91F',
			contrastText: '#565863',
		},
		info: {
			main: '#C4C5CE',
			contrastText: colorSystem.white,
		},
		success: {
			main: '#67C23A',
			contrastText: colorSystem.white,
		},
		grey: {
			main: '#565863',
			0: colorSystem.grey.b000,
			300: colorSystem.grey.b300,
			400: colorSystem.grey.b400,
			600: colorSystem.grey.b600,
			700: colorSystem.grey.b700,
			900: colorSystem.grey.b900,
			contrastText: colorSystem.grey.b000,
		},
		text: {
			primary: '#2C2E38',
			secondary: '#868E96',
		},
		action: {
			disabled: colorSystem.white,
			disabledBackground: colorSystem.fn.disabled,
			disabledOpacity: 1,
			hoverOpacity: 0.1,
		},
		background: {
			paper: colorSystem.white,
			default: colorSystem.white,
			700: colorSystem.bg.b700,
			500: colorSystem.bg.b500,
			300: colorSystem.bg.b300,
		},
		border: {
			700: colorSystem.border.b700,
			500: colorSystem.border.b500,
			300: colorSystem.border.b300,
			100: colorSystem.border.b100,
		},
	},
	typography: {
		htmlFontSize: 14,
		fontFamily: ['Pretendard', 'sans-serif'].join(','),
		h1: fontSystem.h1,
		h2: fontSystem.h2,
		h3: fontSystem.h3,
		h4: fontSystem.h4,
		st1: fontSystem.st1,
		st2: fontSystem.st2,
		b1: fontSystem.b1,
		sb1: fontSystem.sb1,
		b2: fontSystem.b2,
		sb2: fontSystem.sb2,
		ct: fontSystem.ct,
		bt: fontSystem.bt.default,
		bt_large: fontSystem.bt.large,
		ht: fontSystem.ht,
		label: fontSystem.label,
		body1: fontSystem.b1,
	},
	shadows: [
		'none',
		colorSystem.shadow.drop,
		colorSystem.shadow.section,
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
	],
	components: {
		MuiCssBaseline: {
			styleOverrides: globalStyle,
		},
		// 	//Typography
		MuiTypography: {
			defaultProps: {
				variantMapping: {
					h1: 'h1',
					h2: 'h2',
					h3: 'h3',
					h4: 'h4',
					st1: 'h3',
					st2: 'h3',
					b1: 'span',
					b2: 'span',
					sb1: 'span',
					sb2: 'span',
				},
			},
		},
		// 	//Button
		MuiButton: {
			variants: [
				{
					props: { size: 'small' },
					style: {
						minWidth: 'auto',
						height: '24px',
						fontSize: fontSystem.bt.default.fontSize,
						padding: '0 6px',
						'.MuiButton-endIcon': {
							marginLeft: '2px',
						},
					},
				},
				{
					props: { size: 'medium' },
					style: {
						minWidth: 'auto',
						height: '34px',
						fontSize: fontSystem.bt.default.fontSize,
						padding: '0 12px',
						'.MuiButton-endIcon': {
							marginLeft: '5px',
						},
					},
				},
				{
					props: { size: 'large' },
					style: {
						minWidth: 'auto',
						height: '42px',
						fontSize: fontSystem.bt.large.fontSize,
						padding: '0 18px',
						'.MuiButton-endIcon': {
							marginLeft: '5px',
						},
					},
				},
				{
					props: { color: 'primary' },
					style: {
						svg: {
							'& path': {
								fill: colorSystem.white,
							},
						},
					},
				},
				{
					props: { color: 'primary', variant: 'outlined' },
					style: {
						backgroundColor: colorSystem.white,
						borderColor: colorSystem.primary.b700,
						'&:hover, &:active': {
							backgroundColor: colorSystem.bg.b300,
							borderColor: colorSystem.primary.b700,
						},
						svg: {
							'& path': {
								fill: colorSystem.primary.b700,
							},
						},
					},
				},
				{
					props: { color: 'default' },
					style: {
						svg: {
							'& path': {
								fill: colorSystem.white,
							},
						},
					},
				},
				{
					props: { color: 'default', variant: 'outlined' },
					style: {
						backgroundColor: colorSystem.white,
						borderColor: colorSystem.grey.b700,
						'&:hover, &:active': {
							backgroundColor: colorSystem.bg.b700,
							borderColor: colorSystem.grey.b700,
						},
						svg: {
							'& path': {
								fill: colorSystem.grey.b700,
							},
						},
					},
				},
				{
					props: { color: 'sub', variant: 'contained' },
					style: {
						svg: {
							'& path': {
								fill: colorSystem.primary.b700,
							},
						},
					},
				},
				{
					props: { color: 'secondary', variant: 'contained' },
					style: {
						svg: {
							'& path': {
								fill: colorSystem.grey.b700,
							},
						},
					},
				},
				{
					props: { color: 'secondary', variant: 'outlined' },
					style: {
						backgroundColor: colorSystem.white,
						borderColor: colorSystem.secondary.b500,
						'&:hover, &:active': {
							backgroundColor: colorSystem.secondary.b300,
							borderColor: colorSystem.secondary.b500,
						},
						svg: {
							'& path': {
								fill: colorSystem.secondary.b500,
							},
						},
					},
				},
				{
					props: { color: 'function', variant: 'outlined' },
					style: {
						backgroundColor: colorSystem.white,
						borderColor: colorSystem.grey.b900,
						color: colorSystem.grey.b900,
						'&:hover, &:active': {
							backgroundColor: colorSystem.bg.b300,
							borderColor: colorSystem.grey.b900,
						},
						svg: {
							'& path': {
								fill: colorSystem.grey.b900,
							},
						},
					},
				},
				{
					props: { color: 'delete', variant: 'outlined' },
					style: {
						backgroundColor: colorSystem.white,
						borderColor: colorSystem.fn.delete.default,
						'&:hover, &:active': {
							backgroundColor: colorSystem.fn.delete.hover,
							borderColor: colorSystem.fn.delete.default,
						},
						svg: {
							'& path': {
								fill: colorSystem.fn.delete.default,
							},
						},
					},
				},
				{
					props: { color: 'cancel', variant: 'outlined' },
					style: {
						backgroundColor: colorSystem.white,
						borderColor: colorSystem.fn.disabled,
						color: colorSystem.primary.b200,
						'&:hover, &:active': {
							backgroundColor: colorSystem.bg.b700,
							borderColor: colorSystem.fn.disabled,
						},
						svg: {
							'& path': {
								fill: colorSystem.primary.b200,
							},
						},
					},
				},
				{
					props: { disabled: true },
					style: {
						svg: {
							'& path': {
								fill: colorSystem.white,
							},
						},
					},
				},
			],
			styleOverrides: {
				root: sx({
					boxSizing: 'border-box',
					boxShadow: 'none',
					textTransform: 'capitalize',
					'&:hover, &:active': {
						boxShadow: 'none',
					},
					'&:disabled': {
						backgroundColor: colorSystem.fn.disabled,
						svg: {
							'& path': {
								fill: colorSystem.white,
							},
						},
					},
				}),
				//icon size
				iconSizeSmall: {
					'& > *:first-of-type': {
						width: '12px',
						height: '12px',
					},
				},
				iconSizeMedium: {
					'& > *:first-of-type': {
						width: '18px',
						height: '18px',
					},
				},
				iconSizeLarge: {
					'& > *:first-of-type': {
						width: '18px',
						height: '18px',
					},
				},
			},
		},
		MuiIconButton: {
			variants: [
				/** FIXME: IconButton 컴포넌틑 variant props가 없어 확장 할수 없음 */
				// {
				// 	props: { variant: 'outlined' },
				// 	style: {
				// 		border: '1px solid',
				// 	},
				// },
				{
					props: { size: 'small' },
					style: {
						width: '24px',
						height: '24px',
					},
				},
				{
					props: { size: 'medium' },
					style: {
						width: '34px',
						height: '34px',
					},
				},
				{
					props: { size: 'large' },
					style: {
						width: '42px',
						height: '42px',
					},
				},
				{
					props: { color: 'primary' },
					style: {
						backgroundColor: colorSystem.primary.b700,
						'&:hover,&:active': {
							backgroundColor: colorSystem.primary.b900,
						},
						svg: {
							'& path': {
								fill: colorSystem.white,
							},
						},
					},
				},
				/** FIXME: IconButton 컴포넌틑 variant props가 없어 확장 할수 없음 */
				// {
				// 	props: { color: 'primary', variant: 'outlined' },
				// 	style: {
				// 		backgroundColor: colorSystem.white,
				// 		borderColor: colorSystem.primary.b700,
				// 		'&:hover, &:active': {
				// 			backgroundColor: colorSystem.bg.b300,
				// 			borderColor: colorSystem.primary.b700,
				// 		},
				// 		svg: {
				// 			'& path': {
				// 				fill: colorSystem.primary.b700,
				// 			},
				// 		},
				// 	},
				// },
				{
					props: { color: 'default' },
					style: {
						backgroundColor: colorSystem.grey.b700,
						'&:hover,&:active': {
							backgroundColor: colorSystem.grey.b900,
						},
						svg: {
							'& path': {
								fill: colorSystem.white,
							},
						},
					},
				},
				/** FIXME: IconButton 컴포넌틑 variant props가 없어 확장 할수 없음 */
				// {
				// 	props: { color: 'default', variant: 'outlined' },
				// 	style: {
				// 		backgroundColor: colorSystem.white,
				// 		borderColor: colorSystem.grey.b700,
				// 		'&:hover, &:active': {
				// 			backgroundColor: colorSystem.bg.b700,
				// 			borderColor: colorSystem.grey.b700,
				// 		},
				// 		svg: {
				// 			'& path': {
				// 				fill: colorSystem.grey.b700,
				// 			},
				// 		},
				// 	},
				// },
				{
					props: { color: 'sub' },
					style: {
						backgroundColor: colorSystem.white,
						'&:hover,&:active': {
							backgroundColor: colorSystem.primary.b050,
						},
						svg: {
							'& path': {
								fill: colorSystem.primary.b700,
							},
						},
					},
				},
				{
					props: { color: 'secondary' },
					style: {
						borderRadius: 2,
						backgroundColor: colorSystem.secondary.b500,
						'&:hover,&:active': {
							backgroundColor: colorSystem.secondary.b700,
						},
						svg: {
							'& path': {
								fill: colorSystem.grey.b700,
							},
						},
					},
				},
				/** FIXME: IconButton 컴포넌틑 variant props가 없어 확장 할수 없음 */
				// {
				// 	props: { color: 'secondary', variant: 'outlined' },
				// 	style: {
				// 		backgroundColor: colorSystem.white,
				// 		borderColor: colorSystem.secondary.b500,
				// 		'&:hover, &:active': {
				// 			backgroundColor: colorSystem.secondary.b300,
				// 			borderColor: colorSystem.secondary.b500,
				// 		},
				// 		svg: {
				// 			'& path': {
				// 				fill: colorSystem.secondary.b500,
				// 			},
				// 		},
				// 	},
				// },
				{
					props: { color: 'function' },
					style: {
						backgroundColor: colorSystem.white,
						'&:hover,&:active': {
							backgroundColor: colorSystem.bg.b300,
						},
						svg: {
							'& path': {
								fill: colorSystem.grey.b900,
							},
						},
					},
				},
				/** FIXME: IconButton 컴포넌틑 variant props가 없어 확장 할수 없음 */
				// {
				// 	props: { color: 'function', variant: 'outlined' },
				// 	style: {
				// 		backgroundColor: colorSystem.white,
				// 		borderColor: colorSystem.grey.b900,
				// 		'&:hover,&:active': {
				// 			backgroundColor: colorSystem.bg.b300,
				// 		},
				// 		svg: {
				// 			'& path': {
				// 				fill: colorSystem.grey.b900,
				// 			},
				// 		},
				// 	},
				// },
				/** FIXME: IconButton 컴포넌틑 variant props가 없어 확장 할수 없음 */
				// {
				// 	props: { color: 'delete', variant: 'outlined' },
				// 	style: {
				// 		backgroundColor: colorSystem.white,
				// 		borderColor: colorSystem.fn.delete.default,
				// 		'&:hover,&:active': {
				// 			backgroundColor: colorSystem.fn.delete.hover,
				// 		},
				// 		svg: {
				// 			'& path': {
				// 				fill: colorSystem.fn.delete.default,
				// 			},
				// 		},
				// 	},
				// },
				/** FIXME: IconButton 컴포넌틑 variant props가 없어 확장 할수 없음 */
				// {
				// 	props: { color: 'cancel', variant: 'outlined' },
				// 	style: {
				// 		backgroundColor: colorSystem.white,
				// 		borderColor: colorSystem.fn.disabled,
				// 		'&:hover,&:active': {
				// 			backgroundColor: colorSystem.bg.b700,
				// 		},
				// 		svg: {
				// 			'& path': {
				// 				fill: colorSystem.primary.b200,
				// 			},
				// 		},
				// 	},
				// },
				{
					props: { color: 'mdi' },
					style: {
						backgroundColor: colorSystem.primary.b700,
						'&:hover,&:active': {
							backgroundColor: colorSystem.primary.b900,
						},
						svg: {
							'& path': {
								fill: colorSystem.white,
							},
						},
					},
				},
			],
			styleOverrides: {
				root: sx({
					borderRadius: '2px',
					boxSizing: 'border-box',
					'&:disabled': {
						backgroundColor: colorSystem.fn.disabled,
						svg: {
							'& path': {
								fill: colorSystem.white,
							},
						},
					},
				}),
			},
		},
		MuiButtonGroup: {
			defaultProps: {
				color: 'primary',
			},
			variants: [
				{
					props: { color: 'primary' },
					style: {
						borderColor: colorSystem.primary.b700,
					},
				},
				{
					props: { color: 'default' },
					style: {
						borderColor: colorSystem.grey.b700,
					},
				},
				{
					props: { color: 'secondary' },
					style: {
						borderColor: colorSystem.secondary.b500,
					},
				},
				{
					props: { color: 'function' },
					style: {
						borderColor: colorSystem.grey.b900,
					},
				},
				{
					props: { color: 'delete' },
					style: {
						borderColor: colorSystem.fn.delete.default,
					},
				},
				{
					props: { color: 'cancel' },
					style: {
						borderColor: colorSystem.fn.disabled,
					},
				},
			],
			styleOverrides: {
				root: sx({
					boxSizing: 'border-box',
					border: '1px solid',
					borderRadius: 1,
					overflow: 'hidden',
					height: '34px',
					'& .MuiIconButton-root': {
						height: '32px',
					},
					button: {
						border: 'none',
						position: 'relative',
						'&:hover, &:active': {
							border: 'none',
						},
						'&:not(:first-of-type)': {
							'&:before': {
								content: '""',
								display: 'inline-block',
								width: '1px',
								height: 'calc(50% - 3px)',
								// backgroundColor: "#ff0",
								backgroundColor: colorSystem.primary.b200,
								clear: 'both',
								position: 'absolute',
								left: -1,
								top: '50%',
								transform: 'translateY(-50%)',
							},
						},
						'&:disabled': {
							border: 'none',
							'&:not(:first-of-type)': {
								'&:before': {
									backgroundColor: colorSystem.white,
								},
							},
						},
					},
				}),
				groupedOutlinedPrimary: sx({
					'&:not(:first-of-type)': {
						'&:before': {
							backgroundColor: colorSystem.primary.b200,
						},
					},
				}),
				// groupedOutlinedDefault: sx({
				// 	'&:not(:first-of-type)': {
				// 		'&:before': {
				// 			backgroundColor: colorSystem.grey.b300,
				// 		},
				// 	},
				// }),
				groupedOutlinedSecondary: sx({
					'&:not(:first-of-type)': {
						'&:before': {
							backgroundColor: colorSystem.secondary.b500,
						},
					},
				}),
				// groupedOutlinedFunction: sx({
				// 	'&:not(:first-of-type)': {
				// 		'&:before': {
				// 			backgroundColor: colorSystem.grey.b900,
				// 		},
				// 	},
				// }),
				// groupedOutlinedDelete: sx({
				// 	'&:not(:first-of-type)': {
				// 		'&:before': {
				// 			backgroundColor: colorSystem.fn.delete.default,
				// 		},
				// 	},
				// }),
				// groupedOutlinedCancel: sx({
				// 	'&:not(:first-of-type)': {
				// 		'&:before': {
				// 			backgroundColor: colorSystem.fn.disabled,
				// 		},
				// 	},
				// }),
				disableElevation: sx({
					border: 'none',
				}),
			},
		},
		// 	//toggle
		MuiToggleButton: {
			defaultProps: {
				color: 'primary',
			},
			styleOverrides: {
				root: sx({
					padding: '7px',
					boxSizing: 'border-box',
					borderColor: colorSystem.primary.b700,
					svg: {
						width: '18px',
						height: '18px',
						'& path': {
							fill: colorSystem.primary.b700,
						},
					},
					'&:hover': {
						backgroundColor: colorSystem.bg.b300,
					},
					'&.Mui-selected': {
						color: colorSystem.bg.b300,
						'&:hover': {
							backgroundColor: colorSystem.bg.b300,
						},
					},
				}),
			},
		},
		// 	//label
		MuiInputLabel: {
			defaultProps: {
				// control placeholder,
				shrink: true,
			},
			styleOverrides: {
				root: sx({
					fontSize: fontSystem.label.fontSize,
					fontWeight: fontSystem.label.fontWeight,
					color: colorSystem.grey.b900,
					transform: 'none',
					position: 'static',
					'&.Mui-disabled': {
						color: colorSystem.grey.b900,
					},
					'&.Mui-focused': {
						color: colorSystem.grey.b900,
					},
					'& + .MuiInput-root': {
						marginTop: 0,
					},
				}),
			},
		},
		// 	//input
		MuiInput: {
			styleOverrides: {
				root: sx({
					'&:before': {
						borderBottomColor: colorSystem.bg.b700,
					},
					// height: "33px",
					'& input': {
						padding: '4px 12px 6px',
						color: colorSystem.grey.b700,
						lineHeight: '100%',
						fontSize: '1rem',
						fontWeight: 400,
						'&::placeholder': {
							color: colorSystem.grey.b400,
						},
						'&:disabled': {
							backgroundColor: colorSystem.bg.b700,
						},
					},
					'&.Mui-focused': {
						backgroundColor: colorSystem.bg.b300,
					},
					'&:hover:not(.Mui-disabled):before': {
						borderBottomWidth: '1px',
						borderBottomColor: colorSystem.primary.b700,
					},
					'&:hover:not(.Mui-disabled)': {
						backgroundColor: colorSystem.bg.b300,
					},
					'&.Mui-disabled': {
						'&:before': {
							borderBottomStyle: 'solid',
						},
						'&.MuiInputBase-colorSuccess': {
							'& + .Mui-disabled': {
								color: colorSystem.status.success,
							},
						},
						'&.Mui-error': {
							'& + .Mui-disabled': {
								color: colorSystem.status.danger,
							},
						},
					},
				}),
			},
		},
		MuiTextField: {
			defaultProps: {
				variant: 'standard',
				fullWidth: true,
			},
			variants: [
				{
					props: { focused: true },
					style: {
						borderColor: colorSystem.border.b700,
					},
				},
				{
					props: { disabled: true },
					style: {
						borderColor: colorSystem.border.b700,
					},
				},
				{
					props: { color: 'success' },
					style: {
						'& .MuiInput-underline:before, & .MuiInput-underline:after': {
							borderBottomColor: colorSystem.status.success,
						},
						'& .MuiFormHelperText': {
							color: colorSystem.status.success,
						},
					},
				},
			],
			styleOverrides: {
				root: sx({
					'& label': {
						color: colorSystem.grey.b900,
						position: 'static',
						transform: 'none',
						fontSize: fontSystem.label.fontSize,
						fontWeight: fontSystem.label.fontWeight,
						'&:hover': {
							color: colorSystem.grey.b900,
							zIndex: 1,
						},
						'&.Mui-focused': {
							color: colorSystem.grey.b900,
						},
						'& .MuiInputLabel-asterisk, & .MuiFormLabel-asterisk': {
							color: colorSystem.status.danger,
						},
					},
					'& label.Mui-error,& label.Mui-success ': {
						color: colorSystem.grey.b900,
					},
					'& .MuiInput-underline:before': {
						borderBottomWidth: '1px',
						borderBottomColor: colorSystem.border.b700,
					},
					'& .MuiInput-underline:after': {
						borderBottomWidth: '1px',
						borderBottomColor: colorSystem.primary.b700,
					},
					'& .Mui-error:after': {
						borderBottomColor: colorSystem.status.danger,
					},
					'& .Mui-disabled': {
						'.MuiInputAdornment-root': {
							backgroundColor: colorSystem.bg.b700,
						},
					},
				}),
			},
		},
		MuiFormHelperText: {
			styleOverrides: {
				root: sx({
					fontSize: '0.625rem',
					color: colorSystem.status.success,
					'&.Mui-error': {
						color: colorSystem.status.danger,
					},
					'&.Mui-disabled': {
						color: colorSystem.grey.b400,
					},
				}),
			},
		},
		MuiInputAdornment: {
			styleOverrides: {
				root: sx({
					padding: '4px 12px 6px 10px',
					margin: '0',
					height: '100%',
					maxHeight: '100%',
					'& .MuiTypography-root': {
						color: colorSystem.grey.b700,
					},
					svg: {
						width: '14px',
						height: '14px',
						margin: '4.5px 0',
					},
				}),
			},
		},
		//select
		MuiSelect: {
			defaultProps: {
				autoWidth: true,
			},
			styleOverrides: {
				// root 에서 select로 대체
				select: sx({
					height: '33px',
					padding: '9px 0',
					svg: {
						width: '14px',
						height: '14px',
						marginRight: '12px',
					},
					'&.Mui-focused': {
						svg: {
							transform: 'scaleY(-1)',
						},
					},
					'&.Mui-disabled': {
						backgroundColor: colorSystem.bg.b700,
						opacity: 1,
						'.makeStyles-placeholder': {
							color: colorSystem.grey.b400,
						},
					},
					'&.MuiNativeSelect-nativeInput': {
						'&:disabled': {
							backgroundColor: colorSystem.bg.b700,
						},
					},
					'& .MuiSelect-select': {
						padding: '0px 10px 0px 12px !important',
						display: 'flex',
						alignItems: 'center',
						'&:focus': {
							backgroundColor: 'transparent',
						},
						'.MuiListItemIcon-root': {
							minWidth: '14px',
							svg: {
								marginRight: '5px',
								'& path': {
									fill: colorSystem.primary.b700,
								},
							},
						},
					},
				}),
			},
		},
		// 	//select option list
		MuiPaper: {
			styleOverrides: {
				root: sx({
					boxShadow: 'none',
					border: `1px solid ${colorSystem.border.b700}`,
					borderRadius: 2,
					marginTop: '5px',
					padding: '5px',
					marginLeft: '8px',
					height: '160px',
					overflow: 'hidden',
					overflowY: 'auto',
				}),
			},
		},
		MuiList: {
			styleOverrides: {
				root: sx({
					padding: 0,
				}),
			},
		},
		// 	//Checkbox
		MuiCheckbox: {
			styleOverrides: {
				root: sx({
					padding: 0,
					'&:after': {
						content: "''",
						display: 'inline-block',
						width: '24px',
						height: '24px',
						clear: 'both',
						background: `url(${DefaultCheckBox}) no-repeat 50%/contain`,
						marginRight: 1,
					},
					'&:hover': {
						backgroundColor: 'transparent',
						'&:after': {
							background: `url(${HoverCheckBox}) no-repeat 50%/contain`,
						},
					},
					'&.Mui-checked': {
						'&:after': {
							background: `url(${CheckedCheckBox}) no-repeat 50%/contain`,
						},
						'&.Mui-disabled': {
							'&:after': {
								background: `url(${CheckedDisabledCheckBox}) no-repeat 50%/contain`,
							},
						},
					},
					'&.Mui-disabled': {
						'&:after': {
							background: `url(${DisabledCheckBox}) no-repeat 50%/contain`,
						},
					},
					svg: {
						display: 'none',
					},
				}),
			},
		},
		// 	//Checkbox label
		MuiFormControlLabel: {
			styleOverrides: {
				root: sx({
					margin: 0,
					'& .MuiFormControlLabel-label': {
						color: colorSystem.grey.b900,
						fontSize: fontSystem.label.fontSize,
						fontWeight: fontSystem.label.fontWeight,
						paddingRight: 4,
						'&.Mui-disabled': {
							color: colorSystem.grey.b900,
							opacity: 0.5,
						},
					},
				}),
			},
		},
		// 	//Radio
		MuiRadio: {
			styleOverrides: {
				root: sx({
					padding: 0,
					'&:after': {
						content: "''",
						display: 'inline-block',
						width: '24px',
						height: '24px',
						clear: 'both',
						background: `url(${DefaultRadio}) no-repeat 50%/contain`,
						marginRight: 1,
					},
					'&:hover': {
						backgroundColor: 'transparent',
						'&:after': {
							background: `url(${HoverRadio}) no-repeat 50%/contain`,
						},
					},
					'&.Mui-checked': {
						'&:after': {
							background: `url(${CheckedRadio}) no-repeat 50%/contain`,
						},
						'&.Mui-disabled': {
							'&:after': {
								background: `url(${CheckedDisabledRadio}) no-repeat 50%/contain`,
							},
						},
					},
					'&.Mui-disabled': {
						'&:after': {
							background: `url(${DisabledRadio}) no-repeat 50%/contain`,
						},
					},
					svg: {
						display: 'none',
					},
				}),
			},
		},
		// 	//Group check, select
		MuiFormGroup: {
			styleOverrides: {
				root: sx({
					flexDirection: 'row',
					gap: '10px',
				}),
			},
		},
		// 	//Data grid
		// MuiTabPanel: {
		// 	styleOverrides: {
		// 		root: sx({
		// 			padding: 0,
		// 		}),
		// 	},
		// },
		MuiDataGrid: {
			styleOverrides: {
				root: sx({
					border: 'none',
				}),
				columnHeaders: {
					borderColor: colorSystem.border.b700,
				},
				columnHeader: {
					padding: '0 8px',
					flex: '1 1 104px',
					'&:focus-within': {
						outline: 'none',
					},
					'&:after': {
						content: "''",
						display: 'inline-block',
						width: '1px',
						height: '14px',
						backgroundColor: colorSystem.border.grid,
						clear: 'both',
						transform: 'translateX(8px)',
					},
					'&:last-child': {
						'&:after': {
							display: 'none',
						},
					},
					'&:focus': {
						outline: 'none',
					},
				},
				columnHeaderTitle: {
					color: colorSystem.grey.b600,
					fontSize: fontSystem.sb1.fontSize,
					fontWeight: fontSystem.sb1.fontWeight,
					gap: '5px',
				},
				columnHeaderTitleContainer: {
					display: 'inline-flex',
					gap: '5px',
					'& .MuiCheckbox-root': {
						'&:after': {
							backgroundImage: `url(${DefaultThCheckBox})`,
						},
						'&.Mui-checked': {
							'&:after': {
								background: `url(${CheckedCheckBox}) no-repeat 50%/contain`,
							},
						},
					},
				},
				columnHeaderTitleContainerContent: {
					display: 'none',
					'& .MuiCheckbox-root': {
						'&:after': {
							backgroundImage: `url(${DefaultThCheckBox})`,
						},
					},
				},
				columnSeparator: {
					svg: {
						display: 'none',
					},
				},
				iconButtonContainer: {
					'.MuiButtonBase-root': {
						width: '18px',
						height: '18px',
						padding: 0,
						backgroundColor: 'transparent',
						svg: {
							'& path': {
								fill: colorSystem.grey.b600,
							},
						},
					},
					'&:hover': {
						'.MuiButtonBase-root': {
							backgroundColor: 'transparent',
							svg: {
								'& path': {
									fill: colorSystem.grey.b600,
								},
							},
						},
					},
				},
				menuIcon: {
					marginRight: 0,
					'.MuiButtonBase-root': {
						width: '18px',
						height: '18px',
						padding: 0,
						backgroundColor: 'transparent',
						svg: {
							'& path': {
								fill: colorSystem.grey.b600,
							},
						},
					},
				},
				sortIcon: {
					'& path': {
						fill: colorSystem.grey.b600,
					},
				},
				/** FIXME: 해당필드는 존재하지 않음 */
				// ColumnMenuIcon: {
				// 	svg: {
				// 		'& path': {
				// 			fill: colorSystem.grey.b600,
				// 		},
				// 	},
				// },
				row: {
					'&.Mui-selected': {
						backgroundColor: colorSystem.bg.b300,
						'&:hover': {
							backgroundColor: colorSystem.bg.b300,
						},
					},
					'&:hover': {
						backgroundColor: colorSystem.bg.b300,
					},
				},
				cell: {
					borderColor: colorSystem.border.b700,
					'&:focus': {
						outline: 'none',
					},
				},
				footerContainer: {
					borderColor: colorSystem.border.b500,
				},
			},
		},
		MuiContainer: {
			defaultProps: {
				maxWidth: false,
			},
			styleOverrides: {
				root: sx({
					minWidth: '1440px',
					margin: 0,
					padding: '0 !important',
					display: 'flex',
					flexDirection: 'column',
					height: '100vh',
				}),
			},
		},
		MuiBreadcrumbs: {
			styleOverrides: {
				separator: {
					marginLeft: 2,
					marginRight: 2,
				},
			},
		},
		// 	//chip
		MuiChip: {
			variants: [
				// {
				// 	props: { focused: true },
				// 	style: {
				// 		borderColor: colorSystem.border.b700,
				// 	},
				// },
			],
			styleOverrides: {
				root: {
					height: '19px',
					boxSizing: 'border-box',
					borderColor: colorSystem.border.b500,
					color: colorSystem.grey.b600,
					fontSize: fontSystem.ht.fontSize,
					fontWeight: fontSystem.ht.fontWeight,
					'&.Mui-focusVisible': {
						borderColor: '#F3F4F4',
					},
				},
				label: {
					paddingLeft: '8px',
					paddingRight: '8px',
				},
			},
		},
		MuiDivider: {
			variants: [
				//section
				// {
				// 	props: { type: 'section15' },
				// 	style: {
				// 		backgroundColor: colorSystem.border.b700,
				// 		margin: '15px 0',
				// 	},
				// },
				// {
				// 	props: { type: 'section20' },
				// 	style: {
				// 		backgroundColor: colorSystem.border.b700,
				// 		margin: '20px 0',
				// 	},
				// },
				// {
				// 	props: { type: 'section30' },
				// 	style: {
				// 		backgroundColor: colorSystem.border.b700,
				// 		margin: '30px 0',
				// 	},
				// },
				// //Function
				// {
				// 	props: { type: 'function15' },
				// 	style: {
				// 		backgroundColor: colorSystem.border.b100,
				// 		margin: '15px 0',
				// 	},
				// },
				// {
				// 	props: { type: 'function20' },
				// 	style: {
				// 		backgroundColor: colorSystem.border.b100,
				// 		margin: '20px 0',
				// 	},
				// },
				// {
				// 	props: { type: 'function30' },
				// 	style: {
				// 		backgroundColor: colorSystem.border.b100,
				// 		margin: '30px 0',
				// 	},
				// },
				// //Item
				// {
				// 	props: { type: 'item15' },
				// 	style: {
				// 		backgroundColor: colorSystem.border.b300,
				// 		margin: '15px 0',
				// 	},
				// },
				// {
				// 	props: { type: 'item20' },
				// 	style: {
				// 		backgroundColor: colorSystem.border.b300,
				// 		margin: '20px 0',
				// 	},
				// },
				// {
				// 	props: { type: 'item30' },
				// 	style: {
				// 		backgroundColor: colorSystem.border.b300,
				// 		margin: '30px 0',
				// 	},
				// },
			],
		},
	},
})
