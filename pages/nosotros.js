import React from 'react'
import Grid from 'components/Grid'
import Navbar from 'components/Navbar'
import cn from 'classnames'
import Image from 'next/image'
import banner from '../public/img/oficina.jpg'
import { useAppWidth, useAppQuery } from 'context'
import Logo from 'components/svgs/Logo'
// import logos from 'data/logos'
import useMedia from 'hooks/useMedia'
import useLoaded from 'hooks/useLoaded'
import { motion } from 'framer-motion'
import ButtonWsp from 'components/ButtonWsp'
import { getRandom } from 'utils'
import { useQuery } from 'react-query'
import SEO from 'components/SEO'

const metadata = {
	title: 'Estudio de Arquitectura en Lima - Innovación y Diseño - Visualiza.pe',
	description:
		'Nuestro estudio de arquitectura en Lima ofrece soluciones arquitectónicas innovadoras en Perú. Diseño, planificación y visualización 3D para proyectos de todos los tamaños.',
	open_graph: {
		url: 'https://www.visualiza.pe/nosotros',
		image: '/img/oficina.jpg',
	},
}

export default function Home() {
	const [width] = useAppWidth()
	const query = useAppQuery()
	const isMobile = useMedia('(max-width: 767px)')
	const is2xl = useMedia('(min-width: 1536px)');
	const is3xl = useMedia('(min-width: 1920px)');
	const is4xl = useMedia('(min-width: 2560px)');
	const isPC = useMedia('(min-width: 1024px)')
	const loaded = useLoaded()
	const { data: logos } = useQuery('logos')
	const [showLogos, setShowLogos] = React.useState(getRandom(logos, 12) ?? [])
	const [showLogosMobile, setShowLogosMobile] = React.useState(
		getRandom(logos, 1) ?? [],
	)
	const [isHovered, setIsHovered] = React.useState(false)


	const size = React.useMemo(() => {
		if (query === is2xl) {
			return {
				width: 13,
				height: 16,
				ml: 3,
				textWidth: 20,
				titleMt: 4,
				textMt: 1,
				gap: 1,
			}
		} else if (query === 'xl') {
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
			return { width: 6, height: 9, ml: 1 }
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
				initial={{ opacity: 0 }}
				animate={{ opacity: loaded ? 1 : 0 }}
				transition={{ duration: 0.8 }}
				className={cn(
					'flex flex-wrap mx-3',
					'md:ml-[0.3%]  lg:ml-[0.2%] xl:ml-[15%]   ',
					isMobile ? 'mt-3' : 'my-3',
					'md:my-4 md:ml-0 md:mr-4',
				)}
			>
				<Navbar />
				<div className="relative h-full w-full md:w-[85%] lg:w-[87%] xl:w-[89%]">
					{isMobile && (
						<>
							<section className="relative h-[100vh] bg-black flex flex-col justify-center p-9 -ml-3 -mr-3 w-[calc(100%+1.5rem)]">
								<h1 className="font-sec text-5xl text-white">Somos</h1>
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
									className='bg-white'
								>
									En VISUALIZA, convertimos proyectos inmobiliarios en experiencias visuales que cautivan y venden. Con más de una década de experiencia, creamos renders, recorridos virtuales y material audiovisual de alto impacto, destacando cada proyecto con creatividad e innovación. <br></br>
									<br></br>
									Nuestro equipo de arquitectos y diseñadores combina tecnología 3D avanzada con una narrativa única, permitiendo visualizar espacios aún no construidos. Creemos en la comunicación, el compromiso y la pasión por los detalles, asegurando resultados excepcionales. Hacemos que tu proyecto cobre vida y genere impacto.
								</p>
							</section>
							<section className="px-8 py-4 mb-10">
								<article className="overflow-hidden">
									<Image
										src={banner}
										alt="Arquitecto trabajando en el estudio de arquitectura en Lima, Perú"
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
									style={{ minHeight: '240px' }}
								>
									<div className="w-full h-full">
										{showLogosMobile?.map(({ path, alt }) => (
											<motion.img
												key={alt}
												initial={{ opacity: 0.6 }}
												animate={{ opacity: 1 }}
												transition={{ duration: 0.7 }}
												exit={{ opacity: 0.6, transition: { duration: 0.5 } }}
												src={path}
												alt={alt}
												style={{ maxHeight: 240 }}
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
							<Grid
								loaded={loaded}
								style={{
									height: isMobile && width * 11 + 1,
									overflow: isMobile ? 'hidden' : '',
								}}
							/>
							<div
								className={cn('flex flex-wrap')}
								style={{ marginBottom: isMobile && width }}
							>
								{/* imgs */}
								<div
									className="overflow-hidden"
									style={{
										width: `${width * size.width}px`,
										height: `${width * size.height}px`,
										marginLeft: `${width * size.ml}px`,
										marginTop: width,
									}}
								>
									<Image
										src={banner}
										alt="Somos Visualiza"
										placeholder="blur"
									/>
								</div>
								{!isMobile && (
									<>
										<div
											style={{
												width: `${width * size.textWidth}px`,
												height: `${width *
													(query === 'xl' ? 12 : query === 'lg' ? 11 : 10)
													}px`,
												marginLeft: width,
												marginTop: `${width *
													(is4xl ? 7.4 : is3xl ? 7 : is2xl ? 1.5 : query === 'xl' ? 3.4 : query === 'lg' ? 5 : 0.9)
													}px`,
												zIndex: 10,
											}}
										>
											<div className="flex items-center">
												<h1 className="font-sec text-5xl pl-3">Somos</h1>
												
											</div>
											<div className="ml-">
											<h2 className="pl-3">
													<Logo
														color="black"
														classname="w-[106px] md:w-[184px] lg:w-[186px] 2xl:w-[216px]"
													/>
												</h2>
											</div>
											<div
												style={{
													marginTop: `${width *
														(query === 'xl' ? 1 : query === 'lg' ? 1 : 0.18)
														}px`,
													marginLeft: 1,
													zIndex: 10,
												}}
											>
												<p
													style={{
														// overflow: isHovered ? 'auto' : 'hidden',
														height: `${width *
															(query === 'xl' ? 7 : query === 'lg' ? 5.2 : 3.9) -
															1
															}px`,
														lineHeight:
															query === 'xl'
																? 1.84
																: query === 'lg'
																	? 1.7
																	: 1.6,
														fontSize: is2xl ? '100%' : query === 'xl' ? '85%' : query === 'lg' ? '80%' : '65%',
													}}
													className={cn('p-3 pscroll bg-white text-justify')}

													onMouseEnter={() => setIsHovered(true)}
													onMouseLeave={() => setIsHovered(false)}
												>
													En <strong>VISUALIZA</strong>, convertimos proyectos inmobiliarios en experiencias visuales que cautivan y venden. Con más de una década de experiencia, creamos <strong>renders, recorridos virtuales y material audiovisual</strong> de alto impacto, destacando cada proyecto con creatividad e innovación.
													<br></br><br></br>
													Nuestro equipo de arquitectos y diseñadores combina tecnología 3D avanzada con una narrativa única, permitiendo visualizar espacios aún no construidos. Creemos en la comunicación, el compromiso y la pasión por los detalles, asegurando resultados excepcionales. <strong>Hacemos que tu proyecto cobre vida y genere impacto</strong>.

												</p>
											</div>
										</div>

										<div
											style={{
												width: `${width * 24}px`,
												height: `${width *
													(query === 'xl' ? 10 : query === 'lg' ? 11 : 14)
													}px`,
												marginLeft: `${width * size.ml}px`,
												marginTop: width,
											}}
										>

											<h3
												className="font-sec text-[22px] md:text-[28px] pl-1 flex items-center"
												style={{ height: width }}
											>
												Nuestros clientes.
											</h3>
											<div
												className="flex flex-wrap"
												style={{ marginTop: width, columnGap: width * size.gap }}
											>
												{showLogos?.map(({ path, alt }) => (
													<motion.div
														key={alt}
														style={{
															width: `${width * 3}px`,
															height: `${width * 2}px`,
															marginBottom: width,
															zIndex: 10,
														}}
														className="bg-black
														"
													>
														<motion.img
															key={alt}
															initial={{ opacity: 0.6 }}
															animate={{ opacity: 1 }}
															transition={{ duration: 1.8 }}
															exit={{ opacity: 0.6, transition: { duration: 0.9 } }}
															className="w-full !h-auto object-cover"
															src={path}
															alt={alt}
														/>
													</motion.div>
												))}
											</div>
										</div>
									</>
								)}
							</div>
						</>
					)}
				</div>
				<ButtonWsp />
			</motion.main >
		</>
	)
}
