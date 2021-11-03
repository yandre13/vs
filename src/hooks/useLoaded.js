import React from 'react'

function useLoaded(timeout = 1000) {
	const [loaded, setLoaded] = React.useState(false)

	React.useEffect(() => {
		setTimeout(() => {
			setLoaded(true)
		}, timeout)
	}, [loaded])
	return loaded
}

export default useLoaded
