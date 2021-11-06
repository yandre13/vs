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
import {AnimatePresence, motion} from 'framer-motion'
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
	const isText2 = useMedia('(max-width: 580px)')
	const router = useRouter()
	const loaded = useLoaded()
	const [s1, setS1] = React.useState(false)
	const [s2, setS2] = React.useState('S1')

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

	React.useEffect(() => {
		let timeout
		timeout = setTimeout(() => {
			setS1(!s1)
		}, 4000)
		return () => clearTimeout(timeout)
	}, [s1])

	React.useEffect(() => {
		let timeout
		timeout = setTimeout(() => {
			if (s2 === 'S1') {
				setS2('S2')
			} else if (s2 === 'S2') {
				setS2('S3')
			} else if (s2 === 'S3') {
				setS2('S4')
			} else {
				setS2('S1')
			}
		}, 3000)
		return () => clearTimeout(timeout)
	}, [s1])

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
								Visualización de arquitectura.
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
									alt="Visualización de arquitectura"
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
									frameBorder="0"
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

							<h2
								style={{
									height: isText2 ? width * 2 : width,
									width: isText2 ? width * 6 : 'auto',
									marginLeft: `${width * size.imgMl}px`,
									marginTop: width,
								}}
								className="font-sec text-[22px] md:text-[28px] w-full flex items-center pl-1 pt-2"
							>
								Fotogrametría y levantamiento topográfico en&nbsp;drone.
							</h2>
							<div
								className="overflow-hidden custom-height"
								style={{
									width: `${width * size.imgWidth}px`,
									height: `${width * size.imgHeight}px`,
									marginLeft: `${width * size.imgMl}px`,
									zIndex: 1,
									backgroundColor: '#333',
								}}
							>
								<AnimatePresence>
									{s1 ? (
										<motion.img
											key={'/img/servicios/S1.webp'}
											src={'/img/servicios/S1.webp'}
											initial={{opacity: 0.7}}
											animate={{opacity: 1}}
											exit={{opacity: 0.8, transition: {duration: 0.8}}}
											transition={{duration: 0.8, delay: 0.6}}
											alt="Fotogrametría y levantamiento topográfico en drone 1"
											className="w-full h-full object-cover"
										/>
									) : (
										<motion.img
											key={'/img/servicios/S2.webp'}
											src={'/img/servicios/S2.webp'}
											initial={{opacity: 0.7}}
											animate={{opacity: 1}}
											exit={{opacity: 0.8, transition: {duration: 0.8}}}
											transition={{duration: 0.8, delay: 0.6}}
											alt="Fotogrametría y levantamiento topográfico en drone 2"
											className="w-full h-full object-cover"
										/>
									)}
								</AnimatePresence>
							</div>

							<h2
								style={{
									height: isText2 ? width * 2 : width,
									width: isText2 ? width * 6 : 'auto',
									marginLeft: `${width * size.imgMl}px`,
									marginTop: width,
								}}
								className="font-sec text-[22px] md:text-[28px] w-full flex items-center pl-1 pt-2"
							>
								Diseño integral de fachadas e&nbsp;interiorismo.
							</h2>
							<div
								className="overflow-hidden custom-height"
								style={{
									width: `${width * size.imgWidth}px`,
									height: `${width * size.imgHeight}px`,
									marginLeft: `${width * size.imgMl}px`,
									zIndex: 1,
									marginBottom: `${width * (isMobileTablet ? 1 : 2)}px`,
									backgroundColor: '#333',
								}}
							>
								<AnimatePresence>
									{s2 === 'S1' ? (
										<motion.img
											key={'/img/servicios/Z1.webp'}
											src={'/img/servicios/Z1.webp'}
											initial={{opacity: 0.7}}
											animate={{opacity: 1}}
											exit={{opacity: 0.8, transition: {duration: 0.8}}}
											transition={{duration: 0.8, delay: 0.8}}
											alt="Diseño integral de fachadas e interiorismo 1"
											className="w-full h-full object-cover"
										/>
									) : s2 === 'S2' ? (
										<motion.img
											key={'/img/servicios/Z2.webp'}
											src={'/img/servicios/Z2.webp'}
											initial={{opacity: 0.7}}
											animate={{opacity: 1}}
											exit={{opacity: 0.8, transition: {duration: 0.8}}}
											transition={{duration: 0.8, delay: 0.8}}
											alt="Diseño integral de fachadas e interiorismo 2"
											className="w-full h-full object-cover"
										/>
									) : s2 === 'S3' ? (
										<motion.img
											key={'/img/servicios/Z3.webp'}
											src={'/img/servicios/Z3.webp'}
											initial={{opacity: 0.7}}
											animate={{opacity: 1}}
											exit={{opacity: 0.8, transition: {duration: 0.8}}}
											transition={{duration: 0.8, delay: 0.8}}
											alt="Diseño integral de fachadas e interiorismo 3"
											className="w-full h-full object-cover"
										/>
									) : (
										<motion.img
											key={'/img/servicios/Z4.webp'}
											src={'/img/servicios/Z4.webp'}
											initial={{opacity: 0.7}}
											animate={{opacity: 1}}
											exit={{opacity: 0.8, transition: {duration: 0.8}}}
											transition={{duration: 0.8, delay: 0.8}}
											alt="Diseño integral de fachadas e interiorismo 4"
											className="w-full h-full object-cover"
										/>
									)}
								</AnimatePresence>
							</div>
						</div>
					</div>
					<ButtonWsp />
				</motion.main>
			) : null}
		</>
	)
}
