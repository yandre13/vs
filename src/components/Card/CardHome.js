import React from 'react'
import Image from 'next/image'
import cn from 'classnames'

export default function CardHome({
	aspectRatio,
	image,
	title,
	alt,
	description,
	children,
	imgStyle, // Nuevo prop para estilos de la imagen
	...props
}) {
	return (
		<div {...props}>
			<div className={cn('w-full h-full relative', aspectRatio)}>
				<Image
					src={image}
					alt={alt}
					placeholder="blur"
					className="w-full h-full absolute top-0 left-0 object-cover"
					style={imgStyle}  // Se aplican los estilos enviados desde el componente padre
				/>

				<div
					className={cn(
						'absolute bg-black bottom-[-16.66%] w-[50%]',
						title.includes('Lib') ? 'right-0' : '',
						'pb-[16.66%] md:w-[22.22%] md:bottom-0 md:right-[-22.22%] md:pb-[22.22%] xl:w-[25%] xl:right-[-25%] xl:pb-[25%]',
					)}
				>
					<div className="absolute h-full w-full text-center flex justify-center items-center text-white flex-col">
						<span className="w-[90%] text-xs sm:text-base md:text-sm font-sec">
							{title}
						</span>
						<span className="w-[90%] text-xs sm:text-base md:text-xs font-main">
							{description}
						</span>
					</div>
				</div>
				{children}
			</div>
		</div>
	)
}
