import React from 'react'
import Grid from 'components/Grid'
import Navbar from 'components/Navbar'
import cn from 'classnames'
import Image from 'next/image'
import banner from '../public/img/miniaturas/marcan_pod.webp'
import Footer from 'components/Footer'
import {useAppWidth, useAppQuery} from 'context'
import Logo from 'components/svgs/Logo'

import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/swiper.min.css'
import 'swiper/components/navigation/navigation.min.css'
import 'swiper/components/pagination/pagination.min.css'

import SwiperCore, {Autoplay, Pagination, Zoom} from 'swiper/core'

// import logos from 'data/logos'
import useMedia from 'hooks/useMedia'
import useLoaded from 'hooks/useLoaded'
import {motion} from 'framer-motion'
import ButtonWsp from 'components/ButtonWsp'
import {getRandom} from 'utils'
import {useQuery} from 'react-query'
import SEO from 'components/SEO'

const metadata = {
	title: 'Especialistas en Renders de Arquitectura en Perú - Visualiza.pe',
	description:
		'Descubre cómo nuestros renders de arquitectura en Perú transforman tus proyectos arquitectónicos con visualizaciones de alta calidad.',
	open_graph: {
		url: 'https://www.visualiza.pe/renders-de-arquitectura',
		image: '/img/miniaturas/marcan_pod.webp',
	},
}

