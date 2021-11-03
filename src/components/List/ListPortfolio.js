import React from 'react'

import {CardPortfolio} from 'components/Card/CardPortfolio'

import {data} from 'data'
import {useAppQuery, useAppWidth} from 'context'

export default function ListPortfolio() {
	const [width] = useAppWidth()
	const query = useAppQuery()
	return (
		<>
			{data.map(project => {
				return (
					<CardPortfolio
						key={project.id}
						project={project}
						width={width}
						query={query}
					/>
				)
			})}
		</>
	)
}
