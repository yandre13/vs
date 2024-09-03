import React from 'react'
import Grid from 'components/Grid'
import Navbar from 'components/Navbar'
import cn from 'classnames'
import Image from 'next/image'
import banner from '../public/img/miniaturas/1.jpg'
import Footer from 'components/Footer'
import {useAppWidth, useAppQuery} from 'context'
import Logo from 'components/svgs/Logo'
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
		image: '/img/miniaturas/1.jpg',
	},
}

export default function Home() {
	const [width] = useAppWidth()
	const query = useAppQuery()
	const isMobile = useMedia('(max-width: 767px)')
	const loaded = useLoaded()
	const {data: logos} = useQuery('logos')
	const [showLogos, setShowLogos] = React.useState(getRandom(logos, 12) ?? [])
	const [showLogosMobile, setShowLogosMobile] = React.useState(
		getRandom(logos, 1) ?? [],
	)
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

	// React.useEffect(() => {
	// 	if (loaded) {
	// 		window.scrollTo(0, 0)
	// 	}
	// }, [loaded])
	React.useEffect(() => {
		if (!isMobile) {
			setTimeout(() => {
				const newLogos = getRandom(logos, 12)
				setShowLogos(newLogos)
			}, 5000)
		}
	}, [showLogos, isMobile])
	React.useEffect(() => {
		if (isMobile) {
			setTimeout(() => {
				const newLogos = getRandom(logos, 1)
				setShowLogosMobile(newLogos)
			}, 2000)
		}
	}, [showLogosMobile, isMobile])

	return (
		<>
			<SEO config={metadata} />
			<motion.main
				initial={{opacity: 0}}
				animate={{opacity: loaded ? 1 : 0}}
				transition={{duration: 0.8}}
				className={cn(
					'flex flex-wrap mx-3',
					isMobile ? 'mt-3' : 'my-3',
					'md:my-4 md:ml-0 md:mr-4',
				)}
			>
				<Navbar />
				<div className="relative h-full w-full md:w-[85%] lg:w-[87%] xl:w-[89%]">
					{isMobile && (
						<>
							<section className="relative h-[100vh] bg-black flex flex-col justify-center p-9 -ml-3 -mr-3 w-[calc(100%+1.5rem)]">
								<h1 className="font-sec text-5xl text-white">
									Renders de Arquitectura de Alta Calidad en Perú
								</h1>
								<div className="pb-16">
									<Logo color="white" classname="w-[200px]" />
								</div>
								<div className="flex items-center gap-3 transform -rotate-90 absolute bottom-[52px] left-[-30px]">
									<div className="border-b border-[#C2C2C2] w-14 h-1"></div>
									<span className="text-white text-xl">Desliza</span>
								</div>
							</section>
							<section className="p-9 -ml-3 -mr-3 w-[calc(100%+1.5rem)]">
								<p
									style={{
										lineHeight: 1.5,
										fontSize: 16,
									}}
								>
									Somos un equipo multidisciplinario de arquitectos, diseñadores
									y artistas. Todos enamorados del arte digital y la
									visualización en tres dimensiones.
									<br />
									Disfrutamos que los proyectos sean un reto, que nos exijan
									aprender constantemente. Queremos que nos busquen por un
									resultado único, una metodología innovadora, y nuestro aporte
									creativo en todo el proceso. Creemos en la oportunidad de
									plasmar espacios aún no existentes y contar una historia en
									ellos.
									<br />
									Compromiso, comunicación y pasión son partes fundamentales de
									cada proyecto. Amamos lo que hacemos. <br />
									Es así de simple.
								</p>
							</section>
							<section className="px-8 py-4 mb-10">
								<article className="overflow-hidden">
									<Image
										src={banner}
										alt="Render de arquitectura moderna en Lima realizado por Visualiza.pe"
										placeholder="blur"
									/>
								</article>
							</section>
							<section className="px-8">
								<h3 className="font-sec text-[26px] text-center">
									Nuestros Clientes.
								</h3>
							</section>
							<section className="-ml-3 -mr-3 w-[calc(100%+1.5rem)] mt-9 relative">
								<div
									className="w-full h-full bg-black"
									style={{minHeight: '240px'}}
								>
									<div className="w-full h-full">
										{showLogosMobile?.map(({path, alt}) => (
											<motion.img
												key={alt}
												initial={{opacity: 0.6}}
												animate={{opacity: 1}}
												transition={{duration: 0.7}}
												exit={{opacity: 0.6, transition: {duration: 0.5}}}
												src={path}
												alt={alt}
												style={{maxHeight: 240}}
												className="w-full !h-auto object-cover"
											/>
										))}
									</div>
								</div>
							</section>
						</>
					)}

					{!isMobile && (
						<>
							<div
								className={cn('flex flex-wrap h-full')}
								style={{marginBottom: isMobile && width}}
							>
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
										width: `${width * size.width}px`,
										height: `${width * size.height}px`,
										marginLeft: `${width * size.ml}px`,
										marginTop: width,
									}}
								>
									<Image
										src={banner}
										alt="Render de arquitectura moderna en Lima realizado por Visualiza.pe"
										placeholder="blur"
									/>
								</div>
								{!isMobile && (
									<>
										<div
											style={{
												width: `${width * size.textWidth}px`,

												marginLeft: width,
												marginTop: `${width * size.titleMt}px`,
												zIndex: 10,
											}}
										>
											<h1
												style={{height: width}}
												className="flex flex-col justify-center font-sec text-5xl pl-3"
											>
												Renders de Arquitectura de Alta Calidad en Perú
											</h1>
											<h2 className="pl-4 mt-8">
												Transforma tus Proyectos con Renders Arquitectónicos
												Profesionales
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
																(query === 'xl' ? 6 : query === 'lg' ? 8 : 7) -
															1
														}px`,
														lineHeight:
															query === 'xl'
																? 1.84
																: query === 'lg'
																? 1.7
																: 1.7,
														fontSize:
															query === 'xl' ? 17 : query === 'lg' ? 16 : 14,
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
											style={{
												width: `${width * 24}px`,
												height: `auto`,
												marginLeft: `${width * size.ml}px`,
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
												<div className="grid grid-cols-2 w-full">
													<div className="flex flex-col p-6 mt-4 h-full">
														<div className="item-list items-center h-full">
															<h3 className="text-xl font-bold">
																Visualización Realista para Proyectos
																Arquitectónicos
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
																				: 5) -
																		1
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

													<div className="relative">
														<Image
															src={'/img/home_4.jpg'}
															className="w-full h-full object-cover"
															width={1080}
															height={1080}
															alt={
																'Visualiza.pe - Expertos en renders de arquitectura y servicios de arquitectura en Perú'
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
																'Visualiza.pe - Expertos en renders de arquitectura y servicios de arquitectura en Perú'
															}
														/>
													</div>
													<div className="flex flex-col p-2 mt-32 justify-items-center items-center">
														<div className="item-list p-9 justify-items-center items-center">
															<h3 className="text-xl font-bold m-0">
																Visualización Realista para Proyectos
																Arquitectónicos
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
																				: 5) -
																		1
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
												</div>
											</div>
										</div>
									</>
								)}
							</div>
						</>
					)}
				</div>
				<ButtonWsp />
			</motion.main>
		</>
	)
}