export default function Home() {
	const [width] = useAppWidth()
	const query = useAppQuery()
	const loaded = useLoaded()
	const {data: logos} = useQuery('logos')
	const [showLogos, setShowLogos] = React.useState(getRandom(logos, 12) ?? [])
	const [isHovered, setIsHovered] = React.useState(false)

	const size = React.useMemo(() => {
		if (query === 'xl') {
			return {
				width: 11,
				height: 16,
				ml: 3,
				textWidth: 10,
				titleMt: 4,
				textMt: 1,
				gap: 1,
			}
		} else if (query === 'lg') {
			return {
				width: 8,
				height: 12,
				ml: 2,
				textWidth: 9,
				titleMt: 3,
				textMt: 1,
				gap: 2,
			}
		} else if (query === 'md') {
			return {
				width: 6,
				height: 10,
				ml: 1,
				textWidth: 6,
				titleMt: 2,
				textMt: 0,
				gap: 2,
			}
		} else {
			return {width: 6, height: 9, ml: 1}
		}
	}, [query])

	React.useEffect(() => {
		setTimeout(() => {
			const newLogos = getRandom(logos, 12)
			setShowLogos(newLogos)
		}, 5000)
	}, [showLogos])

	return (
		<>
			<SEO config={metadata} />
			<motion.main
				initial={{opacity: 0}}
				animate={{opacity: loaded ? 1 : 0}}
				transition={{duration: 0.8}}
				className={cn(
					'flex flex-wrap mx-3',
					'my-3',
					'md:my-4 md:ml-0 md:mr-4 md:ml-[0.3%]  lg:ml-[0.2%] xl:ml-[15%] ',
				)}
			>
				<Navbar />
				<div className="relative h-full w-full md:w-[100%] lg:w-[87%] xl:w-[89%] ">
					<div className={cn('flex flex-wrap h-full justify-center')} style={{marginBottom: width}}>
						<Grid
							loaded={loaded}
							style={{
								height: '100%',
								width: '100%',
								backgroundRepeat: 'repeat',
							}}
						/>
						{/* imgs */}
						<div
							className="overflow-hidden h-full"
							style={{
								width: ``,
								height: ``,
								marginLeft: `0em`,
								marginTop: width,
								marginBottom: `0em`,
								
							}}
						>
							<Image
							
								src={banner}
								alt="Render de arquitectura moderna en Lima realizado por Visualiza.pe"
								placeholder="blur"
							/>
						</div>

						<div
							style={{
								width: `${width * size.textWidth}px`,
								marginLeft: `1em` ,
								marginTop: `${width * size.titleMt}px`,
								
								zIndex: 10,
							}}
						>
							<h1
								style={{height: `auto`,
									marginTop: `0`,
									marginBottom: `20px`
							
								}}
								className="flex flex-col justify-center font-sec text-5xl"
							>
								Renders de Arquitectura de Alta Calidad en Perú
							</h1>
							<h2 className="pl-4 mt-8">
								Transforma tus Proyectos con Renders Arquitectónicos Profesionales
							</h2>
							<div
								style={{
									marginTop: `${width * size.textMt + 1}px`,
									marginLeft: 1,
									zIndex: 10,
								}}
							>
								<p
									style={{
										background: '#fff',
										alignItems: 'center',
										overflow: isHovered ? 'auto' : 'hidden',
										height: `${
											width *
												(query === 'xl' ? 6 : query === 'lg' ? 8 : 7) - 1
										}px`,
										lineHeight:
											query === 'xl'
												? 1.84
												: query === 'lg'
												? 1.7
												: 1.7,
										fontSize: query === 'xl' ? 17 : query === 'lg' ? 16 : 14,
									}}
									className={cn('p-3 pscroll')}
									onMouseEnter={() => setIsHovered(true)}
									onMouseLeave={() => setIsHovered(false)}
								>
									Los <b>renders de arquitectura</b> son una herramienta
									esencial para visualizar y comunicar tus proyectos de
									manera efectiva.
									<br />
									En <b>Visualiza.pe</b>, creamos{' '}
									<b>renders de arquitectura</b> que no solo muestran la
									realidad de tu diseño, sino que también ayudan a
									acelerar la venta y aprobación de proyectos.
									<br />
									Desde <b>Lima</b> hasta todo <b>Perú</b>, nuestros
									renders capturan cada detalle con precisión,
									asegurando que tu visión se convierta en una realidad
									tangible.
								</p>
							</div>
						</div>

						<div
						//className='ml- md:ml-[calc(width * size.ml)]'
							style={{
								width: `${width * 24}px`,
								height: `auto`,
								marginLeft: width > 768 ? `${width * size.xl}px` : `0px`,
								marginTop: query === 'xl' ? width : 0,
							}}
						>
							<h2
								className="font-sec text-[40px] md:text-[45px] pl-1  mt-9 mb-28 text-center"
								style={{height: width}}
							>
								Beneficios de Nuestros Renders Arquitectónicos
							</h2>

							{/*item*/}
							<div className="item">
								<div className="grid grid-cols-1 md:grid-cols-2  w-full">
									<div className="flex flex-col p-6 mt-4 h-full">
										<div className="item-list items-center h-full">
											<h3 className="text-xl font-bold">
												Visualización Realista para Proyectos Arquitectónicos
											</h3>
											<p
												style={{
													background: '#fff',
													lineHeight:
														query === 'xl'
															? 1.84
															: query === 'lg'
															? 1.7
															: 1.7,
													fontSize:
														query === 'xl'
															? 17
															: query === 'lg'
															? 16
															: 14,
													height: `${
														width *
															(query === 'xl'
																? 4
																: query === 'lg'
																? 4
																: 5) - 1
													}px`,
												}}
												className="p-0 pscroll mt-4"
											>
												Nuestros renders de arquitectura permiten que
												arquitectos, desarrolladores y clientes vean el
												proyecto como si ya estuviera construido. Con
												detalles realistas, materiales precisos y
												ambientación adecuada, nuestros renders
												transforman los planos en una imagen clara y
												comprensible.
											</p>
										</div>
									</div>

									<div className="relative ">
										<Image
											src={'/img/home_4.jpg'}
											className="w-full h-full object-cover"
											width={1080}
											height={1080}
											alt={
												'Visualización realista de un proyecto de arquitectura en Lima'
											}
										/>
									</div>

									<div className="relative mt-32">
										<Image
											src={'/img/home_2.jpg'}
											className="w-full h-full object-cover"
											width={1080}
											height={1080}
											alt={
												'Render de arquitectura facilitando la aprobación de un proyecto en Perú'
											}
										/>
									</div>
									<div className="flex flex-col p-2 mt-32 justify-items-center items-center">
										<div className="item-list p-9 justify-items-center items-center">
											<h3 className="text-xl font-bold m-0">
												Visualización Realista para Proyectos Arquitectónicos
											</h3>
											<p
												style={{
													background: '#fff',
													lineHeight:
														query === 'xl'
															? 1.84
															: query === 'lg'
															? 1.7
															: 1.7,
													fontSize:
														query === 'xl'
															? 17
															: query === 'lg'
															? 16
															: 14,
													height: `${
														width *
															(query === 'xl'
																? 4
																: query === 'lg'
																? 4
																: 5) - 1
													}px`,
												}}
												className="p-0 pscroll mt-4"
											>
												Al presentar tus proyectos con renders de
												arquitectura, puedes comunicar tu visión de
												manera más efectiva, facilitando la toma de
												decisiones por parte de clientes e
												inversionistas. Nuestros renders ayudan a
												acelerar la aprobación de proyectos en Lima y en
												todo Perú.
											</p>
										</div>
									</div>

									<div className="relative mt-32">
										<Image
											src={'/img/carrusel/2.webp'}
											className="w-full h-full object-cover  "
											width={1900}
											height={900}
											alt={
												'Comunicación efectiva con clientes usando renders arquitectónicos en Lima'
											}
										/>
									</div>
									<div className="flex flex-col p-2 mt-32 justify-items-center items-center">
										<div className="item-list p-9 justify-items-center items-center">
											<h3 className="text-xl font-bold m-0">
												Optimiza la Comunicación con Clientes e Inversionistas
											</h3>
											<p
												style={{
													background: '#fff',
													lineHeight:
														query === 'xl'
															? 1.84
															: query === 'lg'
															? 1.7
															: 1.7,
													fontSize:
														query === 'xl'
															? 17
															: query === 'lg'
															? 16
															: 14,
													height: `${
														width *
															(query === 'xl'
																? 4
																: query === 'lg'
																? 4
																: 5) - 1
													}px`,
												}}
												className="p-0 pscroll mt-4"
											>
												Un render arquitectónico de calidad puede ser la
												diferencia entre un proyecto aprobado o
												rechazado. Nuestros renders permiten una
												comunicación más clara y convincente con todas
												las partes interesadas, eliminando la
												incertidumbre y mostrando el valor real de tu
												propuesta.
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>

						<div className="flex flex-col w-full mt-10 mb-10 items-center">
							<h2
								className="font-sec text-[40px] md:text-[45px]  text-center"
								style={{height: width}}
							>
								Proyectos Destacados en Lima y Perú
							</h2>
						</div>
						<div className="w-full mt-11">
							<Swiper
								pagination={{clickable: true}}
								loop
								speed={1000}
								autoplay={{
									delay: 4500,
									disableOnInteraction: false,
								}}
								className="home_slider"
							>
								<SwiperSlide>
									<article className="w-full">
										<div
											className="w-full relative"
											style={{height: `${width * size.height}px`}}
										>
											<img
												src="img\proyectos\MODULAR_MENDIBURÚ\MENDIBURÚ.webp"
												alt="Render de arquitectura residencial en San Isidro, Lima"
												className="absolute top-0 w-full h-full object-cover"
												width={1920}
												height={1080}
											/>
											<div className="absolute bottom-10 left-10 bg-black bg-opacity-50 text-white p-4 rounded-md">
												<h3 className="font-semibold">
													Proyecto Residencial en San Isidro, Lima
												</h3>
												<p className="text-xl ">
													Un render arquitectónico que destaca por su
													realismo y detalle en la visualización de un
													edificio residencial de lujo.
												</p>
											</div>
										</div>
									</article>
								</SwiperSlide>
								<SwiperSlide>
									<article className="w-full">
										<div
											className="w-full"
											style={{height: `${width * size.height}px`}}
										>
											<img
												src="img\proyectos\MARCAN_R6000\R6000FINAL.webp"
												alt="Render de un centro comercial en Miraflores, Lima"
												className="absolute top-0 w-full h-full object-cover"
												width={1920}
												height={1080}
											/>

											<div className="absolute bottom-10 left-10 bg-black bg-opacity-50 text-white p-4 rounded-md">
												<h3 className="font-semibold">
													Centro Comercial en Miraflores
												</h3>
												<p className="text-xl ">
													Visualización 3D de alta calidad que permitió
													a los inversores comprender el diseño y el
													flujo de clientes.
												</p>
											</div>
										</div>
									</article>
								</SwiperSlide>
								{/* <SwiperSlide>
									<article className="w-full">
										<div
											className="w-full"
											style={{height: `${width * size.height}px`}}
										>
											<img
												src="img\proyectos\larapa\FACHADA.webp"
												alt="Diseño arquitectónico con render 3D en Lima, Perú"
												className="absolute top-0 w-full h-full object-cover"
												width={1920}
												height={1080}
											/>

											<div className="absolute bottom-10 left-10 bg-black bg-opacity-50 text-white p-4 rounded-md">
												<h3 className="font-semibold">
													Hotel Boutique en Cusco
												</h3>
												<p className="text-xl ">
													Render de arquitectura que capturó la esencia
													y la atmósfera de un hotel en el corazón de
													Cusco, integrando la cultura local con un
													diseño moderno.
												</p>
											</div>
										</div>
									</article>
								</SwiperSlide> */}
								
							</Swiper>
						</div>
					</div>
					<Footer/>
				</div>
				<ButtonWsp />
			</motion.main>
		</>
	)
}
