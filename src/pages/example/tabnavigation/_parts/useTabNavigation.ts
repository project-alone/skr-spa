import React from 'react'
// import { Pages } from '@pages/example/tabnavigation/_parts/Pages'

interface TabState {
	tabs: string[]
	currentName: string
	index: number
}
type TabAction =
	| { type: 'add' | 'remove'; name: string }
	| { type: 'active'; name: string; index: number }

const tabInitialState: TabState = {
	tabs: [],
	currentName: '',
	index: -1,
}

const tabReducer: React.Reducer<TabState, TabAction> = (prevState, action) => {
	let state = { ...prevState }

	switch (action.type) {
		case 'add': {
			const tabs = [...state.tabs, action.name]
			state = {
				tabs,
				currentName: action.name,
				index: tabs.length - 1,
			}
			return state
		}
		case 'remove': {
			const tabs = state.tabs.filter((item) => item !== action.name)
			state = {
				tabs,
				currentName: action.name,
				index: tabs.length - 1,
			}
			return state
		}
		case 'active': {
			state = {
				...state,
				currentName: action.name,
				index: action.index,
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
		dispatch({ type: 'add', name })
	}, [])

	const remove = React.useCallback((name: string) => {
		dispatch({ type: 'remove', name })
	}, [])

	const active = React.useCallback(
		(index: number) => {
			const name = state.tabs[index]
			dispatch({ type: 'active', name, index })
		},
		[state.tabs],
	)

	return { add, remove, active, state }
}
