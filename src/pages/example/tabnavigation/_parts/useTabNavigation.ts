import React from 'react'
import { Pages } from '@pages/example/tabnavigation/_parts/Pages'

interface TabState {
	tabs: string[]
	components: React.FC | null
}
type TabAction =
	| { type: 'add'; name: string; component: TabState['components'] }
	| { type: 'remove'; name: string }
	| { type: 'active'; component: TabState['components'] }

const tabInitialState: TabState = {
	tabs: [],
	components: null,
}

const tabReducer: React.Reducer<TabState, TabAction> = (prevState, action) => {
	let state = { ...prevState }

	switch (action.type) {
		case 'add': {
			console.log('add reducer')
			state = {
				tabs: [...state.tabs, action.name],
				components: action.component,
			}
			return state
		}
		case 'remove': {
			state = {
				...state,
				tabs: state.tabs.filter((item) => item !== action.name),
			}
			return state
		}
		case 'active': {
			state = {
				...state,
				components: action.component,
			}
			return state
		}
		default: {
			return state
		}
	}
}

/**
 * @description
 * hooks
 */
export const useTabNavigation = () => {
	const [state, dispatch] = React.useReducer(tabReducer, tabInitialState)

	const add = React.useCallback((name: string) => {
		dispatch({ type: 'add', name, component: Pages[name] })
	}, [])

	const remove = React.useCallback((name: string) => {
		dispatch({ type: 'remove', name })
	}, [])

	const active = React.useCallback(
		(index: number) => {
			dispatch({ type: 'active', component: Pages[state.tabs[index]] })
		},
		[state.tabs],
	)

	return { add, remove, active, ...state }
}
