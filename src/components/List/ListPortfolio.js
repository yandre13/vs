import React from 'react'
import {CardPortfolio} from 'components/Card/CardPortfolio'
import {useAppQuery, useAppWidth} from 'context'

export default function ListPortfolio({projects = []}) {
	const [width] = useAppWidth()
	const query = useAppQuery()

	return (
		<>
			<div className="flex flex-wrap">
				{projects.map(project => (
					<div
						key={project.id}
						className={project.id === 54 ? 'xl:hidden' : ''}
					>
						<CardPortfolio
							project={project}
							blurDataURL={project.blurDataURL}
							width={width}
							query={query}
						/>
					</div>
				))}
			</div>
		</>
	)
}
