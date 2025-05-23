import React from 'react'
import Image from 'next/image'
import {useRouter} from 'next/router'
import cn from 'classnames'
import {resizeImageUrl} from '../../utils/images'

function CardPortfolio({project, width, query, blurDataURL}) {
	const {id, aspectRatio, image, title, place} = project
	const router = useRouter()
	const [isHovered, setIsHovered] = React.useState(false)

	const open = (e, id) => {
		e.preventDefault()
		router.push(`?projectId=${id}`, undefined, {shallow: true})
	}

	return (
		<div
			style={{
				width: `${width * 6}px`,
				height: `${width * project.height}px`,
				marginTop: `${width * project?.styles?.[query].mt}px`,
				marginLeft: `${width * project?.styles?.[query].ml}px`,
				marginBottom: `${width * project?.styles?.[query]?.mb}px`,
			}}
		>
			<div className={cn('relative w-full h-0 overflow-hidden', aspectRatio)}>
				<a role="button" onClick={e => open(e, id)}>
					<Image
						src={resizeImageUrl(image, 1200)}
						placeholder="blur"
						blurDataURL={blurDataURL}
						fill
						quality={100}
						sizes="1200px"
						style={{
							objectFit: 'cover',
							objectPosition: project.objectPosition || 'center',
							willChange: 'filter',
						}}
						className={`${
							isHovered ? 'filter grayscale' : 'filter-none'
						} transition-all duration-300`}
						onMouseEnter={() => setIsHovered(true)}
						onMouseLeave={() => setIsHovered(false)}
						onTouchStart={() => setIsHovered(true)}
						onTouchEnd={() => setIsHovered(false)}
						alt={project.alt}
					/>
				</a>
				<div
					className={cn(
						isHovered ? 'block' : 'hidden',
						'absolute w-full h-full bg-white bg-opacity-60 pointer-events-none top-0',
					)}
				>
					<div className="absolute h-full w-full flex justify-center items-center text-center flex-col">
						<span className="w-[90%] text-xs sm:text-base lg:text-lg font-medium font-sec uppercase">
							{title}
						</span>
						<span className="w-[90%] text-xs sm:text-base font-main">
							{place}
						</span>
					</div>
				</div>
			</div>
		</div>
	)
}

export {CardPortfolio}
