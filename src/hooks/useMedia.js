import React from 'react'

function useMedia(query, initialState = false) {
	const [state, setState] = React.useState(initialState)

	React.useEffect(() => {
		let mounted = true
		const mql = window.matchMedia(query)
		function onChange() {
			if (!mounted) {
				return
			}
			setState(Boolean(mql.matches))
		}

		mql.addEventListener('change', onChange)
		setState(mql.matches)

		return () => {
			mounted = false
			mql.removeEventListener('change', onChange)
		}
	}, [query])

	return state
}

export default useMedia
