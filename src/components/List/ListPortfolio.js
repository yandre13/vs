import React from 'react'

import { CardPortfolio } from 'components/Card/CardPortfolio'
import { data } from 'data'
import { useAppQuery, useAppWidth } from 'context'

export default function ListPortfolio() {
  const [width] = useAppWidth()
  const query = useAppQuery()

  return (
    <>
      {data.map(project => (
        <div
          key={project.id}
          className={
            (project.id === 54)
              ? 'xl:hidden'   // oculta en pantallas ≥ 2xl
              : ''
          }
        >
          <CardPortfolio
            project={project}
            width={width}
            query={query}
          />
        </div>
      ))}
    </>
  )
}
