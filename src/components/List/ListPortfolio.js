import React, { useState, useEffect, useRef } from 'react'
import { CardPortfolio } from 'components/Card/CardPortfolio'
import { useAppQuery, useAppWidth } from 'context'

export default function ListPortfolio({ projects = [] }) {
  const [width] = useAppWidth()
  const query = useAppQuery()

  const BATCH = 10
  const [visibleCount, setVisibleCount] = useState(BATCH)
  const loadMoreRef = useRef(null)

  useEffect(() => {
    if (!projects.length) return

    const observer = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting) {
          setVisibleCount(prev =>
            Math.min(prev + BATCH, projects.length)
          )
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 1.0,
      }
    )

    observer.observe(loadMoreRef.current)
    return () => observer.disconnect()
  }, [projects])   

  return (
    <>
      <div className="flex flex-wrap">
        {projects.slice(0, visibleCount).map(project => (
          <div
            key={project.id}
            className={project.id === 54 ? 'xl:hidden' : ''}
          >
            <CardPortfolio
              project={project}
              width={width}
              query={query}
            />
          </div>
        ))}
      </div>

      {visibleCount < projects.length && (
        <div ref={loadMoreRef} className="w-full h-1" />
      )}
    </>
  )
}
