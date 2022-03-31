import React from 'react'

import {
	DesignServicesTwoTone as DesignServicesTwoToneIcon,
	BrightnessLowTwoTone as BrightnessLowTwoToneIcon,
	MmsTwoTone as MmsTwoToneIcon,
	TableChartTwoTone as TableChartTwoToneIcon,
	AccountCircleTwoTone as AccountCircleTwoToneIcon,
	BallotTwoTone as BallotTwoToneIcon,
	BeachAccessTwoTone as BeachAccessTwoToneIcon,
	EmojiEventsTwoTone as EmojiEventsTwoToneIcon,
	FilterVintageTwoTone as FilterVintageTwoToneIcon,
	HowToVoteTwoTone as HowToVoteTwoToneIcon,
	LocalPharmacyTwoTone as LocalPharmacyTwoToneIcon,
	RedeemTwoTone as RedeemTwoToneIcon,
	SettingsTwoTone as SettingsTwoToneIcon,
	TrafficTwoTone as TrafficTwoToneIcon,
	VerifiedUserTwoTone as VerifiedUserTwoToneIcon,
} from '@mui/icons-material'

export interface MenuItem {
	link?: string
	icon?: React.ComponentType
	badge?: string
	items?: MenuItem[]
	name: string
}

export interface MenuItems {
	items: MenuItem[]
	heading: string
}

const menuItems: MenuItems[] = [
	{
		heading: '',
		items: [
			{
				name: 'Overview',
				link: '/overview',
				icon: DesignServicesTwoToneIcon,
			},
		],
	},
	{
		heading: 'Examples',
		items: [
			{
				name: 'Home',
				link: '/example/home',
			},
			{
				name: 'Login form',
				link: '/example/login',
			},
			{
				name: 'Counter',
				link: '/example/counter',
			},
			{
				name: 'Grid',
				link: '/example/grid',
			},
			{
				name: 'Modal',
				link: '/example/Modal',
			},
			{
				name: 'forms',
				link: '/example/formwithhookform',
			},
			{
				name: 'signup',
				link: '/example/signup',
			},
			{
				name: 'tabnavigation',
				link: '/example/tabnavigation',
			},
		],
	},
	{
		heading: 'Dashboards',
		items: [
			{
				name: 'Crypto',
				link: '/dashboards/crypto',
				icon: BrightnessLowTwoToneIcon,
			},
			{
				name: 'Messenger',
				icon: MmsTwoToneIcon,
				link: '/dashboards/messenger',
			},
		],
	},
	{
		heading: 'Management',
		items: [
			{
				name: 'Transactions',
				icon: TableChartTwoToneIcon,
				link: '/management/transactions',
			},
			{
				name: 'User Profile',
				icon: AccountCircleTwoToneIcon,
				link: '/management/profile',
				items: [
					{
						name: 'Profile Details',
						link: '/management/profile/details',
					},
					{
						name: 'User Settings',
						link: '/management/profile/settings',
					},
				],
			},
		],
	},
	{
		heading: 'Components',
		items: [
			{
				name: 'Buttons',
				icon: BallotTwoToneIcon,
				link: '/components/buttons',
			},
			{
				name: 'Modals',
				icon: BeachAccessTwoToneIcon,
				link: '/components/modals',
			},
			{
				name: 'Accordions',
				icon: EmojiEventsTwoToneIcon,
				link: '/components/accordions',
			},
			{
				name: 'Tabs',
				icon: FilterVintageTwoToneIcon,
				link: '/components/tabs',
			},
			{
				name: 'Badges',
				icon: HowToVoteTwoToneIcon,
				link: '/components/badges',
			},
			{
				name: 'Tooltips',
				icon: LocalPharmacyTwoToneIcon,
				link: '/components/tooltips',
			},
			{
				name: 'Avatars',
				icon: RedeemTwoToneIcon,
				link: '/components/avatars',
			},
			{
				name: 'Cards',
				icon: SettingsTwoToneIcon,
				link: '/components/cards',
			},
			{
				name: 'Forms',
				icon: TrafficTwoToneIcon,
				link: '/components/forms',
			},
		],
	},
	{
		heading: 'Extra Pages',
		items: [
			{
				name: 'Status',
				icon: VerifiedUserTwoToneIcon,
				link: '/status',
				items: [
					{
						name: 'Error 404',
						link: '/status/404',
					},
					{
						name: 'Error 500',
						link: '/status/500',
					},
					{
						name: 'Maintenance',
						link: '/status/maintenance',
					},
					{
						name: 'Coming Soon',
						link: '/status/coming-soon',
					},
				],
			},
		],
	},
]

export default menuItems
