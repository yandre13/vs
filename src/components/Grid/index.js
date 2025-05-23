import {useAppQuery, useAppWidth} from 'context'
import {motion} from 'framer-motion'
import React, {useEffect, useMemo} from 'react'

function Grid({hidden = false, classname, loaded = false, ...props}) {
	const gridRef = React.useRef()
	const query = useAppQuery()
	const [loading, setLoading] = React.useState(false)
	const [width, dispatch] = useAppWidth()

	const lines =
		query === 'xl' ? 29 : query === 'lg' ? 22 : query === 'md' ? 15 : 8

	const gridLinesY = useMemo(() => {
		if (query === 'sm') return 10
		return 50
	}, [query])

	const gridLinesX = useMemo(() => {
		if (query === 'sm') return 650
		return 150
	}, [query])

	function resize() {
		dispatch(gridRef.current?.getBoundingClientRect().width / lines)
	}
	useEffect(() => {
		if (gridRef.current) {
			dispatch(gridRef.current?.getBoundingClientRect().width / lines)
		}
	}, [query])

	useEffect(() => {
		if (!gridRef.current) return null
		visualViewport.addEventListener('resize', resize)
		return () => visualViewport.removeEventListener('resize', resize)
	}, [query])

	useEffect(() => {
		if (loaded) setTimeout(() => setLoading(true), 700)
	}, [loading, loaded])

	return (
		<motion.div
			className={`wrapper-grid ${classname && classname}`}
			ref={gridRef}
			{...props}
			initial={{opacity: 0}}
			animate={{opacity: loading ? 1 : 0}}
			transition={{duration: 0.7}}
		>
			{!hidden && <div className="line-right" />}
			<div className="h-full w-full relative flex flex-wrap">
				{Array.from(Array(gridLinesY).keys()).map(e => (
					<div key={e} style={{width}}>
						{!hidden && <div className="absolute h-full line-child-y" />}
					</div>
				))}

				<div className="absolute w-full flex flex-col">
					{Array.from(Array(gridLinesX).keys()).map(e => (
						<div key={e} style={{height: width}}>
							{!hidden && <div className="absolute w-full line-child-x" />}
						</div>
					))}
				</div>
			</div>
		</motion.div>
	)
}

export default Grid
