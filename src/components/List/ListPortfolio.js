// components/List/ListPortfolio.jsx
import React, { useState, useEffect, useRef } from 'react'
import { CardPortfolio } from 'components/Card/CardPortfolio'
import { data } from 'data'
import { useAppQuery, useAppWidth } from 'context'

export default function ListPortfolio() {
  const [width] = useAppWidth()
  const query = useAppQuery()

  // cuántos ítems mostrar inicialmente y de a cuánto cargar más
  const BATCH = 10
  const [visibleCount, setVisibleCount] = useState(BATCH)
  const loadMoreRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting) {
          setVisibleCount(prev =>
            Math.min(prev + BATCH, data.length)
          )
        }
      },
      {
        root: null,
        rootMargin: '200px',
        threshold: 0.5,
      }
    )
    if (loadMoreRef.current) {
      observer.observe(loadMoreRef.current)
    }
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <div className="flex flex-wrap">
        {data.slice(0, visibleCount).map(project => (
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

      {/* Sentinel para disparar carga de más ítems */}
      {visibleCount < data.length && (
        <div
          ref={loadMoreRef}
          className="w-full h-1"
        />
      )}
    </>
  )
}
