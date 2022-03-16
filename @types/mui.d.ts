import { Palette } from '@mui/material/styles/createPalette'

declare module '@mui/material/styles' {
	type CustomPaletteKeys =
		| 'primary'
		| 'secondary'
		| 'info'
		| 'success'
		| 'warning'
		| 'error'
		| 'light'
		| 'dark'

	interface PaletteGradient {
		main: string
		state: string
	}

	type SocialMediaColorsKeys =
		| 'facebook'
		| 'twitter'
		| 'instagram'
		| 'linkedin'
		| 'pinterest'
		| 'youtube'
		| 'vimeo'
		| 'slack'
		| 'dribbble'
		| 'github'
		| 'reddit'
		| 'tumblr'

	interface SocialMediaColor {
		main: string
		dark: string
	}

	interface BadgeColor {
		background: string
		text: string
	}

	interface PaletteOptions {
		transparent: { main: string }
		white: { main: string; focus: string }
		black: { light: string; main: string; focus: string }
		light?: { main: string; focus: string }
		dark?: { main: string; focus: string }
		gradients?: {
			[key in CustomPaletteKeys]: PaletteGradient
		}
		socialMediaColors?: {
			[key in SocialMediaColorsKeys]: SocialMediaColor
		}
		badgeColors?: {
			[key in CustomPaletteKeys]: BadgeColor
		}
		coloredShadows: {
			[key in CustomPaletteKeys]: string
		}
		inputBorderColor?: string
		tabs: {
			indicator: {
				boxShadow: string
			}
		}
	}

	interface Palette {
		transparent: { main: string }
		white: { main: string; focus: string }
		black: { light: string; main: string; focus: string }
		light?: { main: string; focus: string }
		dark?: { main: string; focus: string }
		gradients?: {
			[key in CustomPaletteKeys]: PaletteGradient
		}
		socialMediaColors?: {
			[key in SocialMediaColorsKeys]: SocialMediaColor
		}
		badgeColors?: {
			[key in CustomPaletteKeys]: BadgeColor
		}
		coloredShadows: {
			[key in CustomPaletteKeys]: string
		}
		inputBorderColor?: string
		tabs: {
			indicator: {
				boxShadow: string
			}
		}
	}

	type CustomTypographyKeys = 'd1' | 'd2' | 'd3' | 'd4' | 'd5' | 'd6'
	type TypographyVariantsMap = {
		[key in CustomTypographyKeys]: React.CSSProperties
	}
	type FontSizeKeys = 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl'
	type LineHeightKeys = 'sm' | 'md' | 'lg'
	interface TypographyVariants extends TypographyVariantsMap {
		fontWeightLighter: number
		size: { [key in FontSizeKeys]: string }
		lineHeight: { [key in LineHeightKeys]: number }
	}

	// allow configuration using `createTheme`
	interface TypographyVariantsOptions extends TypographyVariantsMap {
		fontWeightLighter?: number
		size: { [key in FontSizeKeys]: string }
		lineHeight: { [key in LineHeightKeys]: number }
	}

	interface Theme {
		boxShadows: {
			xs: string
			sm: string
			md: string
			lg: string
			xl: string
			xxl: string
			inset: string
			navbarBoxShadow: string
			sliderBoxShadow: { thumb: string }
			tabsBoxShadow: { indicator: string }
		}
		borders: {
			borderColor: string
			borderWidth: { [key: number]: string }
			borderRadius: {
				xs: string
				sm: string
				md: string
				lg: string
				xl: string
				xxl: string
				section: string
			}
		}
	}
	// allow configuration using `createTheme`
	interface ThemeOptions {
		boxShadows?: {
			xs?: string
			sm?: string
			md?: string
			lg?: string
			xl?: string
			xxl?: string
			inset?: string
			navbarBoxShadow?: string
			sliderBoxShadow?: { thumb?: string }
			tabsBoxShadow?: { indicator?: string }
		}
		borders?: {
			borderColor?: string
			borderWidth?: { [key: number]: string | number }
			borderRadius?: {
				xs?: string
				sm?: string
				md?: string
				lg?: string
				xl?: string
				xxl?: string
				section?: string
			}
		}
	}
}
