import React from 'react'
import useMedia from 'hooks/useMedia'

function debounce(cb, time) {
	let timeout
	return (...args) => {
		clearTimeout(timeout)
		timeout = setTimeout(cb, time, ...args)
	}
}

const AppWidthContext = React.createContext()
const AppQueryContext = React.createContext()
export function AppWidthProvider(props) {
	//For width
	const [state, dispatch] = React.useReducer((s, a) => a, 0)
	const update = React.useCallback(debounce(dispatch, 200), [])
	const value = React.useMemo(() => [state, update], [state])
	return <AppWidthContext.Provider value={value} {...props} />
}

export function useAppWidth() {
	const context = React.useContext(AppWidthContext)
	if (!context) {
		throw new Error('useAppWidth must be used within the DogStateProvider')
	}
	return context
}

export function AppQueryProvider(props) {
	const md = useMedia('(min-width: 768px) and (max-width: 1047px)')
	const lg = useMedia('(min-width: 1048px) and (max-width: 1366px)')
	const xl = useMedia('(min-width: 1367px)')
	const query = xl ? 'xl' : lg ? 'lg' : md ? 'md' : 'sm'
	return <AppQueryContext.Provider value={query} {...props} />
}

export function useAppQuery() {
	const context = React.useContext(AppQueryContext)
	if (!context) {
		throw new Error('useAppQuery must be used within the DogStateProvider')
	}
	return context
}
