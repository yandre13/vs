import React from 'react'
import Grid from 'components/Grid'
import Navbar from 'components/Navbar'

import Link from 'next/link'
import Image from 'next/image'
import CardHome from 'components/Card/CardHome'
import Footer from 'components/Footer'

import footer from '../public/img/FOOTER.jpg'

import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/swiper.min.css'
import 'swiper/components/navigation/navigation.min.css'
import 'swiper/components/pagination/pagination.min.css'

import SwiperCore, {Autoplay, Pagination, Zoom} from 'swiper/core'
import {useAppWidth, useAppQuery} from 'context'
import {data} from 'data/home'
import {motion} from 'framer-motion'
import useLoaded from 'hooks/useLoaded'
import ButtonWsp from 'components/ButtonWsp'
import SEO from 'components/SEO'

// install Swiper modules
SwiperCore.use([Autoplay, Pagination, Zoom])

const metadata = {
	title: 'Renders de Arquitectura',
	description:
		'Somos un equipo de arquitectos, diseñadores y artistas enamorados del modelado 3D, creativos y con una metodología innovadora en la Arquitectura.',
	open_graph: {
		url: 'https://www.visualiza.pe',
		image: '/img/FOOTER.jpg',
	},
}

export default function Home() {
	const [width] = useAppWidth()
	const query = useAppQuery()
	const loaded = useLoaded()

	const size = React.useMemo(() => {
		if (query === 'xl') {
			return {
				width: 29,
				height: 15,
				btnWidth: 3,
				btnMl: 1,
				btnMt: 3,
				footerW: 29,
				footerH: 9,
			}
		} else if (query === 'lg') {
			return {
				width: 22,
				height: 12,
				btnWidth: 5,
				btnMl: 4,
				btnMt: 10,
				footerW: 22,
				footerH: 8,
			}
		} else if (query === 'md') {
			return {
				width: 15,
				height: 8,
				btnWidth: 5,
				btnMl: 5,
				btnMt: 1,
				footerW: 15,
				footerH: 6,
			}
		} else {
			return {
				width: 8,
				height: 5,
				btnWidth: 4,
				btnMl: 2,
				btnMt: 2,
				footerW: 8,
				footerH: 4,
			}
		}
	}, [query])

	React.useEffect(() => {
		const bullets = document.querySelector(
			'.swiper-pagination.swiper-pagination-clickable',
		)
		if (bullets) {
			bullets.style.width = `${4 * width}px`
			bullets.style.display = 'flex'
			bullets.style.marginLeft = `${
				(query === 'xl' ? 12 : query === 'lg' ? 9 : query === 'md' ? 6 : 2) *
				width
			}px`
			bullets.style.justifyContent = 'space-around'
		}
	}, [width])
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
					<Grid loaded={loaded} />
					<div className="flex flex-wrap">
						{/* ADS */}
						<div className="w-full z-0">
							<Swiper
								pagination={{clickable: true}}
								loop
								autoplay={{
									delay: 4500,
									disableOnInteraction: false,
								}}
								className="home_slider"
							>
								<SwiperSlide>
									<article className="w-full">
										<div
											className="w-full"
											style={{height: `${width * size.height}px`}}
										>
											<img
												src="/img/carrusel/1.jpg"
												alt="Banner 1"
												className="absolute top-0 w-full h-full object-cover"
												width={1920}
												height={1080}
											/>
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
												src="/img/carrusel/2.jpg"
												alt="Banner 2"
												className="absolute top-0 w-full h-full object-cover"
												width={1920}
												height={1080}
											/>
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
												src="/img/carrusel/3.jpg"
												alt="Banner 3"
												className="absolute top-0 w-full h-full object-cover"
												width={1920}
												height={1080}
											/>
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
												src="/img/carrusel/4.jpg"
												alt="Banner 4"
												className="absolute top-0 w-full h-full object-cover"
												width={1920}
												height={1080}
											/>
										</div>
									</article>
								</SwiperSlide>
							</Swiper>
						</div>

						{/* imgs */}

						<CardHome
							image={data[0].image}
							style={{
								width: `${width * data[0].size[query]}px`,
								height: `${width * data[0].size[query]}px`,
								marginTop: `${width * data[0].styles[query].mt}px`,
								marginLeft: `${width * data[0].styles[query].ml}px`,
								// marginBottom: `${width * project?.styles?.[query]?.mb}px`,
							}}
							aspectRatio={data[0].aspectRatio}
							title={data[0].title}
							description={data[0].description}
						/>

						<CardHome
							image={data[1].image}
							style={{
								width: `${width * data[1].size[query]}px`,
								height: `${width * data[1].size[query]}px`,
								marginTop: `${width * data[1].styles[query].mt}px`,
								marginLeft: `${width * data[1].styles[query].ml}px`,
								// marginBottom: `${width * project?.styles?.[query]?.mb}px`,
							}}
							aspectRatio={data[1].aspectRatio}
							title={data[1].title}
							description={data[1].description}
						>
							<div className="z-[-1] absolute md:top-[-24.2%] md:w-[52.28%] md:right-[-26.22%] md:pb-[60.22%] xl:top-[-25%] xl:w-[52.5%] xl:right-[-27.8%] xl:pb-[62.5%]">
								<img
									src="/img/img_v.png"
									className="w-full h-full absolute top-0 left-0 object-cover"
									alt="V"
								/>
							</div>
						</CardHome>

						<div
							className="hidden lg:block
							lg:w-[22.7%] lg:ml-[4.54%] lg:mr-[54.48%] lg:mt-[-27.24%]
							xl:w-[13.792%] xl:ml-[17.24%] xl:mr-0 xl:mt-[-6.896%]"
						>
							<div className="w-full h-0 relative pb-[120%] xl:pb-[125%]">
								<img
									src="/img/img_a.png"
									className="w-full h-full absolute top-0 left-0 object-cover"
									alt="A"
								/>
							</div>
						</div>

						<CardHome
							image={data[2].image}
							style={{
								width: `${width * data[2].size[query]}px`,
								height: `${width * data[2].size[query]}px`,
								marginTop: `${width * data[2].styles[query].mt}px`,
								marginLeft: `${width * data[2].styles[query].ml}px`,
								// marginBottom: `${width * project?.styles?.[query]?.mb}px`,
							}}
							aspectRatio={data[2].aspectRatio}
							title={data[2].title}
							description={data[2].description}
						/>

						{data[3].size[query] !== 0 && (
							<CardHome
								image={data[3].image}
								style={{
									width: `${width * data[3].size[query]}px`,
									height: `${width * data[3].size[query]}px`,
									marginTop: `${width * data[3].styles[query].mt}px`,
									marginLeft: `${width * data[3].styles[query].ml}px`,
									// marginBottom: `${width * project?.styles?.[query]?.mb}px`,
								}}
								aspectRatio={data[3].aspectRatio}
								title={data[3].title}
								description={data[3].description}
							/>
						)}

						<div
							className="hidden xl:block
							xl:w-[6.896%] xl:ml-[31.032%] xl:mr-0 xl:mt-[3.448%]"
						>
							<div className="w-full h-0 relative pb-[150%] xl:pb-[150%]">
								<img
									src="/img/img_v2.png"
									className="w-full h-full absolute top-0 left-0 object-cover"
									alt="V2"
								/>
							</div>
						</div>

						<div
							style={{
								width: width * size.btnWidth,
								height: width,
								marginLeft: width * size.btnMl,
								marginTop: width * size.btnMt,
							}}
						>
							<Link href="proyectos">
								<a className="w-full bg-[#FDD704] relative h-full flex">
									<div className="absolute h-full w-[75%] md:w-[80%] xl:w-[66.66%] text-center text-sm md:text-base xl:text-xs font-sec inline-flex justify-center items-center">
										Ver más proyectos
									</div>
									<div className="absolute h-full w-[25%] md:w-[20%] xl:w-[33.33%] text-center text-xl font-third inline-flex justify-center items-center right-0">
										<span className="transform scale-[1.5]">+</span>
									</div>
								</a>
							</Link>
						</div>

						{/* LAST */}
						<article className="w-full">
							<div
								style={{
									width: width * size.footerW,
									height: width * size.footerH,
								}}
								className="overflow-hidden custom-height"
							>
								<Image
									src={footer}
									alt="Visualiza cover"
									className="w-full h-full object-cover"
									placeholder="blur"
								/>
							</div>
						</article>
					</div>
					<Footer />
				</div>
				<ButtonWsp />
			</motion.main>
		</>
	)
}
