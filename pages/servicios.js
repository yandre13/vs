import React from 'react'
import Grid from 'components/Grid'
import Navbar from 'components/Navbar'

import Image from 'next/image'

import modelado3D from '../public/img/servicios/MODELADO_3D.webp'
import drone from '../public/img/servicios/VISTAS_AEREAS_DRONE.webp'
import visual from '../public/img/servicios/VISUALIZACION_ARQUITECTONICA.webp'

import {useAppQuery, useAppWidth} from 'context'

import useMedia from 'hooks/useMedia'
import {useRouter} from 'next/router'
import {motion} from 'framer-motion'
import useLoaded from 'hooks/useLoaded'
import ButtonWsp from 'components/ButtonWsp'
import SEO from 'components/SEO'

const metadata = {
	title: 'Servicios',
	description:
		'Modelado 3D, Tour Virtual 360, Visualización Arquitectónica, Fotografía Aérea, Recorridos Virtuales y más.',
	open_graph: {
		url: 'https://www.visualiza.pe/servicios',
		image: '/img/servicios/VISUALIZACION_ARQUITECTONICA.webp',
	},
}

export default function Home() {
	const [width] = useAppWidth()
	const query = useAppQuery()
	const isMobileTablet = useMedia('(max-width: 1047px)')
	const router = useRouter()
	const loaded = useLoaded()

	const size = React.useMemo(() => {
		if (query === 'xl') {
			return {imgWidth: 23, imgHeight: 13, imgMl: 3}
		} else if (query === 'lg') {
			return {imgWidth: 18, imgHeight: 10, imgMl: 2}
		} else if (query === 'md') {
			return {imgWidth: 13, imgHeight: 7, imgMl: 1}
		} else {
			return {imgWidth: 6, imgHeight: 4, imgMl: 1}
		}
	}, [query])

	return (
		<>
			<SEO config={metadata} />
			{router.isReady ? (
				<motion.main
					initial={{opacity: 0}}
					animate={{opacity: loaded ? 1 : 0}}
					transition={{duration: 0.8}}
					className="flex flex-wrap my-3 mx-3 md:my-4 md:ml-0 md:mr-4"
				>
					<Navbar />
					<div className="relative h-full w-full md:w-[85%] lg:w-[87%] xl:w-[89%]">
						<Grid loaded={loaded} />
						<div className="flex flex-wrap">
							{/* imgs */}
							<h2
								style={{
									height: width,
									marginLeft: `${width * size.imgMl}px`,
									marginTop: width,
								}}
								className="font-sec text-[22px] md:text-[28px] w-full flex items-center pl-1 pt-2"
							>
								Modelado 3D.
							</h2>
							<div
								className="overflow-hidden custom-height"
								style={{
									width: `${width * size.imgWidth}px`,
									height: `${width * size.imgHeight}px`,
									marginLeft: `${width * size.imgMl}px`,
									zIndex: 1,
								}}
							>
								<Image
									src={modelado3D}
									alt="Modelado 3D"
									placeholder="blur"
									className="object-cover"
								/>
							</div>

							<h2
								style={{
									height: width,
									marginLeft: `${width * size.imgMl}px`,
									marginTop: width,
								}}
								className="font-sec text-[22px] md:text-[28px] w-full flex items-center pl-1 pt-2"
							>
								Tour virtual 360.
							</h2>
							<div
								className="overflow-hidden custom-height"
								style={{
									width: `${width * size.imgWidth}px`,
									height: `${width * size.imgHeight}px`,
									marginLeft: `${width * size.imgMl}px`,
									zIndex: 1,
								}}
							>
								<iframe
									className="ku-embed"
									frameborder="0"
									allowFullScreen
									allow="xr-spatial-tracking; gyroscope; accelerometer"
									scrolling="no"
									style={{width: '100%', height: '100%'}}
									src="https://mls.kuu.la/share/collection/7kHxv?fs=1&vr=1&autorotate=0.22&autop=25&thumbs=1&inst=0"
								></iframe>
							</div>

							<h2
								style={{
									height: width,
									marginLeft: `${width * size.imgMl}px`,
									marginTop: width,
								}}
								className="font-sec text-[22px] md:text-[28px] w-full flex items-center pl-1 pt-2"
							>
								Visualización arquitectónica.
							</h2>
							<div
								className="overflow-hidden custom-height"
								style={{
									width: `${width * size.imgWidth}px`,
									height: `${width * size.imgHeight}px`,
									marginLeft: `${width * size.imgMl}px`,
									zIndex: 1,
								}}
							>
								<Image
									src={visual}
									alt="Visualización arquitectónica"
									placeholder="blur"
									className="object-cover"
								/>
							</div>

							<h2
								style={{
									height: width,
									marginLeft: `${width * size.imgMl}px`,
									marginTop: width,
								}}
								className="font-sec text-[22px] md:text-[28px] w-full flex items-center pl-1 pt-2"
							>
								Vistas aéreas - drone.
							</h2>
							<div
								className="overflow-hidden custom-height"
								style={{
									width: `${width * size.imgWidth}px`,
									height: `${width * size.imgHeight}px`,
									marginLeft: `${width * size.imgMl}px`,
									zIndex: 1,
								}}
							>
								<Image
									src={drone}
									alt="Vistas aéreas - drone"
									className="object-cover"
									placeholder="blur"
								/>
							</div>

							<h2
								style={{
									height: width,
									marginLeft: `${width * size.imgMl}px`,
									marginTop: width,
								}}
								className="font-sec text-[22px] md:text-[28px] w-full flex items-center pl-1 pt-2"
							>
								Recorridos virtuales.
							</h2>
							<div
								className="overflow-hidden custom-height"
								style={{
									width: `${width * size.imgWidth}px`,
									height: `${width * size.imgHeight}px`,
									marginLeft: `${width * size.imgMl}px`,
									zIndex: 1,
								}}
							>
								<iframe
									width="100%"
									height="100%"
									src="https://www.youtube.com/embed/LthDz0yyUsE?rel=0"
									title="Recorridos virtuales"
									frameBorder="0"
									allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
									allowFullScreen
								></iframe>
							</div>

							<h2
								style={{
									height: width,
									marginLeft: `${width * size.imgMl}px`,
									marginTop: width,
								}}
								className="font-sec text-[22px] md:text-[28px] w-full flex items-center pl-1 pt-2"
							>
								Marketing inmobiliario.
							</h2>
							<div
								className="overflow-hidden custom-height"
								style={{
									width: `${width * size.imgWidth}px`,
									height: `${width * size.imgHeight}px`,
									marginLeft: `${width * size.imgMl}px`,
									zIndex: 1,
									marginBottom: `${width * (isMobileTablet ? 1 : 2)}px`,
								}}
							>
								<iframe
									width="100%"
									height="100%"
									src="https://www.youtube.com/embed/0uekokAx7hM?rel=0"
									title="Marketing inmobiliario"
									frameBorder="0"
									allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
									allowFullScreen
								></iframe>
							</div>
						</div>
					</div>
					<ButtonWsp />
				</motion.main>
			) : null}
		</>
	)
}
