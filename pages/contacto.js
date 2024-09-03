import React from 'react'
import Grid from 'components/Grid'
import Navbar from 'components/Navbar'
import Image from 'next/image'
import banner from '../public/img/contacto.webp'

import {useAppQuery, useAppWidth} from 'context'
import useMedia from 'hooks/useMedia'
import cn from 'classnames'
import {motion} from 'framer-motion'
import ButtonWsp from 'components/ButtonWsp'
import useLoaded from 'hooks/useLoaded'
import SEO from 'components/SEO'

const metadata = {
	title: 'Contáctanos para Servicios de Arquitecto en Perú - Visualiza.pe',
	description: 'Comunícate con un arquitecto en Perú para desarrollar y visualizar tu próximo proyecto arquitectónico. Experiencia en proyectos innovadores y sostenibles.',
	open_graph: {
		url: 'https://www.visualiza.pe/contacto',
		image: '/img/contacto.webp',
	},
}

export default function Home() {
	const [width] = useAppWidth()
	const query = useAppQuery()
	const isMobile = useMedia('(max-width: 767px)')
	const loaded = useLoaded()
	const size = React.useMemo(() => {
		if (query === 'xl') {
			return {
				imgWidth: 10,
				imgHeight: 14,
				imgMt: 0.7,
				imgMl: 2,
				textWidth: 11,
				textHeight: 12,
				textMl: 1,
				textMt: 4.8,
			}
		} else if (query === 'lg') {
			return {
				imgWidth: 9,
				imgHeight: 13,
				imgMt: 0.7,
				imgMl: 2,
				textWidth: 9,
				textHeight: 6,
				textMl: 1,
				textMt: 4,
			}
		} else if (query === 'md') {
			return {
				imgWidth: 6.8,
				imgHeight: 9,
				imgMt: 0.7,
				imgMl: 1,
				textWidth: 4,
				textHeight: 6,
				textMl: 1,
				textMt: 3,
			}
		} else {
			return {
				imgWidth: 8,
				imgHeight: 10,
				imgMt: 0,
				imgMl: 0,
				textWidth: 8,
				textHeight: 6,
				textMl: 0,
				textMt: 1,
			}
		}
	}, [query])
	return (
		<>
			<SEO config={metadata} />
			<motion.main
				initial={{opacity: 0}}
				animate={{opacity: loaded ? 1 : 0}}
				transition={{duration: 0.8}}
				className="flex flex-wrap my-3 mx-3 md:my-4 md:ml-0 md:mr-4"
			>
				<Navbar />
				<div className="relative h-full w-full md:w-[85%] lg:w-[87%] xl:w-[89%]">
					<Grid hidden />
					<div className="flex flex-wrap">
						{/* imgs */}
						<h1
							className={cn(
								'font-sec text-3xl pl-1',
								isMobile && 'absolute !w-auto inset-x-0 z-10 !p-0 text-center',
							)}
							style={{
								width: `${width * 24}px`,
								height: `${width * 1}px`,
								marginLeft: `${width * size.imgMl}px`,
								marginTop: `${width * (isMobile ? 1.5 : 1)}px`,
							}}
						>
							Conversemos.
						</h1>
						<div
							className="overflow-hidden custom-height"
							style={{
								width: `${width * size.imgWidth}px`,
								height: `${width * size.imgHeight}px`,
								marginLeft: `${width * size.imgMl}px`,
								marginTop: `${width * size.imgMt}px`,
							}}
						>
							<Image
								src={banner}
								alt="Contáctanos para servicios de arquitecto en Perú - Visualiza.pe"
								placeholder="blur"
								className="object-cover h-full"
							/>
						</div>
						<div
							style={{
								width: `${width * size.textWidth}px`,
								height: `${width * size.textHeight}px`,
								marginLeft: width * size.textMl,
								marginTop: `${width * size.textMt}px`,
							}}
							className={cn(isMobile ? 'px-4' : 'pl-3')}
						>
							<p className="text-sm font-sec leading-none">Email</p>
							<a className="text-sm" href="mailto:contacto@visualiza.pe">
								contacto@visualiza.pe
							</a>

							<p className="text-sm font-sec leading-none mt-6">Número</p>
							<a className="text-sm" href="tel:+51956453424">
								+51 956 453 424
							</a>

							<p className="text-sm leading-snug mt-8">
								Avenida dos de mayo 1830 <br />
								San Isidro 17056 <br />
								Lima - Perú
							</p>
						</div>
					</div>
				</div>
				<ButtonWsp />
			</motion.main>
		</>
	)
}
